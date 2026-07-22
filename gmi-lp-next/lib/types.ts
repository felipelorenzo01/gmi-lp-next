// Tipos compartilhados do fluxo de leads da LP da GMI.

export type SolutionKey = "maquinas" | "automotivo" | "fitas" | "outro";

export interface LeadInput {
  nome: string;
  whatsapp: string;
  email: string;
  segmento: string;
  cidade: string;
  solucao: SolutionKey;
  mensagem?: string;
}

export type Tier = "quente" | "morno" | "frio";

export interface Qualification {
  score: number; // 0-100
  tier: Tier;
  breakdown: { label: string; points: number }[];
  tags: string[];
}

export interface NormalizedLead extends LeadInput {
  // WhatsApp em E.164 (ex.: 5531999998888) e versao "humana"
  whatsappE164: string;
  emailIsCorporate: boolean;
}
