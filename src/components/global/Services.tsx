"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Home,
  Building,
  Calendar,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Services() {
  const t = useTranslations("Services");
  type ServiceKey = "residential" | "commercial" | "recurring" | "specialized";
  const [activeService, setActiveService] = useState<ServiceKey>("residential");

  const services = {
    residential: {
      image: `/images/services-1.jpg`, // Restored image source
      alt: t("residential.imageAlt"),
      icon: <Home className="size-5" />, // Increased icon size
    },
    commercial: {
      image: `/images/services-2.jpg`, // Restored image source
      alt: t("commercial.imageAlt"),
      icon: <Building className="size-5" />, // Increased icon size
    },
    recurring: {
      image: `/images/services-3.jpg`, // Restored image source
      alt: t("recurring.imageAlt"),
      icon: <Calendar className="size-5" />, // Increased icon size
    },
    specialized: {
      image: `/images/services-4.jpg`, // Restored image source
      alt: t("specialized.imageAlt"),
      icon: <Sparkles className="size-5" />, // Increased icon size
    },
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="mx-auto max-w-5xl space-y-10 md:space-y-16 lg:space-y-20">
        <div className="relative z-10 mx-auto max-w-3xl space-y-8 text-center">
          <h2 className="text-balance text-4xl font-semibold text-gray-900 lg:text-5xl">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mx-auto mb-6" />{" "}
          {/* Gold Bar */}
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg-px-0">
          <Accordion
            type="single"
            value={activeService}
            onValueChange={(value) => setActiveService(value as ServiceKey)}
            className="w-full space-y-6"
          >
            <AccordionItem value="residential">
              <AccordionTrigger>
                <div className="flex items-center gap-4 text-xl font-medium text-gray-900">
                  {" "}
                  {/* Increased font size */}
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#F8F4E8] text-[#B8860B]">
                    {services.residential.icon}
                  </div>
                  {t("residential.title")}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700 pl-14">
                {" "}
                {/* Increased text color */}
                {t("residential.description")}
                <ul className="mt-5 space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="size-5 mt-1 text-[#B8860B] flex-shrink-0" />{" "}
                      {/* Increased icon size */}
                      <span className="text-lg text-gray-700">
                        {t(`residential.benefit${item}`)}
                      </span>{" "}
                      {/* Increased text color */}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="commercial">
              <AccordionTrigger>
                <div className="flex items-center gap-4 text-xl font-medium text-gray-900">
                  {" "}
                  {/* Increased font size */}
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#F8F4E8] text-[#B8860B]">
                    {services.commercial.icon}
                  </div>
                  {t("commercial.title")}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700 pl-14">
                {" "}
                {/* Increased text color */}
                {t("commercial.description")}
                <ul className="mt-5 space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="size-5 mt-1 text-[#B8860B] flex-shrink-0" />{" "}
                      {/* Increased icon size */}
                      <span className="text-lg text-gray-700">
                        {t(`commercial.benefit${item}`)}
                      </span>{" "}
                      {/* Increased text color */}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="recurring">
              <AccordionTrigger>
                <div className="flex items-center gap-4 text-xl font-medium text-gray-900">
                  {" "}
                  {/* Increased font size */}
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#F8F4E8] text-[#B8860B]">
                    {services.recurring.icon}
                  </div>
                  {t("recurring.title")}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700 pl-14">
                {" "}
                {/* Increased text color */}
                {t("recurring.description")}
                <ul className="mt-5 space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="size-5 mt-1 text-[#B8860B] flex-shrink-0" />{" "}
                      {/* Increased icon size */}
                      <span className="text-lg text-gray-700">
                        {t(`recurring.benefit${item}`)}
                      </span>{" "}
                      {/* Increased text color */}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="specialized">
              <AccordionTrigger>
                <div className="flex items-center gap-4 text-xl font-medium text-gray-900">
                  {" "}
                  {/* Increased font size */}
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#F8F4E8] text-[#B8860B]">
                    {services.specialized.icon}
                  </div>
                  {t("specialized.title")}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-700 pl-14">
                {" "}
                {/* Increased text color */}
                {t("specialized.description")}
                <ul className="mt-5 space-y-3">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="size-5 mt-1 text-[#B8860B] flex-shrink-0" />{" "}
                      {/* Increased icon size */}
                      <span className="text-lg text-gray-700">
                        {t(`specialized.benefit${item}`)}
                      </span>{" "}
                      {/* Increased text color */}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="relative flex overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-lg">
            <div className="aspect-[4/3] relative w-full rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="size-full"
                >
                  <Image
                    src={services[activeService].image}
                    alt={services[activeService].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
