"use client";
import {
  HomeIcon,
  WindIcon,
  SparklesIcon,
  ShowerHead,
  SprayCan,
  StarIcon,
  Clock,
  Award,
  Zap,
  Shield,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, ComponentType, SVGProps, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

// ServiceCard Props
type ServiceCardProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index: number;
};

// FeatureCard Props
type FeatureCardProps = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index: number;
};

// Redesigned ServiceCard Component
const ServiceCard: React.FC<ServiceCardProps> = ({
  Icon,
  title,
  description,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("Pricing");

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.2,
            duration: 0.5,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          p-6 rounded-2xl shadow-2xl 
          transition-all duration-500 relative h-[280px] overflow-hidden
          ${
            isHovered
              ? "bg-gradient-to-br from-[#14213D] to-[#0A0F1D]"
              : "bg-[#0A0F1D]"
          }
          border-2 ${isHovered ? "border-[#B8860B]" : "border-[#2A3154]"}
          transform ${isHovered ? "scale-105" : "scale-100"}
        `}
      >
        {/* Top Right Corner Decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div
            className={`
            absolute transform rotate-45 translate-x-8 -translate-y-8
            w-16 h-16 ${isHovered ? "bg-[#B8860B]" : "bg-[#2A3154]"}
            transition-all duration-500
          `}
          ></div>
        </div>

        <div className="flex items-center mb-6 relative z-20">
          <div
            className={`
            p-3 rounded-lg transition-all duration-300
            ${
              isHovered
                ? "bg-[#B8860B] text-white"
                : "bg-[#1A1F2D] text-[#B8860B]"
            }
          `}
          >
            <Icon className="w-8 h-8" />
          </div>
          <h4 className="text-2xl text-white ml-4">{title}</h4>
        </div>
        <p className="text-[#A0AEC0] text-lg relative z-20">{description}</p>

        {/* Learn More Link */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-6 right-6"
            >
              <span className="text-[#B8860B] flex items-center font-medium">
                {t("learnMore")} <CheckCircle className="ml-2 w-5 h-5" />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Redesigned FeatureCard Component
const FeatureCard: React.FC<FeatureCardProps> = ({
  Icon,
  title,
  description,
  index,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.125,
            duration: 0.5,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ scale: 1.05 }}
      className="flex items-start p-5 bg-[#14213D] text-white rounded-xl shadow-xl transition-transform border border-[#2A3154] hover:border-[#B8860B]"
    >
      <div className="bg-[#0A0F1D] p-3 rounded-lg mr-4 border border-[#2A3154]">
        <Icon className="w-6 h-6 text-[#B8860B]" />
      </div>
      <div>
        <h4 className="text-xl mb-2">{title}</h4>
        <p className="text-sm text-[#A0AEC0]">{description}</p>
      </div>
    </motion.div>
  );
};

// Pricing Component
export default function Pricing() {
  const t = useTranslations("Pricing");

  const services: Omit<ServiceCardProps, "index">[] = [
    {
      Icon: HomeIcon,
      title: t("services.residentialCleaning.title"),
      description: t("services.residentialCleaning.description"),
    },
    {
      Icon: WindIcon,
      title: t("services.deepCleaning.title"),
      description: t("services.deepCleaning.description"),
    },
    {
      Icon: SparklesIcon,
      title: t("services.regularMaintenance.title"),
      description: t("services.regularMaintenance.description"),
    },
    {
      Icon: ShowerHead,
      title: t("services.bathroomCleaning.title"),
      description: t("services.bathroomCleaning.description"),
    },
    {
      Icon: SprayCan,
      title: t("services.officeCleaning.title"),
      description: t("services.officeCleaning.description"),
    },
    {
      Icon: StarIcon,
      title: t("services.specializedCleaning.title"),
      description: t("services.specializedCleaning.description"),
    },
  ];

  const features: Omit<FeatureCardProps, "index">[] = [
    {
      Icon: Clock,
      title: t("features.availableAnytime.title"),
      description: t("features.availableAnytime.description"),
    },
    {
      Icon: Award,
      title: t("features.premiumQuality.title"),
      description: t("features.premiumQuality.description"),
    },
    {
      Icon: Zap,
      title: t("features.fastEfficient.title"),
      description: t("features.fastEfficient.description"),
    },
    {
      Icon: Shield,
      title: t("features.reliableService.title"),
      description: t("features.reliableService.description"),
    },
  ];

  const quoteBoxRef = useRef(null);
  const isQuoteBoxInView = useInView(quoteBoxRef, {
    once: true,
    margin: "-50px",
  });

  return (
    <section
      id="pricing"
      className="py-16 bg-gradient-to-b from-[#050914] to-[#0A0F1D] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#B8860B] opacity-5 blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#2A3154] opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <span className="inline-block px-4 py-1 rounded-full text-[#B8860B] bg-[#B8860B]/10 border border-[#B8860B]/20 text-sm font-medium mb-4">
            PREMIUM SERVICES
          </span> */}
          <h2 className="text-6xl font-bold text-white mb-6">{t("title")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mx-auto mb-6" />

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl text-balance text-[#A0AEC0] leading-relaxed">
              {t("description")}
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <motion.div
          ref={quoteBoxRef}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={isQuoteBoxInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center mt-24"
        >
          <div className="relative bg-gradient-to-br from-[#14213D] to-[#0A0F1D] p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#2A3154] overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#B8860B] opacity-10 blur-3xl rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#2A3154] opacity-20 blur-3xl rounded-full"></div>

            {/* Quote badge */}
            <div className="inline-block py-2 px-6 bg-gradient-to-r from-[#B8860B] to-[#DAA520] rounded-full shadow-lg mb-6">
              <span className="text-black font-bold text-sm">
                {t("freeQuote")}
              </span>
            </div>

            <h3 className="text-4xl font-bold mb-8 text-white">
              {t("customQuote")}
            </h3>
            <p className="mb-6 text-balance text-[#A0AEC0] text-xl leading-relaxed max-w-2xl mx-auto">
              {t("customQuoteDescription")}
            </p>

            {/* Highlighted free quote message */}
            {/* <div className="bg-[#0A0F1D] p-6 rounded-xl border border-[#B8860B]/30 mb-10 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <p className="text-balance text-white text-xl leading-relaxed font-medium">
                <span className="text-[#B8860B]">
                  FREE, no-obligation quote
                </span>{" "}
                tailored to your specific window situation
              </p>
            </div> */}

            <Link href="#contact">
              <Button
                size="default"
                className="bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105 px-8 py-6 shadow-lg"
              >
                {t("contactUs")}
              </Button>
            </Link>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
