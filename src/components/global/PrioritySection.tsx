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
      color: "from-amber-500 to-yellow-300",
    },
    {
      id: "environment" as Priority,
      icon: Leaf,
      label: "environment",
      color: "from-emerald-500 to-teal-300",
    },
    {
      id: "communication" as Priority,
      icon: MessageCircle,
      label: "communication",
      color: "from-blue-500 to-cyan-300",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Darker background with stronger overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/luxury-interior.jpg"
          alt="Luxury interior background"
          fill
          priority
          quality={100}
          className="object-cover w-full h-full"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/80 z-10" />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
        className="relative z-20 container mx-auto px-4 sm:px-6 text-white"
      >
        <div className="max-w-4xl mx-auto px-4">
          {/* Title with solid white color */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              {t("title")}
            </h2>
            <div className="w-24 h-1 bg-[#B8860B] mx-auto mb-6 rounded-full" />
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          {/* Interactive priority cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16 text-center">
            {priorities.map((priority) => (
              <motion.div
                key={priority.id}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex justify-center"
              >
                <button
                  onClick={() => setActivePriority(priority.id)}
                  className={cn(
                    "flex flex-col items-center justify-center transition-all duration-500 w-full",
                    "group rounded-xl p-8 backdrop-blur-sm",
                    "bg-white/5 border border-white/10",
                    "hover:bg-white/10 hover:border-white/20",
                    activePriority === priority.id
                      ? `bg-gradient-to-br ${priority.color}/20 border-transparent shadow-xl`
                      : "opacity-90"
                  )}
                >
                  <div
                    className={cn(
                      "p-4 rounded-full mb-6 transition-all duration-500",
                      "group-hover:shadow-lg",
                      activePriority === priority.id
                        ? `bg-gradient-to-br ${priority.color} shadow-lg`
                        : "bg-white/10"
                    )}
                  >
                    <priority.icon
                      className={cn(
                        "w-8 h-8 transition-all duration-500",
                        activePriority === priority.id
                          ? "text-white scale-110"
                          : "text-white/80"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "uppercase text-sm font-medium tracking-wider",
                      "transition-all duration-500",
                      activePriority === priority.id
                        ? "text-white"
                        : "text-white/80"
                    )}
                  >
                    {t(`labels.${priority.label}`)}
                  </span>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Left-aligned content panel */}
          <motion.div
            key={activePriority}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn(
              "text-lg leading-relaxed px-6 py-8 rounded-xl",
              "backdrop-blur-sm bg-white/5 border border-white/10",
              "max-w-3xl mx-auto text-left" // Changed to text-left here
            )}
          >
            <div className="flex items-center mb-4">
              <div
                className={cn(
                  "w-3 h-3 rounded-full mr-3",
                  activePriority === "customers" && "bg-amber-400",
                  activePriority === "environment" && "bg-emerald-400",
                  activePriority === "communication" && "bg-blue-400"
                )}
              />
              <h3 className="text-xl font-medium text-white">
                {t(`labels.${activePriority}`)}
              </h3>
            </div>
            <p className="text-white/90">{t(`content.${activePriority}`)}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
