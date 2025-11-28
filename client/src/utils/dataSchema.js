import { z } from "zod";

export const contactSchema = z.object({
  fullname: z
    .string()
    .min(5, { message: "Full name must be at least 5 characters long" }),
  email: z.email(),
  subject: z.string().min(5, { message: "Subject is required" }),
  message: z.string().min(5, { message: "Message is required" }),
});
