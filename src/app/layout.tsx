import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import "@/styles/globals.css";

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

export const metadata: Metadata = {
  title: "Luminor | Premium Cleaning Service in Montreal & South Shore",
  description:
    "Luminor offers premium cleaning services in Montreal, Brossard, Greenfield Park, St-Lambert, and St-Hubert. We specialize in cleaning luxury and high-end spaces, including Airbnb rentals, short-term rentals, luxury rooms, and apartments. Trusted, efficient, and eco-friendly solutions for homes and businesses.",
  keywords: [
    // English keywords
    "premium cleaning service Montreal",
    "Montreal cleaning company",
    "eco-friendly cleaning services",
    "Brossard cleaning services",
    "Greenfield Park cleaning services",
    "St-Lambert cleaning services",
    "St-Hubert cleaning company",
    "South Shore cleaning services",
    "luxury cleaning service",
    "high-end cleaning Montreal",
    "Airbnb cleaning Montreal",
    "short-term rental cleaning",
    "luxury room cleaning",
    "luxury apartment cleaning",
    "business cleaning Montreal",
    "professional cleaning Montreal",

    // French keywords
    "service de nettoyage premium Montréal",
    "entreprise de nettoyage Montréal",
    "services de nettoyage écologique",
    "nettoyage Brossard",
    "services de nettoyage Greenfield Park",
    "nettoyage St-Lambert",
    "entreprise de nettoyage St-Hubert",
    "services de nettoyage Rive-Sud",
    "service de nettoyage de luxe",
    "nettoyage haut de gamme Montréal",
    "nettoyage Airbnb Montréal",
    "nettoyage location à court terme",
    "nettoyage de chambres de luxe",
    "nettoyage d'appartements de luxe",
    "nettoyage commercial Montréal",
    "service de nettoyage professionnel Montréal",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

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
        {Array.isArray(metadata.keywords) && (
          <meta name="keywords" content={metadata.keywords.join(", ")} />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <Toaster />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
