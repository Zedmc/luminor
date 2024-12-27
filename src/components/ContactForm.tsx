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
  DialogFooter,
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

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactDialog({ label }: { label: string }) {
  const [open, setOpen] = useState(false);
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

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

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
          size="lg"
          variant="default"
          className="bg-[#B8860B] hover:bg-[#DAA520] duration-300 text-white border-none font-medium text-lg"
        >
          {label}
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[90vw] md:w-[60vw] md:max-w-[60vw] lg:w-[50vw] lg:max-w-[50vw] xl:w-[40vw] xl:max-w-[40vw]">
        <DialogHeader>
          <DialogTitle className="text-[#B8860B]">{t("title")}</DialogTitle>
          <DialogDescription className="text-gray-600">
            {t("description")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-[#B8860B]">
                {t("labels.name")}
              </Label>
              <Input
                id="name"
                placeholder={t("placeholders.name")}
                {...register("name")}
                className={`h-12 ${
                  errors.name ? "border-red-500" : "border-[#090f1c]"
                }`}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{t("errors.name")}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-[#B8860B]">
                {t("labels.email")}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t("placeholders.email")}
                {...register("email")}
                className={`h-12 ${
                  errors.email ? "border-red-500" : "border-[#090f1c]"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{t("errors.email")}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message" className="text-[#B8860B]">
                {t("labels.message")}
              </Label>
              <Textarea
                id="message"
                placeholder={t("placeholders.message")}
                {...register("message")}
                className={`min-h-[150px] ${
                  errors.message ? "border-red-500" : "border-[#090f1c]"
                }`}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{t("errors.message")}</p>
              )}
            </div>
          </div>
          <DialogFooter className="flex-col space-y-2 sm:flex-row sm:justify-between sm:space-x-2 sm:space-y-0">
            <Button
              size="lg"
              type="button"
              variant="outline"
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-semibold text-[#B8860B] border-[#B8860B] hover:bg-[#B8860B] hover:text-white"
              onClick={() => window.open("https://wa.me/14385303350", "_blank")}
            >
              <FaWhatsapp className="h-5 w-5" />
              <span>{t("buttons.contactWhatsApp")}</span>
            </Button>
            <Button
              size="lg"
              type="submit"
              className="w-full sm:w-auto bg-[#B8860B] hover:bg-[#DAA520] text-white transition-colors duration-300 px-6 py-2 rounded-full text-sm font-semibold"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("buttons.sending") : t("buttons.sendMessage")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
