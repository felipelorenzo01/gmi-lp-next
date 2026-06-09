import Image from "next/image";
import LeadForm from "@/components/LeadForm";

/* ── Lockup (GMI + 3M) ── */
function Lockup({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image src="/img/logo-lockup.png" alt="GMI Distribuindo Soluções — Distribuidor Autorizado 3M"
      width={984} height={150} className={className} priority />
  );
}

/* ── Botões ── */
function BtnRed({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href}
      className="inline-flex items-center justify-center rounded-full bg-gmi-red
        px-10 py-4 min-w-[220px] font-sans text-base font-semibold text-white
        transition hover:bg-gmi-red-dark focus:outline-none focus:ring-4 focus:ring-gmi-red/30">
      {children}
    </a>
  );
}
function BtnNavy({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href}
      className="inline-flex items-center justify-center rounded-full bg-gmi-navy
        px-10 py-4 min-w-[220px] font-sans text-base font-semibold text-white
        transition hover:bg-gmi-navy/80 focus:outline-none focus:ring-4 focus:ring-gmi-navy/30">
      {children}
    </a>
  );
}

/* ── Red banner com corte diagonal direita ── */
function RedBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-gmi-red py-7 text-white">
      <div className="absolute right-0 top-0 h-full w-28 bg-[#f0efed]"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
      <div className="container-gmi relative z-10">
        <h2 className="headline text-2xl sm:text-3xl md:text-4xl leading-tight">{children}</h2>
      </div>
    </div>
  );
}

/* ════════ Escudo SVG ════════ */
function Shield({ children, strokeColor = "#d51f26" }: { children: React.ReactNode; strokeColor?: string }) {
  return (
    <div className="relative flex h-[60px] w-[52px] shrink-0 items-center justify-center">
      <svg viewBox="0 0 52 60" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M26 2 L4 11 v18 c0 16 10 28 22 29 12-1 22-13 22-29 V11 Z"
          fill="white" fillOpacity="0.08" stroke={strokeColor} strokeWidth="2.2" strokeLinejoin="round" />
      </svg>
      <span className="relative z-10">{children}</span>
    </div>
  );
}

/* ════════ Ícones internos ════════ */

/* Rolo de fita (concêntrico) — Fitas Adesivas */
function IcoTape() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="11" stroke="#d51f26" strokeWidth="2.2" />
      <circle cx="14" cy="14" r="6"  stroke="#d51f26" strokeWidth="1.8" />
      <circle cx="14" cy="14" r="2.5" fill="#d51f26" />
    </svg>
  );
}

/* Engrenagem — Máquinas */
function IcoGear() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none" aria-hidden>
      <circle cx="14" cy="14" r="4.5" stroke="#d51f26" strokeWidth="2" />
      {/* Dentes */}
      <path d="M14 2v4M14 22v4M2 14h4M22 14h4
               M5.5 5.5l2.8 2.8M19.7 19.7l2.8 2.8
               M5.5 22.5l2.8-2.8M19.7 8.3l2.8-2.8"
        stroke="#d51f26" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* Carro — Produtos Automotivos (branco, fundo azul) */
function IcoCar() {
  return (
    <svg viewBox="0 0 30 22" className="h-6 w-7" fill="none" aria-hidden>
      <path d="M3 14 L6 8 L24 8 L27 14" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <rect x="1" y="13" width="28" height="6" rx="2" stroke="white" strokeWidth="2" />
      <path d="M9 8 L11 4 L19 4 L21 8" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="8"  cy="19" r="3" stroke="white" strokeWidth="1.8" />
      <circle cx="22" cy="19" r="3" stroke="white" strokeWidth="1.8" />
    </svg>
  );
}

/* ════════ Ícones 40 anos — exatamente como no PDF ════════ */

/* 1. Círculo "Clube do CNPJ" — azul com check branco e texto circular */
function IconCNPJ() {
  const r = 42; // raio do texto circular
  return (
    <svg viewBox="0 0 110 110" className="h-20 w-20" aria-hidden>
      {/* Círculo de fundo azul */}
      <circle cx="55" cy="55" r="52" fill="#1a3a8f" />
      <circle cx="55" cy="55" r="52" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 3" />
      {/* Check */}
      <path d="M35 55 L48 68 L75 42" stroke="white" strokeWidth="5"
        strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Texto circular superior */}
      <path id="arc-top" d={`M ${55-r} 55 A ${r} ${r} 0 0 1 ${55+r} 55`} fill="none" />
      <text fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        <textPath href="#arc-top" startOffset="10%">CLUBE DO CNPJ</textPath>
      </text>
      {/* Texto circular inferior */}
      <path id="arc-bot" d={`M ${55-r} 55 A ${r} ${r} 0 0 0 ${55+r} 55`} fill="none" />
      <text fontSize="9" fill="white" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
        <textPath href="#arc-bot" startOffset="10%">CLUBE DO CNPJ</textPath>
      </text>
    </svg>
  );
}

