// "use client";

// import { useState } from "react";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { useTranslations, useLocale } from "next-intl";
// import Wrapper from "@/components/global/Wrapper";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";

// // const darkBlue = "#14213D";
// // const gold = "#B8860B";
// // const lightGold = "#DAA520";

// const contractFormSchema = z.object({
//   clientName: z.string().min(2, "Client name must be at least 2 characters"),
//   clientAddress: z
//     .string()
//     .min(10, "Client address must be at least 10 characters"),
//   executionDate: z.string(),
//   price: z.string(),
// });

// type ContractFormData = z.infer<typeof contractFormSchema>;

// const ContractPage = () => {
//   const t = useTranslations("ContractPage");
//   const [contract, setContract] = useState<string>("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const locale = useLocale();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset,
//   } = useForm<ContractFormData>({
//     resolver: zodResolver(contractFormSchema),
//   });

//   const onSubmit = async (data: ContractFormData) => {
//     setIsSubmitting(true);
//     try {
//       const response = await fetch("/api/generate-contract", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...data, locale }),
//       });

//       if (!response.ok) throw new Error("Failed to generate contract");

//       const result = await response.json();
//       setContract(result.contract);
//       reset();
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <Wrapper
//       id="contract-page"
//       className="bg-gradient-to-br from-[#14213D] to-[#0A0F1D] text-white shadow-lg"
//     >
//       <div className="max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-[#B8860B] to-[#DAA520] mb-8">
//           {t("title")}
//         </h1>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//           {/* Client Name Field */}
//           <div className="grid gap-2">
//             <Label className="text-[#B8860B] font-medium">
//               {t("clientName")}
//             </Label>
//             <Input
//               placeholder={t("clientNamePlaceholder")}
//               {...register("clientName")}
//               className={`bg-[#232742] border ${
//                 errors.clientName ? "border-red-500" : "border-[#2A3154]"
//               } text-white`}
//             />
//             {errors.clientName && (
//               <p className="text-sm text-red-500">
//                 {errors.clientName.message}
//               </p>
//             )}
//           </div>

//           {/* Client Address Field */}
//           <div className="grid gap-2">
//             <Label className="text-[#B8860B] font-medium">
//               {t("clientAddress")}
//             </Label>
//             <Textarea
//               placeholder={t("clientAddressPlaceholder")}
//               {...register("clientAddress")}
//               className={`bg-[#232742] border ${
//                 errors.clientAddress ? "border-red-500" : "border-[#2A3154]"
//               } text-white`}
//             />
//             {errors.clientAddress && (
//               <p className="text-sm text-red-500">
//                 {errors.clientAddress.message}
//               </p>
//             )}
//           </div>

//           {/* Execution Date Field */}
//           <div className="grid gap-2">
//             <Label className="text-[#B8860B] font-medium">
//               {t("executionDate")}
//             </Label>
//             <Input
//               placeholder={t("executionDatePlaceholder")}
//               {...register("executionDate")}
//               className={`bg-[#232742] border ${
//                 errors.executionDate ? "border-red-500" : "border-[#2A3154]"
//               } text-white`}
//             />
//             {errors.executionDate && (
//               <p className="text-sm text-red-500">
//                 {errors.executionDate.message}
//               </p>
//             )}
//           </div>

//           {/* Price Field */}
//           <div className="grid gap-2">
//             <Label className="text-[#B8860B] font-medium">{t("price")}</Label>
//             <Input
//               placeholder={t("pricePlaceholder")}
//               {...register("price")}
//               className={`bg-[#232742] border ${
//                 errors.price ? "border-red-500" : "border-[#2A3154]"
//               } text-white`}
//             />
//             {errors.price && (
//               <p className="text-sm text-red-500">{errors.price.message}</p>
//             )}
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-gradient-to-r from-[#B8860B] to-[#DAA520] hover:from-[#DAA520] hover:to-[#B8860B] text-white shadow-lg hover:shadow-md transition-all"
//           >
//             {isSubmitting ? t("submitting") : t("generateContract")}
//           </Button>
//         </form>

//         {/* Generated Contract */}
//         {contract && (
//           <div className="mt-8 p-6 bg-[#232742] rounded-lg border border-[#2A3154]">
//             <h2 className="text-xl font-semibold text-[#DAA520] mb-4">
//               {t("generatedContract")}
//             </h2>
//             <pre className="whitespace-pre-wrap text-gray-300">{contract}</pre>
//           </div>
//         )}
//       </div>
//     </Wrapper>
//   );
// };

// export default ContractPage;
