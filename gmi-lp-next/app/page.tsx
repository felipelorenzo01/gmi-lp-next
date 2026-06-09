import Image from "next/image";
import LeadForm from "@/components/LeadForm";

/* ── Lockup único (GMI + 3M juntos, fundo transparente) ── */
function Lockup({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image src="/img/logo-lockup.png" alt="GMI Distribuindo Soluções — Distribuidor Autorizado 3M"
      width={984} height={150} className={className} priority />
  );
}

/* ── Botões ── */
function BtnRed({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-full
      bg-gmi-red px-10 py-4 min-w-[220px] font-sans text-base font-semibold text-white
      transition hover:bg-gmi-red-dark focus:outline-none focus:ring-4 focus:ring-gmi-red/30">
      {children}
    </a>
  );
}
function BtnNavy({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-full
      bg-gmi-navy px-10 py-4 min-w-[220px] font-sans text-base font-semibold text-white
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
        <h2 className="headline text-2xl sm:text-3xl md:text-4xl">{children}</h2>
      </div>
    </div>
  );
}

/* ── Dados ── */
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
  {
    img: "/img/clube-cnpj.png",      w: 313, h: 313,
    alt: "Clube do CNPJ",
    d: "Atendimento personalizado. Condições especiais para CNPJ.",
  },
  {
    img: "/img/40-anos.png",         w: 238, h: 504,
    alt: "40 anos de experiência",
    d: "40 anos de mercado. Distribuidor líder de 3M em MG.",
  },
  {
    img: "/img/aqui-tem-negocio.png", w: 413, h: 242,
    alt: "Aqui tem negócio",
    d: "Aqui sempre tem negócio!",
  },
  {
    img: "/img/mapa-brasil.png",     w: 313, h: 313,
    alt: "Mapa do Brasil",
    d: "Entregamos em todo o Brasil.",
  },
];

