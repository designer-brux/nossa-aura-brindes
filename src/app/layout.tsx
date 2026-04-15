import type { Metadata } from "next";
import { Yeseva_One, Josefin_Sans } from "next/font/google";
import "./globals.css";

import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { WhatsAppButton } from "../components/WhatsAppButton/WhatsAppButton";

const yesevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-yeseva",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
});

// Configuração inicial de SEO Local
export const metadata: Metadata = {
  title: "Nossa Aura Brindes | Personalização em Valinhos e Região",
  description:
    "Especialistas em personalização de alto padrão. Garrafas, copos e canecas com gravação a laser e tecnologia DTF em Valinhos e Campinas.",
  openGraph: {
    title: "Nossa Aura Brindes",
    description:
      "Brindes premium personalizados a laser e DTF em Valinhos e Região de Campinas.",
    url: "https://nossaaura.com.br",
    siteName: "Nossa Aura Brindes",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${yesevaOne.variable} ${josefinSans.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
