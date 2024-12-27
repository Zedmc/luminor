import { useTranslations } from "next-intl";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Home, Building, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useFadeInAnimation } from "@/hooks/useFadeInAnimation";

const services = [
  { icon: Home, translationKey: "residential" },
  { icon: Building, translationKey: "commercial" },
  { icon: Calendar, translationKey: "recurring" },
];

export default function Services() {
  const t = useTranslations("Services");
  const ref = useRef(null);
  const controls = useFadeInAnimation(ref);

  return (
    <section id="services" className="py-16 bg-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.translationKey}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="mb-4">
                    <service.icon className="w-12 h-12 text-primary" />
                  </div>
                  <CardTitle>{t(`${service.translationKey}.title`)}</CardTitle>
                  <CardDescription>
                    {t(`${service.translationKey}.description`)}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