/* ════════════════════════════════════════════════════════════ */
export default function Page() {
  return (
    <main>

      {/* ── HEADER ── */}
      <header className="bg-white py-4 shadow-sm">
        <div className="container-gmi">
          <Lockup className="h-10 w-auto sm:h-12" />
        </div>
      </header>

      {/* ── HERO ── */}
      {/*
        Grid full-width (sem container aninhado) — evita colapso de coluna.
        2 colunas apenas em lg+; texto à esquerda, imagem diagonal à direita.
      */}
      <section className="overflow-hidden bg-[#f0efed]">
        <div className="grid lg:grid-cols-2 min-h-[480px] items-center">

          {/* Coluna texto */}
          <div className="flex flex-col justify-center py-14
            px-6 sm:px-10 lg:px-16 xl:px-20">
            <h1 className="font-sans font-black leading-tight text-gmi-navy
              text-[2rem] sm:text-[2.5rem] lg:text-[2.8rem] xl:text-[3.2rem]">
              A gente tem solução para tudo!
            </h1>
            <p className="mt-5 max-w-md font-sans text-base text-gmi-navy/60 sm:text-lg">
              Fitas adesivas, produtos automotivos e maquinário para embalagens.
              Soluções para ampliar a qualidade e eficiência do seu negócio.
            </p>
            <div className="mt-7"><BtnRed>Solicite um orçamento</BtnRed></div>
          </div>

          {/* Coluna imagem — diagonal na borda esquerda */}
          <div className="relative min-h-[340px] lg:h-full lg:min-h-[480px]"
            style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)" }}>
            <Image src="/img/hero-bg.png" alt="" fill priority sizes="(max-width:1024px) 100vw, 50vw"
              className="object-cover object-center" />
            <div className="absolute inset-0">
              <Image src="/img/hero-worker.png" alt="Profissional GMI" fill priority
                sizes="(max-width:1024px) 100vw, 50vw"
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
            alt="3M, Sherwin-Williams, GMax, Vonixx, Maxi Rubber, Farben"
            width={1860} height={156}
            className="mx-auto h-auto w-full max-w-4xl min-w-[520px]" />
        </div>
      </section>

      {/* ── FITAS ADESIVAS ── */}
      <section className="bg-[#e8e6e1] py-14">
        <div className="container-gmi grid items-center gap-8 md:grid-cols-2">

          {/* Texto */}
          <div>
            {/* Ícone real da designer (escudo + texto "Fitas Adesivas") */}
            <h2 className="sr-only">Fitas Adesivas</h2>
            <Image src="/img/icone-fitas.png" alt="Fitas Adesivas"
              width={513} height={204} className="mb-6 h-14 w-auto" />
            <ul className="space-y-2 font-sans text-base font-semibold text-gmi-navy">
              {TAPES.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>

          {/* Imagem flutuando sobre o fundo (bg removido) */}
          <div className="relative w-full" style={{ minHeight: "340px" }}>
            <Image src="/img/fitas-desktop.png" alt="Linha de fitas adesivas"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain object-right scale-[1.1] origin-right" />
          </div>
        </div>

        {/* CTA abaixo, alinhado com a coluna da imagem */}
        <div className="container-gmi mt-4 grid md:grid-cols-2">
          <div />
          <div className="flex justify-center md:justify-start pt-4">
            <BtnRed>Solicitar orçamento</BtnRed>
          </div>
        </div>
      </section>

      {/* ── PERSONALIZE ── */}
      <section className="relative isolate min-h-[180px] flex items-center
        overflow-hidden bg-gmi-red text-white py-10">
        <Image src="/img/personalize.png" alt="" fill sizes="100vw"
          className="-z-10 object-cover object-right opacity-60" />
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
      {/*
        automotivo-desktop.png: fundo azul (#013DFF) = mesma cor da seção.
        Produtos ficam na metade esquerda da imagem → object-cover object-left.
      */}
      <section className="py-14 text-white" style={{ backgroundColor: "#013DFF" }}>
        <div className="container-gmi grid items-center gap-8 md:grid-cols-2">

          {/* Imagem ocupa coluna esquerda, corta para mostrar produtos */}
          <div className="relative order-2 w-full md:order-1" style={{ minHeight: "380px" }}>
            <Image src="/img/automotivo-desktop.png"
              alt="Produtos automotivos"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain object-left scale-[1.15] origin-left" />
          </div>

          {/* Texto + ícone real */}
          <div className="order-1 md:order-2 flex flex-col items-end text-right">
            <h2 className="sr-only">Produtos Automotivos</h2>
            {/* Ícone da designer — branco sobre fundo azul, perfeito */}
            <Image src="/img/icone-automotivos.png" alt="Produtos Automotivos"
              width={667} height={204} className="mb-5 h-14 w-auto" />
            <ul className="space-y-1.5 font-sans text-base font-semibold">
              {AUTO.map((i) => <li key={i}>{i}</li>)}
            </ul>
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
            <h2 className="sr-only">Máquinas</h2>
            <Image src="/img/icone-maquinas.png" alt="Máquinas"
              width={533} height={204} className="mb-5 h-14 w-auto" />
            <p className="max-w-sm font-sans text-base font-medium text-gmi-navy sm:text-lg">
              Soluções no modelo de comodato para empresas com
              alta operação e necessidade de padronização.
            </p>
            <div className="mt-6"><BtnRed>Fale com um especialista</BtnRed></div>
          </div>

          {/* Máquina flutuando */}
          <div className="relative w-full" style={{ minHeight: "380px" }}>
            <Image src="/img/maquina-desktop.png" alt="Máquina seladora 3M"
              fill sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain scale-[1.1] origin-center" />
          </div>
        </div>
      </section>

      {/* ── RED BANNER ── */}
      <RedBanner>Grandes players do mercado escolhem a GMI. Escolha você também.</RedBanner>

      {/* ── 40 ANOS ── */}
      {/*
        fundo-warehouse.png: já tem overlay azul escuro baked in.
        Usar direto como fundo sem opacidade extra.
      */}
      <section className="relative isolate overflow-hidden bg-gmi-navy py-16 text-white">
        <Image src="/img/fundo-warehouse.png" alt="" fill aria-hidden
          className="-z-10 object-cover" sizes="100vw" />
        <div className="container-gmi">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
            {ATTRS40.map((s) => (
              <div key={s.alt} className="flex flex-col items-center gap-4">
                <div className="flex items-center justify-center" style={{ height: "88px" }}>
                  <Image src={s.img} alt={s.alt} width={s.w} height={s.h}
                    className="max-h-[88px] w-auto object-contain" />
                </div>
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

          {/* Foto com corte diagonal direita */}
          <div className="relative hidden min-h-[520px] lg:block">
            <div className="absolute inset-0"
              style={{ clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)" }}>
              <Image src="/img/aerial-worker.png" alt="Operação logística GMI"
                fill sizes="45vw" className="object-cover object-center" />
            </div>
          </div>

          {/* Form */}
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
        <div className="container-gmi flex flex-col items-center justify-between gap-6
          sm:flex-row sm:items-center">
          <Lockup className="h-10 w-auto sm:h-12" />
          <div className="text-center text-sm text-gmi-navy/70">
            <p className="font-semibold text-gmi-navy">CNPJ 04.098.359/0001-02</p>
            <p>Rua Conselheiro Pena, 50 — Santa Branca</p>
            <p>Belo Horizonte / MG</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#contato" aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full
                bg-gmi-navy text-white hover:bg-gmi-navy/80 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full
                bg-gmi-navy text-white hover:bg-gmi-navy/80 transition">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  );
}
