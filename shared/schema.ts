import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: Date | null;
}
