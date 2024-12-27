"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import ContactForm from "./ContactForm";

export default function LuxuryShowcase() {
  const t = useTranslations("LuxuryShowcase");
  const ref = useRef(null);
  const controls = useFadeInAnimation(ref);

  return (
    <section
      id="luxury-showcase"
      className="py-16 bg-gray-100 relative overflow-hidden"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative h-96 overflow-hidden rounded-2xl shadow-2xl group"
            >
              <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-110">
                <Image
                  loading="lazy"
                  src={`/images/luxury-interior-${index}.jpg`}
                  alt={t(`image${index}Alt`)}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute -bottom-14 left-0 right-0 p-6 transform translate-y-6 group-hover:-translate-y-14 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {t(`image${index}Title`)}
                </h3>
                <p className="text-gray-300 w-4/5 text-pretty opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t(`image${index}Description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="text-center mt-10">
        <ContactForm label={t("cta")} />
      </div>
    </section>
  );
}
