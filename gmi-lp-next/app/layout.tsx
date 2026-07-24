import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

// Fontes auto-hospedadas (sem dependência de CDN externo).
// Display condensado (headlines) ~ Roboto Condensed da arte original.
import "@fontsource/roboto-condensed/400.css";
import "@fontsource/roboto-condensed/700.css";
// Corpo geométrico ~ substituto livre da Averta até confirmar licença web.
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/800.css";

export const metadata: Metadata = {
  title: "GMI Distribuidora — A gente tem solução para tudo!",
  description:
    "Distribuidor autorizado 3M em MG. Fitas adesivas, produtos automotivos e maquinário para embalagens. 40 anos de mercado. Solicite seu orçamento.",
  openGraph: {
    title: "GMI Distribuidora — A gente tem solução para tudo!",
    description:
      "Distribuidor líder de 3M em MG. Fitas, produtos automotivos e máquinas. Solicite um orçamento.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#d51f26",
  width: "device-width",
  initialScale: 1,
};

// ID do contêiner do Google Tag Manager da GMI.
// Para trocar de contêiner um dia, basta editar esta linha.
const GTM_ID = "GTM-NZ96LXFC";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      {GTM_ID && (
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      )}
      <body className="bg-gmi-paper text-gmi-navy font-sans antialiased">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {children}
      </body>
    </html>
  );
}
