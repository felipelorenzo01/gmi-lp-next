import Image from "next/image";
import LeadForm from "@/components/LeadForm";

/* ─── Logos ─── */
function LogoGMI({ className = "h-14 w-auto" }: { className?: string }) {
  return <Image src="/img/logo-gmi.png" alt="GMI Distribuindo Soluções" width={564} height={132} className={className} priority />;
}
function LogoLockup({ className = "h-10 w-auto" }: { className?: string }) {
  return <Image src="/img/logo-lockup.png" alt="GMI — Distribuidor Autorizado 3M" width={984} height={150} className={className} priority />;
}

/* ─── Botões ─── */
function BtnRed({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-full bg-gmi-red px-8 py-3.5
      font-sans text-base font-semibold text-white transition hover:bg-gmi-red-dark
      focus:outline-none focus:ring-4 focus:ring-gmi-red/30">
      {children}
    </a>
  );
}
function BtnNavy({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-full bg-gmi-navy px-8 py-3.5
      font-sans text-base font-semibold text-white transition hover:bg-gmi-navy/80
      focus:outline-none focus:ring-4 focus:ring-gmi-navy/30">
      {children}
    </a>
  );
}

/* ─── Escudo com ícone (padrão da designer) ─── */
function Shield({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-16 w-14 shrink-0 items-center justify-center">
      {/* Escudo SVG */}
      <svg viewBox="0 0 56 64" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M28 2L4 12v20c0 16 10.5 28 24 30 13.5-2 24-14 24-30V12L28 2z"
          fill="white" stroke="#d51f26" strokeWidth="2.5" />
      </svg>
      <span className="relative z-10">{children}</span>
    </div>
  );
}

/* ─── Ícones SVG internos dos escudos ─── */
function IcoTape() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none">
      <circle cx="14" cy="14" r="8" stroke="#d51f26" strokeWidth="2.2" />
      <circle cx="14" cy="14" r="3.5" fill="#d51f26" />
      <rect x="1" y="12.5" width="5" height="3" rx="1.5" fill="#d51f26" />
      <rect x="22" y="12.5" width="5" height="3" rx="1.5" fill="#d51f26" />
      <rect x="12.5" y="1" width="3" height="5" rx="1.5" fill="#d51f26" />
      <rect x="12.5" y="22" width="3" height="5" rx="1.5" fill="#d51f26" />
    </svg>
  );
}
function IcoGear() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7" fill="none">
      <circle cx="18" cy="10" r="4" stroke="#d51f26" strokeWidth="2" />
      <circle cx="10" cy="18" r="3" stroke="#d51f26" strokeWidth="2" />
      <path d="M14 14l-4 4" stroke="#d51f26" strokeWidth="2" strokeLinecap="round" />
      <circle cx="18" cy="10" r="1.5" fill="#d51f26" />
      <circle cx="10" cy="18" r="1" fill="#d51f26" />
    </svg>
  );
}
function IcoCar() {
  return (
    <svg viewBox="0 0 28 22" className="h-6 w-7" fill="none">
      <rect x="2" y="8" width="24" height="10" rx="3" stroke="#013DFF" strokeWidth="2" />
      <path d="M5 8l3-6h12l3 6" stroke="#013DFF" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="8" cy="19" r="3" fill="#013DFF" stroke="white" strokeWidth="1.5" />
      <circle cx="20" cy="19" r="3" fill="#013DFF" stroke="white" strokeWidth="1.5" />
      <rect x="9" y="3" width="10" height="5" rx="1.5" fill="#013DFF" fillOpacity=".3" />
    </svg>
  );
}

/* ─── Red banner com corte diagonal ─── */
function RedBannerDiag({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative bg-gmi-red py-7 text-white overflow-hidden">
      {/* Triângulo diagonal direita */}
      <div className="absolute right-0 top-0 h-full w-32 bg-gmi-paper"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
      <div className="container-gmi relative z-10">
        <h2 className="headline text-2xl sm:text-3xl md:text-4xl">{children}</h2>
      </div>
    </div>
  );
}

