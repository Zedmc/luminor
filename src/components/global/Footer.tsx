"use client";

import { motion } from "framer-motion";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
      value: "info@luminor.ca",
      href: "mailto:info@luminor.ca",
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

  return (
    <footer
      id="contact"
      className="relative bg-gradient-to-b from-[#050914] to-[#0A0F1D] pt-20 pb-10 overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/footer-bg.jpg"
          alt="Footer Background"
          fill
          quality={100}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/90"></div>
      </div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] via-[#DAA520] to-[#B8860B]">
                  {t("contactFormTitle")}
                </span>
              </h2>
              <p className="text-white/60">{t("contactFormDescription")}</p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 bg-[#0A0F1D]/80 backdrop-blur-sm p-6 rounded-2xl border border-[#2A3154]/50 shadow-lg"
              >
                {/* Name Input */}
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder={t("namePlaceholder")}
                    {...register("name")}
                    className={cn(
                      "h-12 bg-white/5 border-white/10 text-white placeholder:text-white/50 rounded-lg shadow-sm focus:ring-offset-gray-900 focus:ring-[#B8860B]",
                      errors.name && "border-red-500 focus-visible:ring-red-500"
                    )}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">
                      {t(errors.name.message)}
                    </p>
                  )}
                </div>
                {/* Email Input */}
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder={t("emailPlaceholder")}
                    {...register("email")}
                    className={cn(
                      "h-12 bg-white/5 border-white/10 text-white placeholder:text-white/50 rounded-lg shadow-sm focus:ring-offset-gray-900 focus:ring-[#B8860B]",
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
                {/* Message Textarea */}
                <div className="space-y-2">
                  <Textarea
                    placeholder={t("messagePlaceholder")}
                    {...register("message")}
                    className={cn(
                      "min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-white/50 resize-none rounded-lg shadow-sm focus:ring-offset-gray-900 focus:ring-[#B8860B]",
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
                {/* Submit Button */}
                <Button
                  size="default"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-md bg-gradient-to-r from-[#B8860B] to-[#DAA520] text-white text-base shadow-lg hover:bg-[#DAA520] transition-transform hover:-translate-y-[2px]"
                >
                  {isSubmitting ? (
                    t("sendingButton")
                  ) : (
                    <>
                      {t("sendButton")}
                      <Send className="h-4 w-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12 md:pl-8 lg:pl-12">
              {" "}
              {/* Add left padding */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white border-b pb-4 border-[#DAA520]">
                  {" "}
                  {/* Larger heading, underline */}
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
                      className="flex items-center py-3 px-4 space-x-3 text-white/80 hover:text-white bg-[#0A0F1D]/60 backdrop-blur-sm rounded-xl border border-[#2A3154]/50 shadow-md transition-colors group" // Added padding, background, rounded corners, border, shadow
                    >
                      <item.icon className="w-6 h-6 group-hover:text-[#DAA520] transition-colors" />{" "}
                      {/* Larger icons */}
                      <span className="text-lg">{item.value}</span>{" "}
                      {/* Larger text */}
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
