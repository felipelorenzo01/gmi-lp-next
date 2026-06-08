import Image from "next/image";
import LeadForm from "@/components/LeadForm";

function Lockup({ className = "h-9 w-auto" }: { className?: string }) {
  return <Image src="/img/logo-lockup.png" alt="GMI — Distribuidor Autorizado 3M" width={984} height={150} className={className} priority />;
}

function CtaButton({ children, href = "#contato" }: { children: React.ReactNode; href?: string }) {
  return <a href={href} className="btn-primary">{children}</a>;
}

function RedBanner({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gmi-red py-6 text-white">
      <div className="container-gmi">
        <h2 className="headline text-2xl sm:text-3xl md:text-4xl">{children}</h2>
      </div>
    </section>
  );
}

const TAPES = ["Fitas personalizadas", "Fitas dupla face", "Fitas BOPP", "Fita crepe", "Fita de demarcação", "Fitas de alumínio"];
const AUTO = ["Abrasivos", "Tintas automotivas", "Vernizes", "Massas de polir", "Preparação de superfície", "Acabamento e complementos para pintura"];
const CLIENTS = [
  { src: "/img/cli-azul.png",        alt: "Azul",        w: 510, h: 137 },
  { src: "/img/cli-carbel.png",      alt: "Carbel",      w: 499, h: 147 },
  { src: "/img/cli-gol.png",         alt: "GOL",         w: 334, h: 138 },
  { src: "/img/cli-grupolider.png",  alt: "Grupo Líder", w: 541, h: 169 },
  { src: "/img/cli-saritur.png",     alt: "Saritur",     w: 395, h: 186 },
];

/* ── Ícones SVG para os 4 atributos da seção 40 anos ── */
function IconHeadset() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" stroke="#d51f26" strokeWidth="2" />
      <path d="M13 26v-3a11 11 0 0 1 22 0v3" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="10" y="26" width="5" height="8" rx="2.5" fill="#d51f26" />
      <rect x="33" y="26" width="5" height="8" rx="2.5" fill="#d51f26" />
    </svg>
  );
}

function IconBadge() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" stroke="#d51f26" strokeWidth="2" />
      <path d="M24 12l2.9 6.6 7.1.65-5.2 4.8 1.55 7.05L24 27.5l-6.35 3.6 1.55-7.05L14 19.25l7.1-.65L24 12z" fill="#d51f26" stroke="#d51f26" strokeWidth="1" strokeLinejoin="round" />
      <path d="M17 36l2-3m12 3-2-3" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" stroke="#d51f26" strokeWidth="2" />
      <path d="M10 22l5-3 5 2 4-2 5 2 9-3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 22l3 7h5l3-3 3 3h5l3-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="2" fill="#d51f26" />
    </svg>
  );
}

function IconTruck() {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" stroke="#d51f26" strokeWidth="2" />
      <rect x="9" y="20" width="19" height="11" rx="1.5" stroke="white" strokeWidth="2" />
      <path d="M28 23h5l4 4v4h-9V23z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="15" cy="33" r="2.5" fill="#d51f26" stroke="white" strokeWidth="1.5" />
      <circle cx="33" cy="33" r="2.5" fill="#d51f26" stroke="white" strokeWidth="1.5" />
    </svg>
  );
}

