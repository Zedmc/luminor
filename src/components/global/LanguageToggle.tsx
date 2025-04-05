"use client";

import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { Spinner } from "@/components/ui/spinner";

import { Globe } from "lucide-react";

export function LanguageToggle() {
  const locale = useLocale() as Locale;
  const [currentLocale, setCurrentLocale] = useState<Locale>(locale);
  const [isPending, startTransition] = useTransition();

  const t = useTranslations("LocaleSwitcher");
  const toggleLocale = () => {
    const newLocale = currentLocale === "en" ? "fr" : "en";
    startTransition(() => {
      setUserLocale(newLocale);
      setCurrentLocale(newLocale);
    });
  };
  return (
    <Button
      size="default"
      variant="outline"
      onClick={toggleLocale}
      disabled={isPending}
      className="flex items-center justify-center   text-[#B8860B] border-[#B8860B] hover:bg-[#B8860B] hover:text-white duration-300"
    >
      {isPending ? (
        <Spinner size="large" />
      ) : (
        <>
          <Globe className="hidden md:block w-6 h-6" />
          <span className=" text-base  font-medium uppercase">
            {t(currentLocale)}
          </span>
          <span className="sr-only">Toggle language</span>
          <span className="sr-only">Changement de langues</span>
        </>
      )}
    </Button>
  );
}