/* ─── Dados ─── */
const TAPES = ["Fitas personalizadas","Fitas dupla face","Fitas BOPP","Fita crepe","Fita de demarcação","Fitas de alumínio"];
const AUTO  = ["Abrasivos","Tintas automotivas","Vernizes","Massas de polir","Preparação de superfície","Acabamento e complementos para pintura"];
const CLIENTS = [
  { src: "/img/cli-azul.png",       alt: "Azul",        w: 510, h: 137 },
  { src: "/img/cli-carbel.png",     alt: "Carbel",      w: 499, h: 147 },
  { src: "/img/cli-gol.png",        alt: "GOL",         w: 334, h: 138 },
  { src: "/img/cli-grupolider.png", alt: "Grupo Líder", w: 541, h: 169 },
  { src: "/img/cli-saritur.png",    alt: "Saritur",     w: 395, h: 186 },
];

/* ─── Ícones 40 anos — exatamente como no PDF ─── */
// 1. Círculo azul "Clube do CNPJ" com check
function IconCNPJ() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1a3a8f] text-white ring-4 ring-white/20">
      <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
        <path d="M8 20l8 8 16-16" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}
// 2. "40 anos experiência" com estrela
function Icon40() {
  return (
    <div className="flex flex-col items-center gap-1 text-white">
      <span className="font-display text-5xl font-black leading-none">40</span>
      <span className="font-sans text-base font-semibold leading-tight text-center">anos<br/>experiência</span>
      <svg viewBox="0 0 24 24" className="mt-1 h-6 w-6" fill="white">
        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
      </svg>
    </div>
  );
}
// 3. Placa "AQUI TEM NEGÓCIO!"
function IconNegocio() {
  return (
    <div className="flex h-20 w-24 flex-col items-center justify-center rounded-lg bg-gmi-red text-white ring-2 ring-white/30 px-2 py-1">
      <span className="font-display text-xs font-black uppercase leading-tight text-center tracking-tight">
        AQUI TEM<br/>NEGÓCIO!
      </span>
      <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-white/60" />
    </div>
  );
}
// 4. Mapa do Brasil
function IconBrasil() {
  return (
    <div className="flex h-20 w-20 items-center justify-center">
      <svg viewBox="0 0 60 70" className="h-20 w-20" fill="none">
        {/* Silhueta simplificada do Brasil */}
        <path d="M30 5 C18 5 8 12 5 22 C2 32 5 44 12 52 C19 60 28 65 30 65 C32 65 41 60 48 52 C55 44 58 32 55 22 C52 12 42 5 30 5Z"
          fill="#1a3a8f" opacity="0.9" />
        {/* MG destacado */}
        <ellipse cx="28" cy="42" rx="7" ry="6" fill="#d51f26" />
        <path d="M22 42 L28 36 L34 42 L28 48Z" fill="#d51f26" />
      </svg>
    </div>
  );
}

const ATTRS40 = [
  {
    icon: <IconCNPJ />,
    d: "Atendimento personalizado. Condições especiais para CNPJ.",
  },
  {
    icon: <Icon40 />,
    d: "40 anos de mercado. Distribuidor líder de 3M em MG.",
  },
  {
    icon: <IconNegocio />,
    d: "Aqui sempre tem negócio!",
  },
  {
    icon: <IconBrasil />,
    d: "Entregamos em todo o Brasil.",
  },
];

