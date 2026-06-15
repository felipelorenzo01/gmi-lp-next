// ============================================================================
//  CLIENTE SURI  —  método "Importar contato"
//  Doc: https://sejasuri.gitbook.io/manual-de-integracao/api
//  Auth: header  Authorization: Bearer <SURI_API_TOKEN>
//  Base: endpoint do chatbot (Portal > Configurações) + "/api"
//
//  ⚠️ MAPEAMENTO DE CAMPOS: os nomes exatos do corpo do "Importar contato"
//  ficam na coleção do Postman da SURI (exige login na conta da GMI).
//  Por isso TODO o payload está isolado na função buildImportContactBody()
//  abaixo — quando confirmar os nomes, ajuste só ali.
// ============================================================================

import type { NormalizedLead, Qualification } from "./types";
import { tierLabel } from "./qualification";

// SURI_API_URL    → https://cbm-wap-babysuri-cb98544348-gmidi.azurewebsites.net
// SURI_API_TOKEN  → token do portal (Configurações > Geral)
// SURI_CHANNEL_ID → ID do canal WhatsApp (Configurações > Canais > Canal WhatsApp)
const SURI_API_URL    = process.env.SURI_API_URL?.replace(/\/$/, "") ?? "";
const SURI_API_TOKEN  = process.env.SURI_API_TOKEN ?? "";
const SURI_CHANNEL_ID = process.env.SURI_CHANNEL_ID ?? "";

export function suriConfigured(): boolean {
  return Boolean(SURI_API_URL && SURI_API_TOKEN && SURI_CHANNEL_ID);
}

/** Bloco de observações enviado à SURI com tudo que o vendedor precisa ver. */
export function buildObservacoes(lead: NormalizedLead, q: Qualification): string {
  const linhas = [
    `📥 LEAD via Landing Page GMI`,
    `Qualificação: ${tierLabel(q.tier)}  (score ${q.score}/100)`,
    ``,
    `Nome: ${lead.nome}`,
    `WhatsApp: ${lead.whatsapp}`,
    `E-mail: ${lead.email} ${lead.emailIsCorporate ? "(corporativo)" : "(genérico)"}`,
    `Segmento: ${lead.segmento || "—"}`,
    `Cidade: ${lead.cidade || "—"}`,
    `Solução desejada: ${lead.solucao}`,
    lead.mensagem ? `Mensagem: ${lead.mensagem}` : "",
    ``,
    `Pontuação:`,
    ...q.breakdown.map((b) => `  • ${b.label}: +${b.points}`),
  ];
  return linhas.filter((l) => l !== undefined).join("\n");
}

/**
 * Monta o corpo do "Importar contato" — POST CHATBOT-URL/api/contacts
 *
 * Campos confirmados na doc SURI (Postman):
 *   name        → Nome do contato
 *   phone       → WhatsApp com 55 + DDD + dígito 9 (sem "+")
 *   email       → E-mail do contato
 *   gender      → 2 = indefinido
 *   channelId   → ID do canal WhatsApp (Configurações > Canais)
 *   channelType → 1 (WhatsApp, único suportado)
 *   note        → Observações livres (opcional)
 *   variables   → Objeto chave-valor string:string (opcional)
 */
function buildImportContactBody(lead: NormalizedLead, q: Qualification) {
  return {
    name:        lead.nome,
    phone:       lead.whatsappE164,   // formato: 55DDD9XXXXXXXX
    email:       lead.email,
    gender:      2,                    // indefinido
    channelId:   SURI_CHANNEL_ID,
    channelType: 1,
    note:        buildObservacoes(lead, q),
    variables: {
      origem:    "LP-Site",
      tier:      q.tier,              // quente | morno | frio
      score:     String(q.score),     // 0–100
      solucao:   lead.solucao,
      segmento:  lead.segmento || "",
      cidade:    lead.cidade    || "",
    },
  };
}

export interface SuriResult {
  ok: boolean;
  skipped?: boolean;
  status?: number;
  error?: string;
  contactId?: string;
}

export async function importContactToSuri(
  lead: NormalizedLead,
  q: Qualification
): Promise<SuriResult> {
  if (!suriConfigured()) {
    return { ok: false, skipped: true, error: "SURI não configurada (sem URL/token)" };
  }
  try {
    // Doc SURI: URL base = endpoint do portal + "/api/contacts"
    const res = await fetch(`${SURI_API_URL}/api/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SURI_API_TOKEN}`,
      },
      body: JSON.stringify(buildImportContactBody(lead, q)),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return { ok: false, status: res.status, error: text.slice(0, 500) };
    }
    const data = await res.json().catch(() => ({}));
    return { ok: true, status: res.status, contactId: data?.id ?? data?.contactId };
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : "erro desconhecido" };
  }
}
