"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/global/LanguageToggle";
import { Logo } from "@/components/header/Logo";
import { NavLink } from "@/components/header/NavLink";
import { MobileMenu } from "@/components/header/MobileMenu";
import ContactForm from "./ContactForm";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigationn-menu";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Header");
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll event to change header appearance
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Define the service links
  const serviceLinks = [
    {
      title: t("carpetCleaning"),
      href: "/services/carpet-cleaning",
      description: t("carpetCleaningDesc"),
    },
    {
      title: t("windowCleaning"),
      href: "/services/window-cleaning",
      description: t("windowCleaningDesc"),
    },
  ];

  // Regular navigation links
  const navLinks = [
    { href: "#luxury-showcase", label: t("showcase") },
    { href: "#contact", label: t("contact") },
  ];

  // All links for mobile menu
  const allLinks = [{ href: "#services", label: t("services") }, ...navLinks];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm"
      } border-b border-gray-200/30 sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div>
          <Logo />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {/* Services navigation menu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-medium text-[#B8860B] hover:text-[#B8860B] transition-colors bg-transparent hover:bg-white/40">
                  {t("services")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-white rounded-lg shadow-lg border border-gray-100">
                    {serviceLinks.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Regular nav links */}
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              <span className="text-gray-700 hover:text-[#B8860B] transition-colors font-medium text-lg">
                {link.label}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div>
            <Button
              size="sm"
              asChild
              className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B8860B] text-white shadow-md transition-all duration-300 px-6 py-2 rounded-full text-lg font-semibold
              md:h-12 md:px-8 md:py-4 border border-[#E6C88A]/20"
            >
              <ContactForm label={t("bookNow")} />
            </Button>
          </div>
          <div>
            <LanguageToggle />
          </div>
          <MobileMenu links={allLinks} />
        </div>
      </div>
    </motion.header>
  );
}

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  href: string;
}

const ListItem = React.forwardRef<React.ElementRef<"a">, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            href={href}
            {...props}
          >
            <div className="text-lg font-medium leading-none text-[#B8860B]">
              {title}
            </div>
            <p className="line-clamp-2 text-lg leading-snug text-gray-600">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
