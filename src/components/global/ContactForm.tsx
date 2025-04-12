/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactDialog({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const t = useTranslations("ContactForm");

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

      if (!response.ok) throw new Error("Failed to send message");

      toast({
        title: t("success.title"),
        description: t("success.description"),
      });
      reset();
      setOpen(false);
    } catch (error) {
      toast({
        title: t("error.title"),
        description: t("error.description"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size="default"
          variant="default"
          className="bg-[#B8860B] hover:bg-[#DAA520] text-white border-none font-medium text-lg"
        >
          {label}
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[90vw] max-w-[90vw] md:w-[60vw] md:max-w-[60vw] lg:w-[50vw] lg:max-w-[50vw] xl:w-[40vw] xl:max-w-[40vw] !rounded-2xl bg-gradient-to-br from-[#14213D] to-[#0A0F1D] p-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
          <div className="absolute transform rotate-45 translate-x-12 -translate-y-12 w-24 h-24 bg-[#B8860B]" />
        </div>

        <DialogHeader className="px-8 pt-8">
          <DialogTitle className="text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] to-[#DAA520]">
            {t("title")}
          </DialogTitle>
          <DialogDescription className="text-base md:text-lg text-[#A0AEC0]">
            {t("description")}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="px-8 pb-8">
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label className="text-[#B8860B] font-medium text-base md:text-lg">
                {t("labels.name")}
              </Label>
              <Input
                placeholder={t("placeholders.name")}
                {...register("name")}
                className={`h-12 bg-[#232742] border-2 ${
                  errors.name ? "border-red-500" : "border-[#2A3154]"
                } text-white text-base md:text-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] placeholder:text-gray-400 placeholder:text-base md:placeholder:text-lg`}
              />
              {errors.name && (
                <p className="text-sm md:text-base text-red-500">
                  {t("errors.name")}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label className="text-[#B8860B] font-medium text-base md:text-lg">
                {t("labels.email")}
              </Label>
              <Input
                type="email"
                placeholder={t("placeholders.email")}
                {...register("email")}
                className={`h-12 bg-[#232742] border-2 ${
                  errors.email ? "border-red-500" : "border-[#2A3154]"
                } text-white text-base md:text-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] placeholder:text-gray-400 placeholder:text-base md:placeholder:text-lg`}
              />
              {errors.email && (
                <p className="text-sm md:text-base text-red-500">
                  {t("errors.email")}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label className="text-[#B8860B] font-medium text-base md:text-lg">
                {t("labels.message")}
              </Label>
              <Textarea
                placeholder={t("placeholders.message")}
                {...register("message")}
                className={`min-h-[150px] bg-[#232742] border-2 ${
                  errors.message ? "border-red-500" : "border-[#2A3154]"
                } text-white text-base md:text-lg focus:ring-2 focus:ring-[#B8860B] focus:border-[#B8860B] placeholder:text-gray-400 placeholder:text-base md:placeholder:text-lg`}
              />
              {errors.message && (
                <p className="text-sm md:text-base text-red-500">
                  {t("errors.message")}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto flex items-center gap-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white transition-all duration-300 text-base md:text-lg rounded-lg"
              onClick={() => window.open("https://wa.me/14385303350", "_blank")}
            >
              <FaWhatsapp className="w-4 h-4 md:w-5 md:h-5" />
              <span>{t("buttons.contactWhatsApp")}</span>
            </Button>

            <Button
              type="submit"
              className="w-full sm:w-auto bg-[#B8860B]/90  hover:bg-[#B8860B] text-white transition-all text-base md:text-lg rounded-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("buttons.sending") : t("buttons.sendMessage")}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
