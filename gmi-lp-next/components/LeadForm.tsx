"use client";

import { useState } from "react";
import type { SolutionKey } from "@/lib/types";

const SEGMENTOS = [
  "Indústria", "Embalagens", "Logística / Transportadora", "Automotivo / Oficina",
  "Distribuidora / Atacado", "Gráfica", "Alimentício", "Outro",
];

const SOLUCOES: { value: SolutionKey; label: string }[] = [
  { value: "fitas", label: "Fitas adesivas" },
  { value: "automotivo", label: "Produtos automotivos" },
  { value: "maquinas", label: "Máquinas / comodato" },
  { value: "outro", label: "Outro / não sei ainda" },
];

// WhatsApp do time comercial da GMI (canal GMI_BH na SURI).
// Formato internacional, só dígitos, sem "+".
const WHATSAPP_NUMERO = "553134900777";

// Texto amigável de cada solução para a mensagem do WhatsApp.
const SOLUCAO_TEXTO: Record<string, string> = {
  fitas: "fitas adesivas",
  automotivo: "produtos automotivos",
  maquinas: "máquinas / comodato",
  outro: "soluções da GMI",
};

// Monta o link do WhatsApp com uma mensagem já preenchida pelo lead.
// É o lead quem envia a 1ª mensagem — assim a conversa abre no painel da SURI.
function montarLinkWhatsApp(nome: string, solucao: string): string {
  const solucaoTxt = SOLUCAO_TEXTO[solucao] ?? "soluções da GMI";
  const primeiroNome = nome.trim().split(" ")[0] || "";
  const msg =
    `Olá! Meu nome é ${primeiroNome}. ` +
    `Acabei de me cadastrar no site e gostaria de um orçamento de ${solucaoTxt}.`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(msg)}`;
}

const initial = {
  nome: "", whatsapp: "", email: "", segmento: "", cidade: "",
  solucao: "" as SolutionKey | "", mensagem: "", website: "", // website = honeypot
};

export default function LeadForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  const set = (k: keyof typeof initial) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.solucao) { setStatus("error"); setErrorMsg("Selecione a solução desejada."); return; }
    setStatus("sending"); setErrorMsg("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Não foi possível enviar.");
      setStatus("ok");

      // Monta o link do WhatsApp com a solução escolhida e abre automaticamente.
      const link = montarLinkWhatsApp(form.nome, form.solucao);
      setWhatsappLink(link);
      // Abre numa nova aba. Se o navegador bloquear (raro), o botão de fallback
      // na tela de sucesso garante que o lead consiga abrir manualmente.
      if (typeof window !== "undefined") {
        window.open(link, "_blank");
      }

      // Evento de conversão para o Google Tag Manager.
      // No GTM, crie um acionador do tipo "Evento personalizado" com o nome: lead_enviado
      if (typeof window !== "undefined") {
        // @ts-expect-error dataLayer é injetado pelo GTM
        window.dataLayer = window.dataLayer || [];
        // @ts-expect-error dataLayer é injetado pelo GTM
        window.dataLayer.push({
          event: "lead_enviado",
          lead_solucao: form.solucao,
          lead_segmento: form.segmento,
          lead_cidade: form.cidade,
        });
      }
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Erro ao enviar.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl bg-white/10 p-8 text-center text-white reveal">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-3xl">
          ✓
        </div>
        <h3 className="headline text-2xl">Recebemos seu contato!</h3>
        <p className="mt-2 text-white/80">
          Estamos te redirecionando para o WhatsApp do nosso time comercial.
          Se a janela não abrir automaticamente, toque no botão abaixo.
        </p>
        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-sans text-base font-bold text-gmi-red transition hover:bg-white/90"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z" />
            </svg>
            Falar no WhatsApp
          </a>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* honeypot invisível */}
      <input
        type="text" tabIndex={-1} autoComplete="off" value={form.website}
        onChange={set("website")} className="hidden" aria-hidden="true"
      />

      <div className="sm:col-span-2">
        <label className="field-label" htmlFor="nome">Nome</label>
        <input id="nome" required value={form.nome} onChange={set("nome")}
          className="field-input" placeholder="Seu nome completo" />
      </div>

      <div>
        <label className="field-label" htmlFor="whatsapp">WhatsApp</label>
        <input id="whatsapp" required inputMode="tel" value={form.whatsapp}
          onChange={set("whatsapp")} className="field-input" placeholder="(31) 99999-9999" />
      </div>

      <div>
        <label className="field-label" htmlFor="email">E-mail corporativo</label>
        <input id="email" required type="email" value={form.email}
          onChange={set("email")} className="field-input" placeholder="voce@suaempresa.com.br" />
      </div>

      <div>
        <label className="field-label" htmlFor="segmento">Segmento</label>
        <select id="segmento" value={form.segmento} onChange={set("segmento")} className="field-input">
          <option value="">Selecione…</option>
          {SEGMENTOS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="field-label" htmlFor="cidade">Cidade</label>
        <input id="cidade" value={form.cidade} onChange={set("cidade")}
          className="field-input" placeholder="Cidade / UF" />
      </div>

      <div className="sm:col-span-2">
        <label className="field-label" htmlFor="solucao">Qual solução sua empresa precisa?</label>
        <select id="solucao" required value={form.solucao} onChange={set("solucao")} className="field-input">
          <option value="">Selecione…</option>
          {SOLUCOES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      {status === "error" && (
        <p className="sm:col-span-2 rounded-lg bg-white/15 px-4 py-2 text-sm text-white">{errorMsg}</p>
      )}

      <div className="sm:col-span-2 mt-2">
        <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
          {status === "sending" ? "Enviando…" : "Solicitar orçamento"}
        </button>
      </div>
    </form>
  );
}
