"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/global/LanguageToggle";
import { Logo } from "@/components/header/Logo";
import { NavLink } from "@/components/header/NavLink";
import { MobileMenu } from "@/components/header/MobileMenu";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

export default function Header() {
  const t = useTranslations("Header");
  const [isMounted, setIsMounted] = useState(false);
  const PRELOADER_DURATION = 2; // Must match actual preloader duration

  useEffect(() => {
    const timer = setTimeout(
      () => setIsMounted(true),
      PRELOADER_DURATION * 1000
    );
    return () => clearTimeout(timer);
  }, []);

  const links = [
    { href: "#services", label: t("services") },
    { href: "#pricing", label: t("pricing") },
    { href: "#gallery", label: t("showcase") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <motion.header
      initial={{ filter: "blur(8px)", opacity: 0 }}
      animate={isMounted ? { filter: "blur(0px)", opacity: 1 } : {}}
      transition={{ duration: 0.8, delay: PRELOADER_DURATION }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-40"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center space-x-8">
          {links.map((link, index) => (
            <NavLink
              key={link.href}
              href={link.href}
              delayOffset={index * 0.2} // Stagger effect
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <motion.div
          initial={{ filter: "blur(8px)", opacity: 0 }}
          animate={isMounted ? { filter: "blur(0px)", opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: PRELOADER_DURATION + 0.4 }}
          className="flex items-center space-x-4"
        >
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
        </motion.div>
      </div>
    </motion.header>
  );
}
