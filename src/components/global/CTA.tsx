"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function CTA() {
  const t = useTranslations("WindowCTA");

  const handleLearnMoreClick = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:w-[80%] mx-auto bg-inherit overflow-hidden shadow-sm p-8 md:p-16">
      {/* Text Section */}
      <div className="flex-1 p-6 md:p-12 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
          {t("title")}
          <span className="block w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mt-4 rounded-full mx-auto md:mx-0" />
        </h2>
        <p className="text-lg text-gray-600 mb-8">{t("description")}</p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <Button
            asChild
            className="gap-2 text-white bg-[#B8860B] hover:bg-[#DAA520] transition-colors duration-300 rounded-full"
          >
            <ContactForm label={t("cta")} />
          </Button>
          <Button
            variant="outline"
            className="gap-2 text-lg font-medium capitalize text-[#B8860B] border-[#B8860B] hover:bg-[#B8860B] hover:text-white duration-300 rounded-full"
            onClick={handleLearnMoreClick}
          >
            {t("learnMore")}
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative min-h-[300px] md:min-h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white from-20% md:from-5% via-gray-50/50 via-60% to-transparent z-10" />
        <Image
          src="/images/interior-3.jpg"
          alt="Platform showcase"
          fill
          className="object-cover bg-black rounded-bl-3xl rounded-br-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-none md:rounded-tl-none"
        />
      </div>
    </div>
  );
}
