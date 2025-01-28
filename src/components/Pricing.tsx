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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, ComponentType, SVGProps } from "react";
import { motion, useInView } from "framer-motion";
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

// ServiceCard Component with glass effect and luxury styling
const ServiceCard: React.FC<ServiceCardProps> = ({
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
            delay: index * 0.2,
            duration: 0.5,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      // whileHover={{ scale: 1.03 }}
      className="w-full h-full"
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div
        className={`
          bg-[#0A0F1D] p-8 rounded-2xl shadow-2xl 
          transition-all duration-500 relative h-[280px] overflow-hidden group
          border border-[#2A3154]
        `}
      >
        <div
          className={`
            absolute -top-[100px] -right-[100px] rounded-2xl z-10 
            w-48 h-48 transition-all duration-500 ease-in-out
            bg-gradient-to-br from-[#2A3154] to-[#4A5174]
            group-hover:w-full group-hover:h-full group-hover:top-0 group-hover:right-0 
          `}
        ></div>
        <div className="flex items-center mb-6 relative z-20">
          <Icon className="w-12 h-12 text-[#B8860B] mr-4 transition-colors duration-500" />
          <h4 className="text-2xl text-white">{title}</h4>
        </div>
        <p className="text-[#A0AEC0] text-lg relative z-20 transition-colors duration-500 group-hover:text-white">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

// FeatureCard Component with glass effect and luxury styling
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
      className="flex flex-col items-center p-5 bg-[#0A0F1D] text-white rounded-xl shadow-xl transition-transform border border-[#2A3154]"
    >
      <Icon className="w-12 h-12 mb-4 text-[#B8860B]" />
      <h4 className="text-xl mb-2">{title}</h4>
      <p className="text-sm text-center text-balance text-[#A0AEC0]">
        {description}
      </p>
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

  return (
    <section
      id="pricing"
      className="py-16 bg-gradient-to-b from-[#050914] to-[#0A0F1D] relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <h2 className="text-6xl font-bold text-center mb-16 text-white">
          {t("title")}
        </h2>
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-xl text-balance text-[#A0AEC0] leading-relaxed max-w-lg mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>

        <div className=" mx-auto text-center mt-20 ">
          <div className="bg-[#0A0F1D] p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-[#2A3154]">
            <h3 className="text-4xl font-bold mb-8 text-white">
              {t("customQuote")}
            </h3>
            <p className="mb-10 text-balance text-[#A0AEC0] text-xl leading-relaxed max-w-lg mx-auto">
              {t("customQuoteDescription")}
            </p>
            <Link href="#contact">
              <Button
                size="lg"
                className="bg-[#B8860B] text-white text-lg rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:bg-[#DAA520] shadow-lg"
              >
                {t("contactUs")}
              </Button>
            </Link>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
