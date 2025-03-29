"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import { Diamond, Home, Umbrella, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";


export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");
  const ref = useRef(null);
  const controls = useFadeInAnimation(ref);

  const features = [
    {
      icon: Diamond,
      title: "sparklingClean.title",
      description: "sparklingClean.description",
    },
    {
      icon: Home,
      title: "leadingTech.title",
      description: "leadingTech.description",
    },
    {
      icon: Umbrella,
      title: "insured.title",
      description: "insured.description",
    },
    {
      icon: Users,
      title: "reliableCrew.title",
      description: "reliableCrew.description",
    },
  ];

  return (
    <section className="py-16 bg-[#050914]  text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 md:px-12 lg:px-20"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            {t("title")}
            <div className="w-32 h-1 bg-[#B8860B] mx-auto mt-6"></div>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 h-full bg-[#1C2833] shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="w-full min-h-60 relative">
                <Image
                  loading="lazy"
                  src={`/images/why-choose-us-${index + 1}.jpg`}
                  alt={`Feature ${index + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  className="object-cover object-center"
                  quality={100}
                />
              </div>
              {/* Content */}
              <div className="w-full p-6 space-y-3 text-sm md:text-base">
                <feature.icon className="w-8 h-8 text-[#B8860B]" />
                <h3 className="text-xl leading-tight font-semibold mb-2 text-white">
                  {t(feature.title)}
                </h3>
                <p className="text-sm text-gray-300">
                  {t(feature.description)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="text-center mt-10">
                  <ContactForm label={t("cta")} />
                </div>
        </div>
      </motion.div>
    </section>
  );
}