/* ════════════════════════════════════════════════════════ */
export default function Page() {
  return (
    <main>

      {/* ── HEADER ── */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container-gmi flex items-center gap-6">
          <LogoGMI className="h-12 w-auto sm:h-14" />
          <div className="h-8 w-px bg-gray-200" />
          <Image src="/img/logo-lockup.png" alt="3M Distribuidor Autorizado" width={984} height={150}
            className="h-8 w-auto" priority />
        </div>
      </header>

      {/* ── HERO ── */}
      {/* Fundo cinza claro, imagem do trabalhador com corte diagonal */}
      <section className="relative overflow-hidden bg-[#f0efed] min-h-[520px] flex items-center">
        {/* Coluna de texto — esquerda */}
        <div className="container-gmi relative z-10 py-16 pr-[45%]">
          <h1 className="font-sans text-4xl font-black text-gmi-navy sm:text-5xl md:text-6xl leading-tight">
            A gente tem<br />solução para tudo!
          </h1>
          <p className="mt-5 max-w-md text-base text-gmi-navy/80 sm:text-lg font-sans">
            Fitas adesivas, produtos automotivos e maquinário para embalagens.
            Soluções para ampliar a qualidade e eficiência do seu negócio.
          </p>
          <div className="mt-7"><BtnRed>Solicite um orçamento</BtnRed></div>
        </div>

        {/* Imagem com corte diagonal — direita */}
        <div className="absolute right-0 top-0 h-full w-[55%]"
          style={{ clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)" }}>
          <Image src="/img/hero-bg.png" alt="" fill sizes="55vw"
            className="object-cover object-center" priority />
          {/* Trabalhador por cima */}
          <div className="absolute inset-0">
            <Image src="/img/hero-worker.png" alt="Profissional GMI" fill sizes="55vw"
              className="object-contain object-bottom" priority />
          </div>
        </div>
      </section>

      {/* ── RED BANNER com diagonal ── */}
      <RedBannerDiag>Aqui você encontra as melhores marcas do mercado.</RedBannerDiag>

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
        <div className="container-gmi grid items-center gap-8 md:grid-cols-2">
          {/* Texto */}
          <div>
            <div className="mb-5 flex items-center gap-4">
              <Shield><IcoTape /></Shield>
              <h2 className="font-sans text-3xl font-black text-gmi-red leading-tight">
                Fitas<br />Adesivas
              </h2>
            </div>
            <ul className="space-y-2 font-sans text-base font-bold text-gmi-navy">
              {TAPES.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>

          {/* Imagem — bem grande */}
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <Image src="/img/fitas.png" alt="Linha de fitas adesivas GMI"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain scale-[1.2] origin-center" />
          </div>
        </div>

        {/* CTA abaixo da imagem, alinhado à coluna da imagem */}
        <div className="container-gmi mt-2 grid md:grid-cols-2">
          <div />{/* espaço coluna esquerda */}
          <div className="flex justify-center md:justify-start mt-4">
            <BtnRed>Solicitar orçamento</BtnRed>
          </div>
        </div>
      </section>

      {/* ── PERSONALIZE ── */}
      <section className="relative isolate min-h-[180px] flex items-center overflow-hidden bg-gmi-red text-white py-10">
        <Image src="/img/personalize.png" alt="" fill sizes="100vw"
          className="-z-10 object-cover object-right opacity-60" />
        <div className="container-gmi flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-sans text-2xl font-black max-w-sm sm:text-3xl leading-snug">
            Personalize sua fita de empacotamento conosco.
          </h3>
          <BtnNavy>Solicitar orçamento</BtnNavy>
        </div>
      </section>

      {/* ── AUTOMOTIVO ── */}
      <section className="py-14 text-white" style={{ backgroundColor: "#013DFF" }}>
        <div className="container-gmi grid items-center gap-8 md:grid-cols-2">
          {/* Imagem — esquerda, grande */}
          <div className="relative order-2 w-full md:order-1" style={{ aspectRatio: "4/3" }}>
            <Image src="/img/automotivo.png"
              alt="Produtos automotivos: tintas, vernizes e abrasivos"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain scale-[1.25] origin-center" />
          </div>

          {/* Texto — direita */}
          <div className="order-1 md:order-2 text-right">
            <div className="mb-5 flex items-center justify-end gap-4">
              <h2 className="font-sans text-3xl font-black leading-tight sm:text-4xl">
                Produtos<br />Automotivos
              </h2>
              {/* Escudo branco com carro */}
              <div className="relative flex h-16 w-14 shrink-0 items-center justify-center">
                <svg viewBox="0 0 56 64" className="absolute inset-0 h-full w-full" fill="none">
                  <path d="M28 2L4 12v20c0 16 10.5 28 24 30 13.5-2 24-14 24-30V12L28 2z"
                    fill="white" fillOpacity=".15" stroke="white" strokeWidth="2.5" />
                </svg>
                <span className="relative z-10"><IcoCar /></span>
              </div>
            </div>
            <ul className="space-y-1.5 font-sans text-base font-semibold">
              {AUTO.map((i) => <li key={i}>{i}</li>)}
            </ul>
            {/* CTA embaixo, alinhado à esquerda */}
            <div className="mt-6 flex justify-start">
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
              <h2 className="font-sans text-3xl font-black text-gmi-red leading-tight sm:text-4xl">
                Máquinas
              </h2>
            </div>
            <p className="max-w-sm font-sans text-base text-gmi-navy/80 sm:text-lg">
              Soluções no modelo de comodato para empresas com<br />
              alta operação e necessidade de padronização.
            </p>
            <div className="mt-6"><BtnRed>Fale com um especialista</BtnRed></div>
          </div>
          {/* Imagem — grande */}
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <Image src="/img/maquina.png" alt="Máquina seladora 3M"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain scale-[1.1] origin-center" />
          </div>
        </div>
      </section>

      {/* ── RED BANNER grandes players ── */}
      <RedBannerDiag>Grandes players do mercado escolhem a GMI. Escolha você também.</RedBannerDiag>

      {/* ── 40 ANOS ── */}
      <section className="relative isolate overflow-hidden bg-gmi-navy py-16 text-white">
        <Image src="/img/warehouse-40.png" alt="" fill aria-hidden
          className="-z-10 object-cover opacity-25" sizes="100vw" />
        <div className="container-gmi">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {ATTRS40.map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                {s.icon}
                <p className="font-sans text-sm text-white/80 max-w-[180px] mx-auto">{s.d}</p>
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
          {/* Foto com corte diagonal — esquerda */}
          <div className="relative hidden min-h-[500px] lg:block">
            <Image src="/img/aerial-worker.png" alt="Operação logística GMI"
              fill sizes="45vw"
              className="object-cover object-center" />
            {/* Corte diagonal direita */}
            <div className="absolute inset-0"
              style={{ clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)" }}>
              <Image src="/img/aerial-worker.png" alt="" fill sizes="45vw"
                className="object-cover object-center" />
            </div>
          </div>

          {/* Formulário — direita */}
          <div className="px-8 py-14 sm:px-12">
            <h2 className="headline text-2xl font-black sm:text-3xl leading-tight mb-8">
              Cadastre-se para entrar em contato com nosso time comercial e receber um orçamento.
            </h2>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gmi-paper py-8">
        <div className="container-gmi flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center">
          {/* Dois logos separados como no PDF */}
          <div className="flex items-center gap-6">
            <LogoGMI className="h-10 w-auto" />
            <div className="h-8 w-px bg-gmi-navy/20" />
            <Image src="/img/logo-lockup.png" alt="3M Distribuidor Autorizado"
              width={984} height={150} className="h-7 w-auto" />
          </div>
          <div className="text-center text-sm text-gmi-navy/70">
            <p className="font-semibold">CNPJ 04.098.359/0001-02</p>
            <p>Rua Conselheiro Pena, 50 — Santa Branca</p>
            <p>Belo Horizonte / MG</p>
          </div>
          {/* WhatsApp + Instagram */}
          <div className="flex items-center gap-3">
            <a href="#contato" aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gmi-navy text-white hover:bg-gmi-navy/80 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gmi-navy text-white hover:bg-gmi-navy/80 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
