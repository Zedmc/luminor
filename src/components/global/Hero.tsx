"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Hero() {
  const t = useTranslations("Hero");
  const ref = useRef(null);
  const [isPreloaderDone, setIsPreloaderDone] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const PRELOADER_DURATION = 1.85;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderDone(true);
    }, PRELOADER_DURATION * 1000);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: PRELOADER_DURATION,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative bg-primary text-white py-28 md:py-52">
      {/* Skeleton Loader */}
      {!imageLoaded && (
        <div className="absolute inset-0 z-10 bg-gray-300 animate-pulse" />
      )}

      <Image
        src="/images/luxury-home.jpg"
        alt="Luxury home image"
        fill
        sizes="(min-width: 1120px) 100vw, (min-width: 780px) calc(20.94vw + 870px), (min-width: 680px) 100vw, (min-width: 500px) 689px, (min-width: 420px) 734px, calc(-58vw + 960px)"
        quality={100}
        style={{ objectFit: "cover" }}
        className="absolute inset-0 transition-transform duration-300 hover:scale-105"
        onLoadingComplete={() => setImageLoaded(true)}
      />

      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isPreloaderDone ? "visible" : "hidden"}
        className="relative container mx-auto px-4 z-10"
      >
        <div className="text-center  mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-2xl text-balance md:text-6xl font-bold mb-6"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-balance mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>

          <motion.div variants={itemVariants}>
            <ContactForm label={t("cta")} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
