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
          "window cleaner",
          "window cleaner {{location}}",
          "window cleaner nearby",
          "window cleaning company",
          "window cleaning price",
          "window cleaners for residential",
          "home window cleaning rates",
          "window cleaning",
          "residential window cleaning",
          "Window cleaning Brossard and Longueuil",
          "Window washing Longueuil Brossard",
          "Window cleaning company Brossard and Longueuil",
          "Expert glazier Brossard Longueuil",
          "Exterior window cleaning service Brossard and Longueuil",
          "Professional interior window cleaning Brossard Longueuil",
          "Window cleaning business Longueuil Brossard",
          "Free window cleaning quote Brossard and Longueuil",
          "Window specialist Brossard and Longueuil",
          "Professional exterior window cleaning Brossard Longueuil",
          "spring window cleaning Montreal",
          "fall window washing South Shore",
          "winter window cleaning service Brossard",
          "how much does window cleaning cost in Montreal",
          "window cleaning prices Longueuil",
          "best window cleaner near me",
          "local window cleaning company Montreal",
          "family-owned window cleaning business South Shore",
          "hard water stains on windows removal",
          "cleaning windows with mineral deposits",
          "removing water spots from glass Montreal",
          "alternatives to [competitor name] window cleaning",
          "budget-friendly window cleaning Montreal",
          "same-day window cleaning service Brossard",
          "move-out window cleaning Montreal",
          "spring cleaning window service Montreal",
          "spring cleaning special window washing",
          "professional spring window cleaning South Shore",
          "spring home cleaning window services",
          "window washing spring maintenance package",
          "window washer Montreal",
          "professional window washer South Shore",
          "window washer service Brossard",
          "local window washer Longueuil",
          "residential window washer near me",
          "commercial window washer Montreal",
          "experienced window washer South Shore",
          "affordable window washer service",
        ]
      : [
          "nettoyage de vitres Montréal",
          "service de nettoyage de verre Montréal",
          "lavage de fenêtres professionnel Montréal",
          "nettoyage de fenêtres résidentiel Rive-Sud",
          "nettoyage de vitres commercial Montréal",
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
          "laveur de vitres",
          "laveur de vitres {{location}}",
          "laveur de vitres à proximité",
          "entreprise de lavage de vitres",
          "lavage de vitres prix",
          "laveurs de vitres pour particuliers",
          "laveurs de vitres à domicile tarif",
          "nettoyage de vitres",
          "Lavage de vitres résidentiel",
          "Nettoyage vitres Brossard et Longueuil",
          "Lavage vitres Longueuil Brossard",
          "Entreprise nettoyage fenêtres Brossard et Longueuil",
          "Expert vitrerie Brossard Longueuil",
          "Service lavage vitres extérieur Brossard et Longueuil",
          "Professionnel nettoyage intérieur vitres Brossard Longueuil",
          "Entreprise nettoyage vitrerie Longueuil Brossard",
          "Devis gratuit lavage vitres Brossard et Longueuil",
          "Spécialiste fenêtres Brossard et Longueuil",
          "Nettoyage professionnel vitres extérieur Brossard Longueuil",
          "nettoyage de vitres printemps Montréal",
          "lavage de fenêtres automne Rive-Sud",
          "service de nettoyage de vitres hiver Brossard",
          "combien coûte le nettoyage de vitres à Montréal",
          "prix nettoyage de fenêtres Longueuil",
          "meilleur laveur de vitres près de chez moi",
          "entreprise locale de nettoyage de vitres Montréal",
          "entreprise familiale de lavage de vitres Rive-Sud",
          "élimination des taches d'eau dure sur les vitres",
          "nettoyage de fenêtres avec dépôts minéraux",
          "enlever les taches d'eau du verre Montréal",
          "alternatives à [nom du concurrent] nettoyage de vitres",
          "nettoyage de vitres économique Montréal",
          "service de nettoyage de vitres le jour même Brossard",
          "nettoyage de fenêtres pour déménagement Montréal",
          "service de vitres grand ménage du printemps Montréal",
          "offre spéciale lavage de vitres printemps",
          "nettoyage de fenêtres professionnel printemps Rive-Sud",
          "services de nettoyage de vitres ménage de printemps",
          "forfait entretien printemps lavage de fenêtres",
          "laveur de fenêtres Montréal",
          "laveur de fenêtres professionnel Rive-Sud",
          "service de laveur de fenêtres Brossard",
          "laveur de fenêtres local Longueuil",
          "laveur de fenêtres résidentiel près de chez moi",
          "laveur de fenêtres commercial Montréal",
          "laveur de fenêtres expérimenté Rive-Sud",
          "service de laveur de fenêtres abordable",
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
