"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const ParallaxScroll = () => {
  const t = useTranslations("ParallaxScroll");
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, 20]);

  // Generate images array internally, similar to LuxuryShowcase
  const images = Array.from({ length: 9 }, (_, i) => {
    // Create 9 images (3 per column)
    const imageIndex = (i % 4) + 1; // Cycle through images 1-4
    return {
      src: `/images/parallax-${imageIndex}.jpg`,
      alt: t(`image${imageIndex}Alt`),
      title: t(`image${imageIndex}Title`),
      description: t(`image${imageIndex}Description`),
    };
  });

  const third = Math.ceil(images.length / 3);
  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <section ref={sectionRef} id="parallax" className="py-12 md:py-12 bg-white">
      <div className="w-full">
        {/* Enhanced Page Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          {t("title")}
          <div className="w-32 h-1 bg-[#B8860B] mx-auto mt-6"></div>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {t("subtitle")}
        </p>

        <div className="w-full">
          {/* Reduced gap-8 instead of gap-10 to accommodate wider cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-6xl mx-auto gap-8 py-20 px-6">
            <div className="grid gap-10">
              {firstPart.map((image, idx) => (
                <motion.div
                  style={{
                    y: translateYFirst,
                    x: translateXFirst,
                    rotateZ: rotateXFirst,
                  }}
                  key={"grid-1" + idx}
                  className="relative rounded-xl overflow-hidden"
                >
                  <Image
                    src={image.src}
                    className="h-96 w-full object-cover object-left-bottom rounded-lg !m-0 !p-0"
                    height="450"
                    width="450"
                    alt={image.alt}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <h3 className="text-xl font-medium text-white truncate mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-base line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {secondPart.map((image, idx) => (
                <motion.div
                  key={"grid-2" + idx}
                  className="relative rounded-xl overflow-hidden"
                >
                  <Image
                    src={image.src}
                    className="h-96 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                    height="450"
                    width="450"
                    alt={image.alt}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <h3 className="text-xl font-medium text-white truncate mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-base line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10">
              {thirdPart.map((image, idx) => (
                <motion.div
                  style={{
                    y: translateYThird,
                    x: translateXThird,
                    rotateZ: rotateXThird,
                  }}
                  key={"grid-3" + idx}
                  className="relative rounded-xl overflow-hidden"
                >
                  <Image
                    src={image.src}
                    className="h-96 w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                    height="450"
                    width="450"
                    alt={image.alt}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                    <h3 className="text-xl font-medium text-white truncate mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 text-base line-clamp-2">
                      {image.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxScroll;
