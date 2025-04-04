import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Header from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const isEnglish = locale === "en";

  return {
    title: isEnglish
      ? "Luminor | Premium Window & Glass Cleaning Service in Montreal & South Shore"
      : "Luminor | Service Premium de Nettoyage de Vitres et Verre à Montréal et Rive-Sud",
    description: isEnglish
      ? "Luminor offers professional window and glass cleaning services in Montreal, Brossard, Greenfield Park, St-Lambert, and St-Hubert. We specialize in residential and commercial glass cleaning for luxury homes, high-rise buildings, storefronts, shower doors, and glass partitions. Crystal-clear results with eco-friendly solutions."
      : "Luminor offre des services professionnels de nettoyage de vitres et de verre à Montréal, Brossard, Greenfield Park, St-Lambert et St-Hubert. Nous sommes spécialisés dans le nettoyage résidentiel et commercial pour maisons de luxe, immeubles à étages, vitrines, portes de douche et cloisons en verre. Résultats impeccables avec des solutions écologiques.",
    keywords: isEnglish
      ? [
          "window cleaning Montreal",
          "glass cleaning service Montreal",
          "professional window washing Montreal",
          "residential window cleaning South Shore",
          "commercial window cleaning Montreal",
          "high-rise window cleaning service",
          "storefront window cleaning Montreal",
          "glass partition cleaning Montreal",
          "shower door cleaning service",
          "streak-free window cleaning",
          "glass surface cleaning Montreal",
          "mirror cleaning service",
          "window cleaning Brossard",
          "Greenfield Park window washing",
          "St-Lambert window cleaning services",
          "St-Hubert window cleaners",
          "luxury home glass cleaning",
          "glass table cleaning service",
          "Airbnb window cleaning Montreal",
          "eco-friendly glass cleaning",
          "window cleaning for businesses",
          "exterior window cleaning Montreal",
          "interior glass washing service",
          "window and glass cleaning specialists Montreal",
        ]
      : [
          "nettoyage de vitres Montréal",
          "service de nettoyage de verre Montréal",
          "lavage de fenêtres professionnel Montréal",
          "nettoyage de fenêtres résidentiel Rive-Sud",
          "nettoyage de vitres commercial Montréal",
          "service de nettoyage de vitres d'immeubles",
          "nettoyage de vitrines Montréal",
          "nettoyage de cloisons en verre Montréal",
          "service de nettoyage de portes de douche",
          "nettoyage de vitres sans traces",
          "nettoyage de surfaces en verre Montréal",
          "service de nettoyage de miroirs",
          "nettoyage de fenêtres Brossard",
          "lavage de vitres Greenfield Park",
          "services de nettoyage de vitres St-Lambert",
          "nettoyeurs de fenêtres St-Hubert",
          "nettoyage de verre maisons de luxe",
          "service de nettoyage de tables en verre",
          "nettoyage de vitres Airbnb Montréal",
          "nettoyage de verre écologique",
          "nettoyage de vitres pour entreprises",
          "nettoyage de fenêtres extérieures Montréal",
          "service de lavage de verre intérieur",
          "spécialistes en nettoyage de vitres et verre Montréal",
        ],
    icons: {
      icon: "/logo-cropped.svg",
      apple: "/logo-cropped.svg",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/logo-cropped.svg" />
        <link rel="apple-touch-icon" href="/logo-cropped.svg" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
