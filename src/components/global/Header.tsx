"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/global/LanguageToggle";
import { Logo } from "@/components/header/Logo";
import { NavLink } from "@/components/header/NavLink";
import { MobileMenu } from "@/components/header/MobileMenu";
import ContactForm from "./ContactForm";

export default function Header() {
  const t = useTranslations("Header");

  const links = [
    { href: "#services", label: t("services") },
    { href: "#pricing", label: t("pricing") },
    { href: "#gallery", label: t("showcase") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button
            size="sm"
            asChild
            className="bg-[#B8860B] hover:bg-[#DAA520] text-white transition-colors duration-300 px-6 py-2 rounded-full text-base font-semibold
            
            md:h-12 md:px-8 md:py-4"
          >
            <ContactForm label={t("bookNow")} />
          </Button>
          <LanguageToggle />
          <MobileMenu links={links} />
        </div>
      </div>
    </motion.header>
  );
}
