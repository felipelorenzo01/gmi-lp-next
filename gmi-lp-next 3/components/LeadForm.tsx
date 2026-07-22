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

const initial = {
  nome: "", whatsapp: "", email: "", segmento: "", cidade: "",
  solucao: "" as SolutionKey | "", mensagem: "", website: "", // website = honeypot
};

export default function LeadForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

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
          Nosso time comercial vai falar com você pelo WhatsApp em breve.
        </p>
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