/* 2. "40 anos experiência" + estrela (tipográfico) */
function Icon40Anos() {
  return (
    <div className="flex flex-col items-center leading-none text-white">
      <span className="font-display text-[56px] font-black leading-none">40</span>
      <span className="font-sans text-lg font-semibold">anos</span>
      <span className="font-sans text-base">experiência</span>
      <svg viewBox="0 0 24 24" className="mt-2 h-6 w-6" fill="white" aria-hidden>
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    </div>
  );
}

/* 3. Placa "AQUI TEM NEGÓCIO!" */
function IconNegocio() {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center justify-center rounded-md bg-gmi-red px-4 py-3 shadow-lg ring-2 ring-white/30">
        <div className="text-center font-display text-sm font-black uppercase leading-tight tracking-wide text-white">
          AQUI TEM<br />NEGÓCIO!
        </div>
      </div>
      {/* Parafuso decorativo */}
      <div className="h-2 w-2 rounded-full bg-gmi-red ring-2 ring-white/40" />
    </div>
  );
}

/* 4. Mapa do Brasil (outline + ponto em MG) */
function IconBrasil() {
  return (
    <svg viewBox="0 0 62 68" className="h-20 w-20" fill="none" aria-hidden>
      {/* Silhueta simplificada do Brasil */}
      <path
        d="M 10 13
           C 14 4 22 2 30 2
           C 38 2 45 4 50 9
           C 55 14 57 22 55 30
           C 53 36 52 40 54 46
           C 56 52 52 58 46 63
           C 40 68 33 67 28 65
           C 22 63 16 58 12 52
           C 8  46 6  38 7  30
           C 7  22 6  18 10 13 Z"
        fill="white" fillOpacity="0.18" stroke="white" strokeWidth="1.5" />
      {/* Ponto em MG */}
      <circle cx="43" cy="47" r="4" fill="#d51f26" stroke="white" strokeWidth="1.5" />
      {/* Linhas internas sugestivas de estados */}
      <path d="M 30 2 L 28 20 M 50 9 L 38 25 M 12 52 L 28 40 L 43 47"
        stroke="white" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.4" />
    </svg>
  );
}

/* ════════ Dados ════════ */
const TAPES = ["Fitas personalizadas","Fitas dupla face","Fitas BOPP","Fita crepe","Fita de demarcação","Fitas de alumínio"];
const AUTO  = ["Abrasivos","Tintas automotivas","Vernizes","Massas de polir","Preparação de superfície","Acabamento e complementos para pintura"];
const CLIENTS = [
  { src: "/img/cli-azul.png",       alt: "Azul",        w: 510, h: 137 },
  { src: "/img/cli-carbel.png",     alt: "Carbel",      w: 499, h: 147 },
  { src: "/img/cli-gol.png",        alt: "GOL",         w: 334, h: 138 },
  { src: "/img/cli-grupolider.png", alt: "Grupo Líder", w: 541, h: 169 },
  { src: "/img/cli-saritur.png",    alt: "Saritur",     w: 395, h: 186 },
];
const ATTRS40 = [
  { icon: <IconCNPJ />,    d: "Atendimento personalizado. Condições especiais para CNPJ." },
  { icon: <Icon40Anos />,  d: "40 anos de mercado. Distribuidor líder de 3M em MG." },
  { icon: <IconNegocio />, d: "Aqui sempre tem negócio!" },
  { icon: <IconBrasil />,  d: "Entregamos em todo o Brasil." },
];

