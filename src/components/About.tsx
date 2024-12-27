"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function About() {
  const t = useTranslations("About");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-t from-white  to-gray-200 relative overflow-hidden"
    >
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
        <p className="text-center text-2xl mb-8 text-gray-700">
          {t("subtitle")}
        </p>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t("description")}
        </p>
        <div className="text-center">
          {/* <Link href="#contact" passHref>
            <Button
              size="lg"
              className="bg-[#B8860B] text-white shadow-lg px-8 py-4 text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#DAA520]"
            >
              {t("learnMore")}
            </Button>
          </Link> */}
          <ContactForm label={t("cta")} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          {[1, 2, 3, 4].map((index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, delay: index * 0.3 }}
              className="relative h-96 overflow-hidden rounded-2xl shadow-2xl group"
            >
              <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-110">
                <Image
                  loading="lazy"
                  src={`/images/interior-about-${index}.jpg`}
                  alt={t(`image${index}Alt`)}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute -bottom-8 left-0 right-0 p-6 transform translate-y-6 group-hover:-translate-y-8 transition-transform duration-300">
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
