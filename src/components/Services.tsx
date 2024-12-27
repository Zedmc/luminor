"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { Home, Building, Calendar, Briefcase } from "lucide-react";
import ContactForm from "./ContactForm";

const services = [
  {
    icon: Briefcase,
    translationKey: "basic",
  },
  {
    icon: Home,
    translationKey: "residential",
  },
  {
    icon: Building,
    translationKey: "commercial",
  },
  {
    icon: Calendar,
    translationKey: "recurring",
  },
];

export default function Services() {
  const t = useTranslations("Services");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white via-gray-200 to-gray-200">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-6 md:px-12 lg:px-20"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          {t("title")}
          <div className="w-32 h-1 bg-[#B8860B] mx-auto mt-6"></div>
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 m-0 p-0 list-none">
          {services.map((service, index) => (
            <motion.li
              key={service.translationKey}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full"
            >
              <div className="block relative h-full rounded-xl overflow-hidden group transition-shadow duration-300 hover:shadow-md">
                <div className="relative w-full pt-[75%]">
                  <Image
                    loading="lazy"
                    src={`/images/interior-services-${index + 1}.jpg`}
                    alt={t(`${service.translationKey}.title`)}
                    fill
                    className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                    <div className="text-white text-2xl font-semibold group-hover:opacity-0 transition-opacity duration-300">
                      {t(`${service.translationKey}.title`)}
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-[1px] -left-[1px] -right-[1px] z-10 rounded-b-lg bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                  <div className="relative flex items-center gap-4 p-6 bg-white rounded-t-lg">
                    <div className="w-12 h-12 rounded-full flex-shrink-0 bg-[#B8860B] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">
                        {t(`${service.translationKey}.title`)}
                      </h3>
                      <span className="block text-base text-gray-700">
                        {t(`${service.translationKey}.description`)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <div className="text-center mt-10">
        <ContactForm label={t("cta")} />
      </div>
    </section>
  );
}
