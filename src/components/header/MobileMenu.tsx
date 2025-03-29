"use client";

import { useState } from "react";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "./Logo";
import { NavLink } from "./NavLink";
import { useTranslations } from "next-intl";

interface MobileMenuProps {
  links: { href: string; label: string }[];
}

export function MobileMenu({ links }: MobileMenuProps) {
  const t = useTranslations("Header");
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Define the service links similar to the Header component
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

  const closeMenu = () => {
    setOpen(false);
    setServicesOpen(false);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  // Custom NavLink for anchor handling
  const CustomNavLink = ({
    href,
    children,
    className,
  }: {
    href: string;
    children: React.ReactNode;
    className?: string;
  }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (href.startsWith("#")) {
        e.preventDefault();

        if (
          window.location.pathname === "/" ||
          window.location.pathname === ""
        ) {
          closeMenu();
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          window.location.href = "/" + href;
        }
      }

      closeMenu();
    };

    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  };

  // Filter out the services link since we'll handle it separately
  const filteredLinks = links.filter((link) => link.label !== t("services"));

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full hover:bg-white/40 transition-colors"
          >
            <Menu className="!h-7 !w-7 text-[#B8860B] hover:text-[#B8860B]" />
            <span className="sr-only">Open Menu</span>
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] bg-gradient-to-b from-white to-white/95 backdrop-blur-sm border-l border-gray-200/30 shadow-lg"
      >
        <SheetHeader>
          <SheetTitle>
            <div>
              <Logo />
            </div>
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-6 mt-12">
          {/* Services dropdown in mobile menu */}
          <div>
            <button
              onClick={toggleServices}
              className="w-full text-xl font-medium text-[#B8860B] transition-all duration-300 flex items-center justify-between py-2 border-b border-gray-100"
            >
              {t("services")}
              {servicesOpen ? (
                <ChevronUp className="h-5 w-5 text-[#B8860B]" />
              ) : (
                <ChevronDown className="h-5 w-5 text-[#B8860B]" />
              )}
            </button>

            {servicesOpen && (
              <div className="pl-4 py-2 mt-2 space-y-4 bg-white/80 rounded-lg">
                {serviceLinks.map((service) => (
                  <div
                    key={service.title}
                    className="border-b border-gray-100 pb-2"
                  >
                    <NavLink
                      href={service.href}
                      onClick={closeMenu}
                      className="block"
                    >
                      <div className="text-lg font-medium text-[#B8860B]">
                        {service.title}
                      </div>
                      <p className="text-base text-gray-600 mt-1">
                        {service.description}
                      </p>
                    </NavLink>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Regular nav links */}
          {filteredLinks.map((link) => (
            <div key={link.href}>
              <CustomNavLink
                href={link.href}
                className="text-xl font-medium text-[#B8860B] hover:text-[#B8860B] transition-all duration-300 hover:pl-2 flex items-center py-2 border-b border-gray-100"
              >
                {link.label}
              </CustomNavLink>
            </div>
          ))}
        </nav>
        <div className="absolute bottom-8 left-6 right-6">
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-lg p-4 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-500 italic">
              Experience premium cleaning services tailored to your needs.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