const ATTRS = [
  {
    icon: <IconHeadset />,
    t: "Atendimento personalizado",
    d: "Condições especiais para CNPJ.",
  },
  {
    icon: <IconBadge />,
    t: "40 anos de mercado",
    d: "Distribuidor líder de 3M em MG.",
  },
  {
    icon: <IconHandshake />,
    t: "Aqui sempre tem negócio!",
    d: "Melhores condições do mercado.",
  },
  {
    icon: <IconTruck />,
    t: "Entregamos em todo o Brasil",
    d: "Logística para qualquer região.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="sticky top-0 z-30 border-b border-gmi-navy/10 bg-gmi-paper/90 backdrop-blur">
        <div className="container-gmi flex items-center justify-between py-3">
          <Lockup className="h-8 w-auto sm:h-10" />
        </div>
      </header>

      {/* HERO */}
      <section className="overflow-hidden">
        <div className="container-gmi grid items-center gap-8 py-12 md:grid-cols-2 md:py-16">
          <div className="reveal">
            <h1 className="headline text-4xl text-gmi-navy sm:text-5xl md:text-6xl">
              A gente tem<br /><span className="text-gmi-red">solução para tudo!</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-gmi-navy/80 sm:text-lg">
              Fitas adesivas, produtos automotivos e maquinário para embalagens.
              Soluções para ampliar a qualidade e a eficiência do seu negócio.
            </p>
            <div className="mt-7"><CtaButton>Solicite um orçamento</CtaButton></div>
          </div>
          <div className="relative aspect-[4/3] w-full reveal">
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              <Image src="/img/hero-bg.png" alt="" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-cover" />
            </div>
            <Image src="/img/hero-worker.png" alt="Profissional da GMI segurando uma caixa" fill priority sizes="(max-width:768px) 100vw, 50vw" className="object-contain object-bottom drop-shadow-2xl" />
          </div>
        </div>
      </section>

      <RedBanner>Aqui você encontra as melhores marcas do mercado.</RedBanner>

      {/* MARCAS */}
      <section className="py-10">
        <div className="container-gmi overflow-x-auto">
          <Image src="/img/marcas.png" alt="Marcas: 3M, Sherwin-Williams, GMax, Vonixx, Maxi Rubber, Farben" width={1860} height={156} className="mx-auto h-auto w-full max-w-3xl min-w-[520px]" />
        </div>
      </section>

      {/* FITAS */}
      <section className="py-12">
        <div className="container-gmi grid items-center gap-8 md:grid-cols-2">
          <div className="reveal">
            <h2 className="headline text-3xl text-gmi-red sm:text-4xl">Fitas adesivas</h2>
            <ul className="mt-5 space-y-1.5 font-display text-lg font-bold uppercase text-gmi-navy">
              {TAPES.map((i) => <li key={i} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-gmi-red" />{i}</li>)}
            </ul>
            <div className="mt-6"><CtaButton>Solicitar orçamento</CtaButton></div>
          </div>
          <div className="relative aspect-[16/10] w-full reveal">
            <Image src="/img/fitas.png" alt="Linha de fitas adesivas GMI" fill sizes="(max-width:768px) 100vw, 50vw" className="object-contain" />
          </div>
        </div>
      </section>

      {/* PERSONALIZE */}
      <section className="relative isolate flex min-h-[160px] items-center overflow-hidden bg-gmi-navy py-8 text-white">
        <Image src="/img/personalize.png" alt="" fill className="-z-10 object-cover object-right" sizes="100vw" />
        <div className="container-gmi flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="headline max-w-md text-2xl sm:text-3xl">Personalize sua fita de empacotamento conosco.</h3>
          <CtaButton>Solicitar orçamento</CtaButton>
        </div>
      </section>

      {/* AUTOMOTIVO */}
      <section className="py-12 text-white" style={{ backgroundColor: "#013DFF" }}>
        <div className="container-gmi grid items-center gap-4 md:grid-cols-2">
          {/* Imagem maior: ocupa mais do grid, scale up */}
          <div className="relative order-2 w-full md:order-1 reveal" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/img/automotivo.png"
              alt="Produtos automotivos: tintas, vernizes e abrasivos"
              fill
              sizes="(max-width:768px) 100vw, 55vw"
              className="object-contain scale-110 origin-center"
            />
          </div>
          <div className="order-1 md:order-2 md:text-right reveal">
            <h2 className="headline text-3xl sm:text-4xl">Produtos automotivos</h2>
            <ul className="mt-5 space-y-1.5 font-display text-lg font-bold uppercase">
              {AUTO.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <div className="mt-6"><CtaButton>Solicitar orçamento</CtaButton></div>
          </div>
        </div>
      </section>

      {/* MÁQUINAS */}
      <section className="py-12 bg-[#ebebeb]">
        <div className="container-gmi grid items-center gap-8 md:grid-cols-2">
          <div className="reveal">
            <h2 className="headline text-3xl text-gmi-red sm:text-4xl">Máquinas</h2>
            <p className="mt-4 max-w-md text-base text-gmi-navy/80 sm:text-lg">
              Soluções no modelo de comodato para empresas com alta operação e necessidade de padronização.
            </p>
            <div className="mt-6"><CtaButton>Fale com um especialista</CtaButton></div>
          </div>
          <div className="relative w-full reveal" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/img/maquina.png"
              alt="Máquina seladora de caixas"
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain scale-110 origin-center"
            />
          </div>
        </div>
      </section>

      <RedBanner>Grandes players do mercado escolhem a GMI. Escolha você também.</RedBanner>

      {/* 40 ANOS */}
      <section className="relative isolate overflow-hidden bg-gmi-navy py-14 text-white">
        <Image src="/img/warehouse-40.png" alt="" fill aria-hidden className="-z-10 object-cover opacity-30" sizes="100vw" />
        <div className="container-gmi">
          <div className="mb-10 flex items-end gap-3">
            <span className="font-display text-6xl font-bold leading-none sm:text-7xl">40</span>
            <span className="mb-1 font-display text-xl font-bold uppercase">anos<br />de experiência</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ATTRS.map((s) => (
              <div key={s.t} className="flex flex-col gap-3 border-t-2 border-gmi-red pt-4">
                {s.icon}
                <div>
                  <h4 className="headline text-lg">{s.t}</h4>
                  <p className="mt-1 text-sm text-white/75">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENTES */}
      <section className="py-10">
        <div className="container-gmi flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {CLIENTS.map((c) => (
            <Image key={c.src} src={c.src} alt={c.alt} width={c.w} height={c.h} className="h-7 w-auto sm:h-9" />
          ))}
        </div>
      </section>

      {/* FORM */}
      <section id="contato" className="relative isolate overflow-hidden bg-gmi-red text-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative hidden min-h-[300px] lg:block">
            <Image src="/img/aerial-worker.png" alt="Operação logística GMI" fill sizes="50vw" className="object-cover" />
          </div>
          <div className="container-gmi py-14">
            <h2 className="headline text-3xl sm:text-4xl">
              Cadastre-se para entrar em contato com nosso time comercial e receber um orçamento.
            </h2>
            <div className="mt-7 rounded-2xl bg-gmi-navy/25 p-6 backdrop-blur-sm sm:p-8">
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gmi-paper py-10">
        <div className="container-gmi flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Lockup className="h-9 w-auto" />
          <div className="text-sm text-gmi-navy/70">
            <p>CNPJ 04.098.359/0001-02</p>
            <p>Rua Conselheiro Pena, 50 — Santa Branca</p>
            <p>Belo Horizonte / MG</p>
          </div>
          <a href="#contato" className="flex h-11 w-11 items-center justify-center rounded-full bg-gmi-red text-white" aria-label="Fale conosco">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607z" />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}
