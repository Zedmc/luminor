"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Github,
  Linkedin,
  Send,
} from "lucide-react";
import { useTranslations } from "next-intl";

const contactFormSchema = z.object({
  name: z.string().min(2, "nameMin"),
  email: z.string().email("emailInvalid"),
  message: z.string().min(10, "messageMin"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export function Footer() {
  const t = useTranslations("FooterContactForm");
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: t("successTitle"),
        description: t("successDescription"),
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: t("errorTitle"),
        description: t("errorDescription"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactItems = [
    {
      icon: Mail,
      label: t("emailLabel"),
      value: "zie.mc@hotmail.com",
      href: "mailto:zie.mc@hotmail.com",
    },
    {
      icon: Phone,
      label: t("phoneLabel"),
      value: "+1 438 530 3350",
      href: "tel:+14385303350",
    },
    {
      icon: FaWhatsapp,
      label: t("whatsappLabel"),
      value: "+1 438 530 3350",
      href: "https://wa.me/14385303350",
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: t("facebook") },
    { icon: Instagram, href: "#", label: t("instagram") },
    { icon: Twitter, href: "#", label: t("twitter") },
    { icon: Github, href: "#", label: t("github") },
    { icon: Linkedin, href: "#", label: t("linkedin") },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-gray-900 bg-gradient-to-b from-[#050914] to-[#0A0F1D] pt-20 pb-10 overflow-hidden"
    >
      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                {t("contactFormTitle")}
              </h2>
              <p className="text-white/60">{t("contactFormDescription")}</p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder={t("namePlaceholder")}
                    {...register("name")}
                    className={cn(
                      "h-12 bg-white/5 border-white/10 text-white placeholder:text-white/50",
                      errors.name && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">
                      {t(errors.name.message)}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    {...register("email")}
                    className={cn(
                      "h-12 bg-white/5 border-white/10 text-white placeholder:text-white/50",
                      errors.email &&
                        "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm">
                      {t(errors.email.message)}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder={t("messagePlaceholder")}
                    {...register("message")}
                    className={cn(
                      "min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/50 resize-none",
                      errors.message &&
                        "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm">
                      {t(errors.message.message)}
                    </p>
                  )}
                </div>
                <Button
                  size="lg"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-md bg-[#B8860B]/80 text-white text-base shadow-lg hover:bg-[#DAA520] transition-colors"
                >
                  {isSubmitting ? (
                    t("sendingButton")
                  ) : (
                    <>
                      {t("sendButton")}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="space-y-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">
                  {t("getInTouch")}
                </h3>
                <div className="space-y-4">
                  {contactItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors group"
                    >
                      <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <span>{item.value}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">
                  {t("followUs")}
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="text-white/60 hover:text-white transition-colors"
                      aria-label={link.label}
                    >
                      <link.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
