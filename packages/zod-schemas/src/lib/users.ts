import { z } from "zod";

export const userSchema = z
  .object({
    name: z.string().min(6, "Name should have a minimum of 6 characters."),
    email: z.string().email("Invalid email"),
  })
  .strict();

export type User = z.infer<typeof userSchema>;
