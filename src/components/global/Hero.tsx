"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Hero() {
  const t = useTranslations("Hero");
  const ref = useRef(null);
  const controls = useFadeInAnimation(ref);

  return (
    <section className="relative bg-primary text-white py-28 md:py-52">
      {/* Image as background, covering the entire section */}
      <Image
        src="/images/luxury-home.jpg"
        alt="Luxury home image"
        fill
        // priority // If this is an above-the-fold image
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizing
        quality={100} // Set image quality for better clarity
        style={{ objectFit: "cover" }}
        className="absolute inset-0 transition-transform duration-300 hover:scale-105"
      />

      {/* Overlay to darken the image behind the text */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content above the image */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5 }}
        className="relative container mx-auto px-4 z-10"
      >
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl text-balance md:text-6xl font-bold mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-balance mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
          <ContactForm label={t("cta")} />
        </div>
      </motion.div>
    </section>
  );
}
