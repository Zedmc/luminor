// "use client";
// import { motion } from "framer-motion";
// import { useRef } from "react";
// import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";
// import { Diamond, Home, Umbrella, Users } from "lucide-react";
// import Image from "next/image";
// import { useTranslations } from "next-intl";
// import ContactForm from "./ContactForm";


// export default function WhyChooseUs() {
//   const t = useTranslations("WhyChooseUs");
//   const ref = useRef(null);
//   const controls = useFadeInAnimation(ref);

//   const features = [
//     {
//       icon: Diamond,
//       title: "sparklingClean.title",
//       description: "sparklingClean.description",
//     },
//     {
//       icon: Home,
//       title: "leadingTech.title",
//       description: "leadingTech.description",
//     },
//     {
//       icon: Umbrella,
//       title: "insured.title",
//       description: "insured.description",
//     },
//     {
//       icon: Users,
//       title: "reliableCrew.title",
//       description: "reliableCrew.description",
//     },
//   ];

//   return (
//     <section className="py-16 bg-[#050914]  text-white">
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={{
//           hidden: { opacity: 0 },
//           visible: { opacity: 1 },
//         }}
//         transition={{ duration: 0.5 }}
//         className="container mx-auto px-6 md:px-12 lg:px-20"
//       >
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
//             {t("title")}
//             <div className="w-32 h-1 bg-[#B8860B] mx-auto mt-6"></div>
//           </h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             {t("subtitle")}
//           </p>
//         </div>

//         {/* Grid of Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className="grid grid-cols-1 lg:grid-cols-2 h-full bg-[#1C2833] shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
//               initial="hidden"
//               animate={controls}
//               variants={{
//                 hidden: { opacity: 0 },
//                 visible: { opacity: 1 },
//               }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               {/* Image */}
//               <div className="w-full min-h-60 relative">
//                 <Image
//                   loading="lazy"
//                   src={`/images/why-choose-us-${index + 1}.jpg`}
//                   alt={`Feature ${index + 1}`}
//                   fill
//                   sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
//                   className="object-cover object-center"
//                   quality={100}
//                 />
//               </div>
//               {/* Content */}
//               <div className="w-full p-6 space-y-3 text-sm md:text-base">
//                 <feature.icon className="w-8 h-8 text-[#B8860B]" />
//                 <h3 className="text-xl leading-tight font-semibold mb-2 text-white">
//                   {t(feature.title)}
//                 </h3>
//                 <p className="text-sm text-gray-300">
//                   {t(feature.description)}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className="text-center mt-16">
//           <div className="text-center mt-10">
//                   <ContactForm label={t("cta")} />
//                 </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }


"use client";
import { Button } from "@/components/ui/button";
import { Diamond, Home, Umbrella, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

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
      description: "reliableCrew.description",
      image: "/images/why-choose-us-4.jpg",
    },
  ];

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
              <Button className="gap-2" size="lg">
                {t("cta")}
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                Learn More
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
