// ============================================================================
//  RÉGUA DE QUALIFICAÇÃO DE LEADS  —  GMI
//  Mexa SÓ no objeto CONFIG abaixo para ajustar pesos, listas e cortes.
//  Nada mais no projeto precisa mudar quando você recalibrar.
// ============================================================================

import type { NormalizedLead, Qualification, Tier } from "./types";

export const CONFIG = {
  // Pontos por sinal -------------------------------------------------------
  pesos: {
    emailCorporativo: 25, // dominio proprio (nao gmail/hotmail/etc.)
    emailGenerico: 5,

    // por solucao pedida
    solucao: {
      maquinas: 30, // comodato / alta operacao = ticket alto + recorrencia
      automotivo: 20,
      fitas: 20, // fitas personalizadas / volume B2B
      outro: 10,
    } as Record<string, number>,

    whatsappValido: 15,

    segmentoAltoFit: 15, // ver lista 'segmentosAltoFit'
    segmentoOutro: 8,

    cidadeRegiaoForte: 10, // ver lista 'ufsRegiaoForte' / 'cidadesRegiaoForte'
    cidadeFora: 5, // entregam Brasil todo, entao nao zera

    nomeCompleto: 5, // 2+ palavras
  },

  // Dominios de e-mail considerados "genericos" (pessoais) -----------------
  dominiosGenericos: [
    "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "yahoo.com.br",
    "live.com", "icloud.com", "bol.com.br", "uol.com.br", "terra.com.br",
    "globo.com", "msn.com", "me.com", "proton.me",
  ],

  // Segmentos de alto fit (compare em minusculas, sem acento) --------------
  segmentosAltoFit: [
    "industria", "embalagem", "embalagens", "logistica", "automotivo",
    "oficina", "funilaria", "transportadora", "distribuidora", "atacado",
    "alimenticio", "alimenticia", "metalurgica", "grafica",
  ],

  // Regiao de atuacao forte (lider 3M em MG) -------------------------------
  ufsRegiaoForte: ["mg", "minas gerais"],
  cidadesRegiaoForte: ["belo horizonte", "contagem", "betim", "uberlandia", "juiz de fora"],

  // Cortes de tier ---------------------------------------------------------
  cortes: {
    quente: 70, // score >= 70
    morno: 40, // 40 <= score < 70 ; abaixo de 40 = frio
  },
} as const;

// ----------------------------------------------------------------------------

function semAcento(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

export function isWhatsappValido(e164: string): boolean {
  // E.164 BR: 55 + DDD (2) + numero (8 ou 9 digitos) => 12 ou 13 digitos
  return /^55\d{10,11}$/.test(e164);
}

export function isEmailCorporativo(email: string): boolean {
  const dominio = email.split("@")[1]?.toLowerCase().trim() ?? "";
  if (!dominio) return false;
  return !(CONFIG.dominiosGenericos as readonly string[]).includes(dominio);
}

export function qualificar(lead: NormalizedLead): Qualification {
  const p = CONFIG.pesos;
  const breakdown: { label: string; points: number }[] = [];
  const add = (label: string, points: number) => {
    if (points > 0) breakdown.push({ label, points });
  };

  // E-mail
  if (lead.emailIsCorporate) add("E-mail corporativo", p.emailCorporativo);
  else add("E-mail genérico", p.emailGenerico);

  // Solucao
  const solucaoPts = p.solucao[lead.solucao] ?? p.solucao.outro;
  add(`Solução: ${lead.solucao}`, solucaoPts);

  // WhatsApp
  if (isWhatsappValido(lead.whatsappE164)) add("WhatsApp válido", p.whatsappValido);

  // Segmento
  const seg = semAcento(lead.segmento);
  const segAltoFit = CONFIG.segmentosAltoFit.some((s) => seg.includes(s));
  if (lead.segmento.trim()) {
    add(segAltoFit ? "Segmento de alto fit" : "Segmento informado",
        segAltoFit ? p.segmentoAltoFit : p.segmentoOutro);
  }

  // Cidade / regiao
  const cidade = semAcento(lead.cidade);
  const regiaoForte =
    CONFIG.cidadesRegiaoForte.some((c) => cidade.includes(c)) ||
    CONFIG.ufsRegiaoForte.some((uf) => cidade.includes(uf));
  if (lead.cidade.trim()) {
    add(regiaoForte ? "Cidade em região forte (MG)" : "Cidade fora da região",
        regiaoForte ? p.cidadeRegiaoForte : p.cidadeFora);
  }

  // Nome completo
  if (lead.nome.trim().split(/\s+/).length >= 2) add("Nome completo", p.nomeCompleto);

  const score = Math.min(100, breakdown.reduce((acc, b) => acc + b.points, 0));

  let tier: Tier = "frio";
  if (score >= CONFIG.cortes.quente) tier = "quente";
  else if (score >= CONFIG.cortes.morno) tier = "morno";

  const tags = [
    "Origem:LP-Site",
    `Tier:${tier}`,
    `Solucao:${lead.solucao}`,
    `Score:${score}`,
  ];

  return { score, tier, breakdown, tags };
}

export function tierLabel(tier: Tier): string {
  return { quente: "🔥 Quente", morno: "🟡 Morno", frio: "🔵 Frio" }[tier];
}
