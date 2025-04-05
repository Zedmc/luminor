"use client";
import { Button } from "@/components/ui/button";
import { Diamond, Home, Umbrella, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import Wrapper from "./Wrapper";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const features = [
    {
      icon: Diamond,
      title: "sparklingClean.title",
      description: "sparklingClean.description",
      // image: "/images/why-choose-us-1.jpg",
      image: "/images/parallax-3.jpg",
    },
    {
      icon: Home,
      title: "leadingTech.title",
      description: "leadingTech.description",
      image: "/images/why-choose-us-2.jpg",
    },
    {
      icon: Umbrella,
      title: "insured.title",
      description: "insured.description",
      image: "/images/why-choose-us-3.jpg",
    },
    {
      icon: Users,
      title: "reliableCrew.title",
      description: "reliableCrew.description",
      image: "/images/why-choose-us-4.jpg",
    },
  ];

  const handleLearnMoreClick = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper className="relative z-10 container max-w-6xl mx-auto lg:px-20 bg-white">
      <div className="relative grid gap-16 md:grid-cols-2">
        {/* Left Column - Sticky Content */}
        <div className="top-24 h-fit md:sticky">
          <h2 className="mt-4 mb-6 text-4xl font-semibold text-gray-900 md:text-5xl capitalize">
            {t("title")}
            <span className="block w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mt-4 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 md:text-xl">{t("subtitle")}</p>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Button asChild className="gap-2">
              <ContactForm label={t("cta")} />
            </Button>
            <Button
              variant="outline"
              className="gap-2 font-medium text-lg text-[#B8860B] border-[#B8860B] hover:bg-[#B8860B] hover:text-white duration-300"
              onClick={handleLearnMoreClick}
            >
              {t("learnMore")}
            </Button>
          </div>
        </div>

        {/* Right Column - Enhanced Feature Cards */}
        <div className="flex flex-col gap-12 md:gap-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative rounded-3xl border border-[#B8860B]/30 p-4 transition-all hover:border-[#B8860B]/50 shadow-md hover:shadow-lg overflow-hidden"
            >
              {/* Image with gradient overlay */}
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image
                  src={feature.image}
                  alt={t(feature.title)}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>

              {/* Floating icon container */}
              <div className="absolute top-8 right-8 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
                <feature.icon className="w-6 h-6 text-[#B8860B]" />
              </div>

              {/* Content */}
              <div className="p-6 bg-white/95 backdrop-blur-sm relative">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {t(feature.title)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.description)}
                </p>

                {/* Animated underline */}
                <div className="mt-4 w-12 h-0.5 bg-gradient-to-r from-[#B8860B] to-[#DAA520] transition-all duration-300 group-hover:w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
