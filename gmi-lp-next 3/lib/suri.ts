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

const SURI_API_URL = process.env.SURI_API_URL?.replace(/\/$/, "") ?? "";
const SURI_API_TOKEN = process.env.SURI_API_TOKEN ?? "";

export function suriConfigured(): boolean {
  return Boolean(SURI_API_URL && SURI_API_TOKEN);
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
 * Monta o corpo do "Importar contato".
 * Os nomes de campo abaixo são a aposta mais provável conforme a doc
 * (telefone do WhatsApp, nome, e-mail, observações, tags). CONFIRMAR no
 * Postman da SURI e ajustar aqui se necessário — é o único ponto a mudar.
 */
function buildImportContactBody(lead: NormalizedLead, q: Qualification) {
  return {
    phone: lead.whatsappE164, // WhatsApp em E.164 (ex.: 5531999998888)
    name: lead.nome,
    email: lead.email,
    observations: buildObservacoes(lead, q),
    tags: q.tags,
  };
}

export interface SuriResult {
  ok: boolean;
  skipped?: boolean; // true quando ainda não há credenciais
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
    const res = await fetch(`${SURI_API_URL}/contacts/import`, {
      // ⚠️ caminho "/contacts/import" é placeholder — confirmar no Postman.
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
