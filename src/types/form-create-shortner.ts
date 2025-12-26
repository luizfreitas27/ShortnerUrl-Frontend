import { z } from "zod";

export const createShortnerFormDataSchema = z.object({
  name: z.string().min(5, { message: "The field must have 5 characters." }),
  originalUrl: z
    .string()
    .min(5, { message: "The field must have 5 characters." }),
});

export type TCreateShortnerFormData = z.infer<
  typeof createShortnerFormDataSchema
>;
