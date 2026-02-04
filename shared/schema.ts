import { z } from "zod";

export const insertInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  companyName: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export interface Inquiry {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  companyName: string | null;
  message: string;
  createdAt: Date | null;
}
