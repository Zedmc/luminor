"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
import { Users2, Leaf, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Priority = "customers" | "environment" | "communication";

export default function PrioritySection() {
  const t = useTranslations("Priority");
  const ref = useRef(null);
  const controls = useFadeInAnimation(ref);
  const [activePriority, setActivePriority] = useState<Priority>("customers");

  const priorities = [
    {
      id: "customers" as Priority,
      icon: Users2,
      label: "customers",
    },
    {
      id: "environment" as Priority,
      icon: Leaf,
      label: "environment",
    },
    {
      id: "communication" as Priority,
      icon: MessageCircle,
      label: "communication",
    },
  ];

  return (
    <section className="relative py-16">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          loading="lazy"
          src="/images/luxury-interior.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="object-cover w-full h-full"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/70 z-10" />{" "}
        {/* Dark overlay */}
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
        className="relative z-20 container mx-auto px-6 md:px-12 text-white"
      >
        <div className="max-w-4xl mx-auto text-center px-6 sm:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">{t("title")}</h2>
          <p className="text-lg md:text-xl mb-14">{t("subtitle")}</p>

          {/* Priority buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center items-center mb-14">
            {priorities.map((priority) => (
              <button
                key={priority.id}
                onClick={() => setActivePriority(priority.id)}
                className={cn(
                  "flex flex-col items-center justify-center transition-all duration-300",
                  activePriority === priority.id
                    ? "transform scale-110 bg-white/10 shadow-lg"
                    : "opacity-70",
                  "w-full sm:w-32 md:w-36 p-6 rounded-lg"
                )}
              >
                <priority.icon className="w-10 sm:w-14 h-10 sm:h-14 mb-4" />
                <span className="uppercase text-base sm:text-base tracking-wide">
                  {t(`labels.${priority.label}`)}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activePriority}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg text-balance leading-relaxed"
            style={{ minHeight: "120px" }} // Prevents height changes on content switch
          >
            {t(`content.${activePriority}`)}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
