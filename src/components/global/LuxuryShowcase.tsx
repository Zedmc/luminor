"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

export default function LuxuryShowcase() {
  const t = useTranslations("LuxuryShowcase");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const projects = [1, 2, 3, 4].map((i) => ({
    image: `/images/interior-${i}.jpg`,
    title: t(`image${i}Title`),
    description: t(`image${i}Description`),
    alt: t(`image${i}Alt`),
  }));

  return (
    <section id="gallery" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Enhanced Page Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          {t("title")}
          <div className="w-32 h-1 bg-[#B8860B] mx-auto mt-6"></div>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {t("subtitle")}
        </p>

        {/* Mobile Grid with Accordion Effect */}
        <div className="md:hidden grid grid-cols-2 gap-3 h-[600px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative rounded-xl overflow-hidden",
                "hover:cursor-pointer",
                activeIndex === index ? "col-span-2 row-span-2" : "col-span-1"
              )}
              initial={false}
              animate={{
                opacity:
                  activeIndex !== null && activeIndex !== index ? 0.7 : 1,
              }}
              transition={{ type: "spring", damping: 25 }}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <h3 className="text-lg font-medium text-white truncate mb-1">
                  {project.title}
                </h3>
                {activeIndex === index && (
                  <motion.p
                    className="text-gray-300 max-w-[70%] text-sm md:text-base"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Accordion */}
        <div className="hidden md:flex h-[500px] gap-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative overflow-hidden rounded-xl",
                "hover:cursor-pointer"
              )}
              initial={false}
              animate={{
                width:
                  activeIndex === index
                    ? "60%"
                    : activeIndex !== null
                    ? "10%"
                    : "25%",
                opacity:
                  activeIndex !== null && activeIndex !== index ? 0.7 : 1,
              }}
              transition={{ type: "spring", damping: 25 }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index < 2}
              />

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <motion.h3
                  className="text-xl font-medium text-white truncate mb-2"
                  animate={{
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                {activeIndex === index && (
                  <motion.p
                    className="text-gray-300 max-w-[80%]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {project.description}
                  </motion.p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Dots (Desktop only) */}
        <div className="hidden md:flex justify-center mt-8 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-3 h-3 rounded-full bg-gray-300 transition-all duration-300",
                activeIndex === index && "bg-gray-600 w-6"
              )}
              onClick={() => setActiveIndex(index)}
              aria-label={`View project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
