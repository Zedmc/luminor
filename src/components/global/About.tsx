"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { CircleArrowRight, Leaf, Star } from "lucide-react";
import Wrapper from "@/components/global/Wrapper";

const About = () => {
  const t = useTranslations("About");

  // Ref and hook for Header Section
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  // Ref and hook for Founders Story Section
  const foundersRef = useRef(null);
  const isFoundersInView = useInView(foundersRef, { once: true });

  // Ref and hook for Core Values Section
  const valuesRef = useRef(null);
  const areValuesInView = useInView(valuesRef, { once: true });

  // Ref and hook for Where We Operate Section
  const regionRef = useRef(null);
  const isRegionInView = useInView(regionRef, { once: true });

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper
      id="about"
      className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden"
    >
      <section className="bg-inherit">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-0" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-[#F8F4E8] to-transparent blur-3xl opacity-60" />

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col gap-20">
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto" ref={headerRef}>
              <motion.div
                initial={{ y: 20 }}
                animate={isHeaderInView ? { y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  {t("title")}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#B8860B] to-[#DAA520] mx-auto mb-8" />
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {t("mission")}
                </p>
              </motion.div>
            </div>

            {/* Founders Story Section */}
            <div
              className="grid gap-12 md:grid-cols-2 items-center"
              ref={foundersRef}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isFoundersInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative h-[480px] w-full overflow-hidden rounded-3xl shadow-2xl group"
              >
                <Image
                  src="/images/about-1.jpg"
                  alt={t("foundersAlt")}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                  sizes="758px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
              </motion.div>

              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 text-sm font-medium text-[#B8860B] tracking-wider">
                  <div className="w-8 h-px bg-[#B8860B]" />
                  {t("ourStory")}
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  {t("foundersTitle")}
                </h2>

                <p className="text-gray-500 leading-relaxed">
                  {t("foundersDescription")}
                </p>

                <div className="pt-4">
                  <div className="w-16 h-px bg-gray-200" />
                </div>

                <ul className="space-y-3 text-gray-500">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#B8860B]" />
                      </div>
                      <span>{t(`foundersFact${item}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="mt-28" ref={valuesRef}>
              <div className="max-w-2xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {t("valuesTitle")}
                </h2>
                <div className="w-16 h-0.5 bg-[#B8860B] mx-auto mb-6" />
                <p className="text-gray-500">{t("valuesSubtitle")}</p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: <Star className="size-5" />,
                    title: t("value1Title"),
                    description: t("value1Description"),
                    delay: 0.5,
                  },
                  {
                    icon: <CircleArrowRight className="size-5" />,
                    title: t("value2Title"),
                    description: t("value2Description"),
                    delay: 0.6,
                  },
                  {
                    icon: <Leaf className="size-5" />,
                    title: t("value3Title"),
                    description: t("value3Description"),
                    delay: 0.7,
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={areValuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: item.delay }}
                    whileHover={{ y: -4 }}
                    className="group relative overflow-hidden bg-white rounded-2xl border border-[#B8860B]/20 transition-all duration-300 hover:border-[#B8860B]/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8F4E8] to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-8 h-full flex flex-col">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-[#F8F4E8] text-[#B8860B] mb-6 group-hover:bg-[#B8860B] group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 leading-relaxed flex-grow">
                        {item.description}
                      </p>

                      <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-[#B8860B]/20 transition-colors duration-300">
                        <button
                          onClick={scrollToServices}
                          className="inline-flex items-center text-sm font-medium text-[#B8860B] hover:text-[#DAA520] transition-colors"
                        >
                          {t("learnMore")}
                          <CircleArrowRight className="size-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Where We Operate Section */}
            <div className="mt-28" ref={regionRef}>
              <div className="max-w-2xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  {t("regionTitle")}
                </h2>
                <div className="w-16 h-0.5 bg-[#B8860B] mx-auto mb-6" />
                <p className="text-gray-500 text-base">
                  {t("regionDescription")}
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isRegionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group"
                >
                  <Image
                    src="/images/location-1.jpg"
                    alt="Montreal"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="966px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white text-xl font-bold">
                    {t("montreal")}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={isRegionInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="relative h-96 rounded-3xl overflow-hidden shadow-2xl group"
                >
                  <Image
                    src="/images/location-2.jpg"
                    alt="South Shore"
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(min-width: 1920px) 752px, (min-width: 1100px) calc(45.25vw - 108px), (min-width: 940px) calc(8.57vw + 287px), (min-width: 780px) calc(30vw + 92px), (min-width: 740px) 640px, (min-width: 400px) 90vw, calc(31.25vw + 213px)"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white text-xl font-bold">
                    {t("southShore")}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

export default About;
