import { NextResponse } from "next/server";
import { leadSchema, normalizeLead } from "@/lib/leadSchema";
import { qualificar } from "@/lib/qualification";
import { importContactToSuri, suriConfigured } from "@/lib/suri";
import { getSupabaseAdmin, supabaseConfigured } from "@/lib/supabaseAdmin";

export const runtime = "nodejs";

export async function POST(req: Request) {
  // 1) Parse + validação
  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    const msg = parsed.error.issues[0]?.message ?? "Dados inválidos";
    return NextResponse.json({ ok: false, error: msg }, { status: 422 });
  }

  // honeypot anti-spam: se preenchido, finge sucesso e descarta
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, tier: "frio" });
  }

  // 2) Normaliza + qualifica
  const lead = normalizeLead(parsed.data);
  const q = qualificar(lead);

  // 3) Persiste no Supabase PRIMEIRO (lead nunca se perde)
  let leadId: string | null = null;
  const sb = getSupabaseAdmin();
  if (sb) {
    const { data, error } = await sb
      .from("leads")
      .insert({
        nome: lead.nome,
        whatsapp: lead.whatsappE164,
        email: lead.email,
        email_corporativo: lead.emailIsCorporate,
        segmento: lead.segmento,
        cidade: lead.cidade,
        solucao: lead.solucao,
        mensagem: lead.mensagem ?? "",
        score: q.score,
        tier: q.tier,
        tags: q.tags,
        origem: "lp-site",
        suri_status: "pending",
      })
      .select("id")
      .single();
    if (error) console.error("[lead] erro Supabase:", error.message);
    else leadId = data?.id ?? null;
  } else {
    console.warn("[lead] Supabase não configurado — lead não persistido:", lead.email);
  }

  // 4) Envia à SURI
  const suri = await importContactToSuri(lead, q);
  if (sb && leadId) {
    await sb
      .from("leads")
      .update({
        suri_status: suri.ok ? "sent" : suri.skipped ? "pending" : "error",
        suri_contact_id: suri.contactId ?? null,
        suri_error: suri.ok ? null : suri.error ?? null,
      })
      .eq("id", leadId);
  }

  // 5) Telemetria de servidor
  if (!suriConfigured()) console.warn("[lead] SURI ainda não configurada.");
  if (!supabaseConfigured() && !suriConfigured())
    console.error("[lead] ATENÇÃO: nenhum destino configurado. Lead apenas em log.");

  // Para o visitante o envio sempre "deu certo" (a não ser erro de validação).
  return NextResponse.json({ ok: true, tier: q.tier });
}