/* ════════════════════════════════════════════════════════════ */
export default function Page() {
  return (
    <main>

      {/* ── HEADER — só o lockup (já tem GMI + 3M juntos) ── */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container-gmi">
          <Lockup className="h-11 w-auto sm:h-14" />
        </div>
      </header>

      {/* ── HERO ── */}
      {/* Seção full-width; grid de 2 colunas; imagem com corte diagonal */}
      <section className="overflow-hidden bg-[#f0efed]">
        <div className="relative grid min-h-[480px] items-stretch md:grid-cols-2">

          {/* Coluna esquerda — texto */}
          <div className="container-gmi flex flex-col justify-center py-14 pr-8 md:pl-10 md:pr-6">
            <h1 className="font-sans text-4xl font-black leading-tight text-gmi-navy sm:text-5xl md:text-6xl">
              A gente tem<br />solução para tudo!
            </h1>
            <p className="mt-5 max-w-md font-sans text-base text-gmi-navy/60 sm:text-lg">
              Fitas adesivas, produtos automotivos e maquinário para embalagens.
              Soluções para ampliar a qualidade e eficiência do seu negócio.
            </p>
            <div className="mt-7"><BtnRed>Solicite um orçamento</BtnRed></div>
          </div>

          {/* Coluna direita — imagem com diagonal na borda esquerda */}
          <div className="relative min-h-[360px] md:min-h-0"
            style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)" }}>
            <Image src="/img/hero-bg.png" alt="" fill priority sizes="50vw"
              className="object-cover object-center" />
            <div className="absolute inset-0">
              <Image src="/img/hero-worker.png" alt="Profissional GMI"
                fill priority sizes="50vw"
                className="object-contain object-bottom" />
            </div>
          </div>
        </div>
      </section>

      {/* ── RED BANNER ── */}
      <RedBanner>Aqui você encontra as melhores marcas do mercado.</RedBanner>

      {/* ── MARCAS ── */}
      <section className="bg-white py-10">
        <div className="container-gmi overflow-x-auto">
          <Image src="/img/marcas.png"
            alt="Marcas: 3M, Sherwin-Williams, GMax, Vonixx, Maxi Rubber, Farben"
            width={1860} height={156}
            className="mx-auto h-auto w-full max-w-4xl min-w-[520px]" />
        </div>
      </section>

      {/* ── FITAS ADESIVAS ── */}
      <section className="bg-[#e8e6e1] py-14">
        <div className="container-gmi grid items-center gap-6 md:grid-cols-2">

          {/* Texto + lista */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <Shield><IcoTape /></Shield>
              <h2 className="font-sans text-3xl font-black leading-tight text-gmi-red sm:text-4xl">
                Fitas<br />Adesivas
              </h2>
            </div>
            <ul className="space-y-2 font-sans text-base font-semibold text-gmi-navy">
              {TAPES.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>

          {/* Imagem — sem caixa, flutua sobre o fundo */}
          <div className="relative w-full" style={{ minHeight: "320px" }}>
            <Image src="/img/fitas.png" alt="Linha de fitas adesivas GMI"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain scale-[1.15] origin-center" />
          </div>
        </div>

        {/* CTA alinhado à direita da coluna da imagem */}
        <div className="container-gmi mt-6 grid md:grid-cols-2">
          <div />
          <div className="flex justify-center md:justify-start">
            <BtnRed>Solicitar orçamento</BtnRed>
          </div>
        </div>
      </section>

      {/* ── PERSONALIZE ── */}
      <section className="relative isolate min-h-[180px] flex items-center overflow-hidden bg-gmi-red text-white py-10">
        <Image src="/img/personalize.png" alt="" fill sizes="100vw"
          className="-z-10 object-cover object-right opacity-70" />
        <div className="container-gmi flex flex-col items-center gap-6 text-center
          sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <h3 className="font-sans text-2xl font-black leading-snug sm:text-3xl max-w-sm">
            Personalize sua fita de empacotamento conosco.
          </h3>
          <div className="flex justify-center">
            <BtnNavy>Solicitar orçamento</BtnNavy>
          </div>
        </div>
      </section>

      {/* ── AUTOMOTIVO ── */}
      <section className="py-14 text-white" style={{ backgroundColor: "#013DFF" }}>
        <div className="container-gmi grid items-center gap-6 md:grid-cols-2">

          {/* Imagem — esquerda, grande, sem fundo extra */}
          <div className="relative order-2 w-full md:order-1" style={{ minHeight: "380px" }}>
            <Image src="/img/automotivo.png"
              alt="Produtos automotivos GMI"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain scale-[1.2] origin-center" />
          </div>

          {/* Texto — direita */}
          <div className="order-1 md:order-2 flex flex-col items-end text-right">
            <div className="mb-5 flex items-center gap-4">
              <h2 className="font-sans text-3xl font-black leading-tight sm:text-4xl">
                Produtos<br />Automotivos
              </h2>
              {/* Escudo branco transparente com carro */}
              <div className="relative flex h-[60px] w-[52px] shrink-0 items-center justify-center">
                <svg viewBox="0 0 52 60" className="absolute inset-0 h-full w-full" fill="none">
                  <path d="M26 2 L4 11 v18 c0 16 10 28 22 29 12-1 22-13 22-29 V11 Z"
                    fill="white" fillOpacity="0.12" stroke="white" strokeWidth="2.2" strokeLinejoin="round" />
                </svg>
                <span className="relative z-10"><IcoCar /></span>
              </div>
            </div>
            <ul className="space-y-1.5 font-sans text-base font-semibold">
              {AUTO.map((i) => <li key={i}>{i}</li>)}
            </ul>
            {/* CTA embaixo, alinhado à esquerda */}
            <div className="mt-6 w-full flex justify-start">
              <BtnRed>Solicitar orçamento</BtnRed>
            </div>
          </div>
        </div>
      </section>

      {/* ── MÁQUINAS ── */}
      <section className="bg-[#f0efed] py-14">
        <div className="container-gmi grid items-center gap-8 md:grid-cols-2">

          {/* Texto */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <Shield><IcoGear /></Shield>
              <h2 className="font-sans text-3xl font-black leading-tight text-gmi-red sm:text-4xl">
                Máquinas
              </h2>
            </div>
            <p className="max-w-sm font-sans text-base font-medium text-gmi-navy sm:text-lg">
              Soluções no modelo de comodato para empresas com
              alta operação e necessidade de padronização.
            </p>
            <div className="mt-6"><BtnRed>Fale com um especialista</BtnRed></div>
          </div>

          {/* Imagem — sem fundo, tamanho generoso */}
          <div className="relative w-full" style={{ minHeight: "380px" }}>
            <Image src="/img/maquina.png" alt="Máquina seladora 3M"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain scale-[1.1] origin-center" />
          </div>
        </div>
      </section>

      {/* ── RED BANNER grandes players ── */}
      <RedBanner>Grandes players do mercado escolhem a GMI. Escolha você também.</RedBanner>

      {/* ── 40 ANOS ── */}
      <section className="relative isolate overflow-hidden bg-gmi-navy py-16 text-white">
        <Image src="/img/warehouse-40.png" alt="" fill aria-hidden
          className="-z-10 object-cover opacity-25" sizes="100vw" />
        <div className="container-gmi">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {ATTRS40.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                {s.icon}
                <p className="font-sans text-sm text-white/80 max-w-[180px] mx-auto leading-relaxed">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <section className="bg-white py-12">
        <div className="container-gmi flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {CLIENTS.map((c) => (
            <Image key={c.src} src={c.src} alt={c.alt}
              width={c.w} height={c.h}
              className="h-8 w-auto sm:h-10" />
          ))}
        </div>
      </section>

      {/* ── FORMULÁRIO ── */}
      <section id="contato" className="relative isolate overflow-hidden bg-gmi-red text-white">
        <div className="grid lg:grid-cols-[45%_55%]">

          {/* Foto com corte diagonal direita — esquerda */}
          <div className="relative hidden min-h-[500px] lg:block">
            <div className="absolute inset-0"
              style={{ clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)" }}>
              <Image src="/img/aerial-worker.png" alt="Operação logística GMI"
                fill sizes="45vw" className="object-cover object-center" />
            </div>
          </div>

          {/* Formulário */}
          <div className="px-8 py-14 sm:px-12">
            <h2 className="headline text-2xl font-black leading-tight sm:text-3xl mb-8">
              Cadastre-se para entrar em contato com nosso time comercial e receber um orçamento.
            </h2>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gmi-paper py-8">
        <div className="container-gmi flex flex-col items-center justify-between gap-6
          sm:flex-row sm:items-center">

          {/* Lockup (ambas logos) */}
          <Lockup className="h-10 w-auto sm:h-12" />

          {/* CNPJ */}
          <div className="text-center text-sm text-gmi-navy/70">
            <p className="font-semibold text-gmi-navy">CNPJ 04.098.359/0001-02</p>
            <p>Rua Conselheiro Pena, 50 — Santa Branca</p>
            <p>Belo Horizonte / MG</p>
          </div>

          {/* WhatsApp + Instagram */}
          <div className="flex items-center gap-3">
            <a href="#contato" aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full
                bg-gmi-navy text-white hover:bg-gmi-navy/80 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full
                bg-gmi-navy text-white hover:bg-gmi-navy/80 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
