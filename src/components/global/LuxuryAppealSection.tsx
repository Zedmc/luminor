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
    <section className="relative py-24 overflow-hidden">
      {/* Background image with gradient overlay */}
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10" />
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
        transition={{ duration: 0.7 }}
        className="relative z-20 container mx-auto px-6 sm:px-8 lg:px-12 text-white"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mx-auto mb-8" />
          <p className="text-lg md:text-xl mb-12 text-center max-w-2xl mx-auto text-gray-200">
            {t("subtitle")}
          </p>

          {/* Statistics box - Now before the benefit cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-16 flex justify-center"
          >
            <div className="backdrop-blur-lg bg-gradient-to-br from-[#B8860B]/30 to-[#DAA520]/20 border border-[#DAA520]/30 p-8 rounded-2xl shadow-2xl max-w-md">
              <p className="text-4xl md:text-5xl font-semibold mb-3 text-center">
                {t("statistic")}
              </p>
              <div className="w-16 h-0.5 bg-[#B8860B] mx-auto mb-4" />
              <p className="text-md opacity-90 text-center">
                {t("statisticDesc")}
              </p>
            </div>
          </motion.div>

          {/* Benefits cards */}
          <div className="grid gap-8 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                className="group"
              >
                <div className="h-full backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-[#DAA520]/20 hover:border-[#DAA520]/30">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-gradient-to-br from-[#B8860B] to-[#DAA520] p-3 rounded-xl shadow-lg">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="h-12 w-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-light text-[#DAA520]">
                          0{index + 1}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#DAA520] transition-colors duration-300">
                      {t(`benefits.${benefit.title}`)}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white/90 transition-colors duration-300">
                      {t(`benefits.${benefit.description}`)}
                    </p>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
