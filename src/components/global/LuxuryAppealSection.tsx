"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import { Eye, Star, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function LuxuryAppealSection() {
  const t = useTranslations("LuxuryAppeal");
  const ref = useRef(null);
  const controls = useFadeInAnimation(ref);

  const benefits = [
    {
      icon: Eye,
      title: "visualAppeal",
      description: "visualAppealDesc",
    },
    {
      icon: Star,
      title: "perception",
      description: "perceptionDesc",
    },
    {
      icon: TrendingUp,
      title: "businessGrowth",
      description: "businessGrowthDesc",
    },
  ];

  return (
    <section className="relative py-16 md:py-16 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          loading="lazy"
          src="/images/luxury-facts.jpg"
          alt="Luxury Interior"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="object-cover w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      {/* Main content */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        className="relative z-20 container mx-auto px-6 sm:px-8 lg:px-12 text-white"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-4xl md:text-4xl  font-bold mb-6 text-center">
            {t("title")}
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-center max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6 sm:space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-center space-x-4 border border-[#2A3154] bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-xl"
                >
                  <div className="bg-white/10 p-3 rounded-full">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1">
                      {t(`benefits.${benefit.title}`)}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {t(`benefits.${benefit.description}`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex items-start justify-center"
            >
              <div className="border border-[#2A3154] bg-primary/80 backdrop-blur-lg text-white p-4 sm:p-6 rounded-2xl shadow-2xl transform hover:scale-105 transition-all ease-in-out">
                <p className="text-xl sm:text-4xl font-semibold">
                  {t("statistic")}
                </p>
                <p className="text-xs sm:text-sm opacity-90">
                  {t("statisticDesc")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
