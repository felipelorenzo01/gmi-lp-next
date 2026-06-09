import { z } from "zod";
import type { LeadInput, NormalizedLead } from "./types";
import { isEmailCorporativo } from "./qualification";

export const leadSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(120),
  whatsapp: z.string().trim().min(8, "WhatsApp inválido").max(30),
  email: z.string().trim().email("E-mail inválido").max(160),
  segmento: z.string().trim().max(120).default(""),
  cidade: z.string().trim().max(120).default(""),
  solucao: z.enum(["maquinas", "automotivo", "fitas", "outro"]),
  mensagem: z.string().trim().max(1000).optional().default(""),
  // honeypot anti-spam: precisa vir vazio
  website: z.string().max(0).optional(),
});

export type LeadPayload = z.infer<typeof leadSchema>;

/** Converte um telefone digitado pelo usuário para E.164 BR (55 + DDD + número). */
export function toE164BR(raw: string): string {
  let d = raw.replace(/\D/g, "");
  // remove zeros de tronco / DDI duplicado
  if (d.startsWith("00")) d = d.replace(/^00/, "");
  if (d.length >= 12 && d.startsWith("55")) {
    // ja tem DDI
  } else if (d.length === 10 || d.length === 11) {
    d = "55" + d; // DDD + numero, sem DDI
  } else if (d.length === 12 || d.length === 13) {
    if (!d.startsWith("55")) d = "55" + d.slice(-11);
  }
  return d;
}

export function normalizeLead(input: LeadInput): NormalizedLead {
  return {
    ...input,
    nome: input.nome.trim(),
    cidade: input.cidade.trim(),
    segmento: input.segmento.trim(),
    whatsappE164: toE164BR(input.whatsapp),
    emailIsCorporate: isEmailCorporativo(input.email),
  };
}
