import { z } from "zod";

export const registerFormDataScheme = z.object({
    email: z.email().nonempty(),
    username: z.string().min(5, {message: "The field must have 5 characters"}),
    password: z.string().min(6, {message: "The field must have 6 characters."}),
    confirmPassword: z.string()
})
 .refine((data) => data.password === data.confirmPassword, {
    message: "The values not are equals.",
    path: ['confirmPassword'],
  });

  export type TRegisterFormData = z.infer<typeof registerFormDataScheme>;
