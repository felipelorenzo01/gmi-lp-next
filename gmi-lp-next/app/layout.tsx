import type { Metadata, Viewport } from "next";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gmi-paper text-gmi-navy font-sans antialiased">{children}</body>
    </html>
  );
}
