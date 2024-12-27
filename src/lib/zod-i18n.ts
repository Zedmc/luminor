import { z } from "zod";

export const zodI18nMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      if (issue.expected === "string") {
        return { message: "errors.invalid_type_string" };
      }
      break;
    case z.ZodIssueCode.too_small:
      if (issue.type === "string") {
        return { message: "errors.too_small_string" };
      }
      break;
    case z.ZodIssueCode.invalid_string:
      if (issue.validation === "email") {
        return { message: "errors.invalid_email" };
      }
      break;
  }
  return { message: ctx.defaultError };
};
