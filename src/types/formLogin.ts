import { z } from "zod"

export const loginFormDataSchema = z.object({

    username: z.string().min(5, {message: "The field must have 5 characters."}),
    password: z.string().min(6, {message: "The field must have 6 characters."})
})

export type TLoginFormData = z.infer<typeof loginFormDataSchema>;