"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import {
  Home,
  Building,
  Calendar,
  Briefcase,
  Check,
  Star,
  ShieldCheck,
} from "lucide-react";
import ContactForm from "@/components/global/ContactForm";
export default function ServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = params.service; // 'carpet-cleaning' or 'window-cleaning'
  const t = useTranslations();
  const headerRef = useRef(null);
  const featuresRef = useRef(null);
  const processRef = useRef(null);
  const benefitsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isBenefitsInView = useInView(benefitsRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  // Determine content based on service
  const isCarpet = service === "carpet-cleaning";
  // These keys now directly reference the translation strings we need
  const carpetCleaningTitle = t("Services.carpetCleaning");
  const windowCleaningTitle = t("Services.windowCleaning");
  const carpetCleaningDesc = t("Services.carpetCleaningDesc");
  const windowCleaningDesc = t("Services.windowCleaningDesc");
  // Get the service title and description based on the current service
  const serviceTitle = isCarpet ? carpetCleaningTitle : windowCleaningTitle;
  const serviceDesc = isCarpet ? carpetCleaningDesc : windowCleaningDesc;
  // Features for each service - now properly using the service type
  const features = isCarpet
    ? [
        {
          icon: ShieldCheck,
          title: t("Services.carpet.features.deepCleaning.title"),
          description: t("Services.carpet.features.deepCleaning.description"),
        },
        {
          icon: Star,
          title: t("Services.carpet.features.stainRemoval.title"),
          description: t("Services.carpet.features.stainRemoval.description"),
        },
        {
          icon: Check,
          title: t("Services.carpet.features.fastDrying.title"),
          description: t("Services.carpet.features.fastDrying.description"),
        },
      ]
    : [
        {
          icon: ShieldCheck,
          title: t("Services.window.features.streakFree.title"),
          description: t("Services.window.features.streakFree.description"),
        },
        {
          icon: Star,
          title: t("Services.window.features.complete.title"),
          description: t("Services.window.features.complete.description"),
        },
        {
          icon: Check,
          title: t("Services.window.features.hardWater.title"),
          description: t("Services.window.features.hardWater.description"),
        },
      ];
  // Process steps for each service
  const process = isCarpet
    ? [
        {
          number: "01",
          title: t("Services.carpet.process.inspection.title"),
          description: t("Services.carpet.process.inspection.description"),
        },
        {
          number: "02",
          title: t("Services.carpet.process.pretreatment.title"),
          description: t("Services.carpet.process.pretreatment.description"),
        },
        {
          number: "03",
          title: t("Services.carpet.process.extraction.title"),
          description: t("Services.carpet.process.extraction.description"),
        },
        {
          number: "04",
          title: t("Services.carpet.process.finishing.title"),
          description: t("Services.carpet.process.finishing.description"),
        },
      ]
    : [
        {
          number: "01",
          title: t("Services.window.process.assessment.title"),
          description: t("Services.window.process.assessment.description"),
        },
        {
          number: "02",
          title: t("Services.window.process.preparation.title"),
          description: t("Services.window.process.preparation.description"),
        },
        {
          number: "03",
          title: t("Services.window.process.cleaning.title"),
          description: t("Services.window.process.cleaning.description"),
        },
        {
          number: "04",
          title: t("Services.window.process.polishing.title"),
          description: t("Services.window.process.polishing.description"),
        },
      ];
  // Benefits specific to each service
  const benefits = isCarpet
    ? [
        {
          title: t("Services.carpet.benefits.health.title"),
          description: t("Services.carpet.benefits.health.description"),
        },
        {
          title: t("Services.carpet.benefits.lifespan.title"),
          description: t("Services.carpet.benefits.lifespan.description"),
        },
        {
          title: t("Services.carpet.benefits.appearance.title"),
          description: t("Services.carpet.benefits.appearance.description"),
        },
      ]
    : [
        {
          title: t("Services.window.benefits.light.title"),
          description: t("Services.window.benefits.light.description"),
        },
        {
          title: t("Services.window.benefits.preservation.title"),
          description: t("Services.window.benefits.preservation.description"),
        },
        {
          title: t("Services.window.benefits.appearance.title"),
          description: t("Services.window.benefits.appearance.description"),
        },
      ];
  // Testimonials for each service
  const testimonials = isCarpet
    ? [
        {
          text: t("Services.carpet.testimonials.quote1"),
          client: "Sarah Johnson",
          location: "Montreal, QC",
        },
        {
          text: t("Services.carpet.testimonials.quote2"),
          client: "Michael Chen",
          location: "Laval, QC",
        },
        {
          text: t("Services.carpet.testimonials.quote3"),
          client: "Emily Tremblay",
          location: "Brossard, QC",
        },
      ]
    : [
        {
          text: t("Services.window.testimonials.quote1"),
          client: "Robert Smith",
          location: "Montreal, QC",
        },
        {
          text: t("Services.window.testimonials.quote2"),
          client: "Jennifer Thomas",
          location: "Westmount, QC",
        },
        {
          text: t("Services.window.testimonials.quote3"),
          client: "David Leblanc",
          location: "Saint-Laurent, QC",
        },
      ];
  // Ensure gallery images match the current service
  const serviceType = isCarpet ? "carpet" : "window";
  const galleryImages = [1, 2, 3].map((num) => ({
    src: `/images/${serviceType}-gallery-${num}.jpg`,
    alt: `${serviceTitle} Gallery Image ${num}`,
  }));

  console.log("Service param:", params.service);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        ref={headerRef}
        initial="hidden"
        animate={isHeaderInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.7 }}
        className="relative h-[70vh] bg-gray-900 flex items-center"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={`/images/${serviceType}-hero.jpg`}
            alt={serviceTitle}
            fill
            priority
            className="object-cover opacity-60"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 lg:px-20 z-10 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            {t("Services.professionalPrefix")} {serviceTitle}
          </h2>
          <div className="w-32 h-1 bg-[#B8860B] mb-6"></div>
          <p className="text-xl md:text-2xl max-w-2xl mb-10">{serviceDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#B8860B] hover:bg-[#9A7209] text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              {t("Services.bookNow")}
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-lg transition duration-300">
              {t("Services.learnMore")}
            </button>
          </div>
        </div>
      </motion.section>
      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        initial="hidden"
        animate={isFeaturesInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            {t("Services.whyChoose")} {serviceTitle} {t("Services.service")}
          </h2>
          <div className="w-32 h-1 bg-[#B8860B] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isFeaturesInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#B8860B] rounded-full flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Process Section */}
      <motion.section
        ref={processRef}
        initial="hidden"
        animate={isProcessInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-gray-100"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            {t("Services.ourProcess")} {serviceTitle}
          </h2>
          <div className="w-32 h-1 bg-[#B8860B] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isProcessInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -z-10 transform -translate-x-1/2"></div>
                )}
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <div className="text-4xl font-bold text-[#B8860B] mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* Benefits Section */}
      <motion.section
        ref={benefitsRef}
        initial="hidden"
        animate={isBenefitsInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-gray-800 text-white"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("Services.benefitsOf")} {serviceTitle}
              </h2>
              <div className="w-32 h-1 bg-[#B8860B] mb-8"></div>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="rounded-full bg-[#B8860B] p-1 mt-1">
                      <Check className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-300">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={`/images/${serviceType}-benefits.jpg`}
                alt={`${serviceTitle} Benefits`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.section>
      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            {t("Services.ourWork")}
          </h2>
          <div className="w-32 h-1 bg-[#B8860B] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, num) => (
              <div
                key={num}
                className="relative group h-80 rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-medium bg-[#B8860B] px-6 py-2 rounded-full">
                    {t("Services.viewProject")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        initial="hidden"
        animate={isTestimonialsInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-gray-100"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            {t("Services.clientsSay")}
          </h2>
          <div className="w-32 h-1 bg-[#B8860B] mx-auto mb-16"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial="hidden"
                animate={isTestimonialsInView ? "visible" : "hidden"}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-[#B8860B] text-[#B8860B]"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden relative">
                    <Image
                      src={`/images/testimonial-${index + 1}.jpg`}
                      alt="Client"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.client}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t("Services.readyToExperience")} {serviceTitle}?
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            {t("Services.scheduleToday")}
          </p>
          <ContactForm label={t("Services.contactUs")} />
        </div>
      </section>
    </div>
  );
}
