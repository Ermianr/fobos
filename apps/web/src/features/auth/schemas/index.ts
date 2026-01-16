import { z as zod } from "zod";

export const registerSchema = zod
  .object({
    username: zod
      .string()
      .min(3, { error: "Username must be at least 3 characters" })
      .max(32, { error: "Username must be less than 32 characters" }),
    email: zod.email({ error: "Invalid email address" }),
    password: zod
      .string()
      .min(8, { error: "Password must be at least 8 characters" }),
    confirmPassword: zod
      .string()
      .min(8, { error: "Confirm password must be at least 8 characters" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = zod.object({
  email: zod.email({ error: "Invalid email address" }),
  password: zod
    .string()
    .min(8, { error: "Password must be at least 8 characters" }),
});
