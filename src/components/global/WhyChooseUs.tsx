"use client";
import { Button } from "@/components/ui/button";
import { Diamond, Home, Umbrella, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

export default function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const features = [
    {
      icon: Diamond,
      title: "sparklingClean.title",
      description: "sparklingClean.description",
      image: "/images/why-choose-us-1.jpg",
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
      "description": "reliableCrew.description",
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
    <section className="py-24 bg-white">
      <div className="container max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="relative grid gap-16 md:grid-cols-2">
          {/* Left Column - Sticky Content */}
          <div className="top-24 h-fit md:sticky">
            <h2 className="mt-4 mb-6 text-4xl font-semibold text-gray-900 md:text-5xl">
              {t("title")}
              <span className="block w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mt-4 rounded-full" />
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">{t("subtitle")}</p>

            <div className="mt-8 flex flex-col gap-4 lg:flex-row">
              <Button asChild size="lg" className="gap-2">
                <ContactForm label={t("cta")} />
              </Button>
              <Button
                variant="outline"
                className="gap-2 text-lg text-[#B8860B] border-[#B8860B] hover:bg-[#B8860B] hover:text-white duration-300"
                onClick={handleLearnMoreClick}
              >
                {t("learnMore")}
              </Button>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="flex flex-col gap-12 md:gap-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-xl border border-gray-200 p-2 transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={t(feature.title)}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <feature.icon className="w-8 h-8 text-[#B8860B]" />
                    <h3 className="text-2xl font-semibold text-gray-900">
                      {t(feature.title)}
                    </h3>
                  </div>
                  <p className="text-gray-600">{t(feature.description)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
