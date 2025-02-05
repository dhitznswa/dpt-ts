import { z } from "zod";

// Sign-up
export const signupSchema = z
  .object({
    fullname: z.string().min(3, { message: "Nama minimal 3 karakter" }),
    email: z.string().email({ message: "Format email tidak valid" }),
    password: z.string().min(6, { message: "Password minimal 6 karakter" }),
    confirm_password: z.string(),
  })
  .refine((field) => field.password === field.confirm_password, {
    message: "Password tidak sama",
    path: ["password"],
  });

export type SignupSchema = z.infer<typeof signupSchema>;
