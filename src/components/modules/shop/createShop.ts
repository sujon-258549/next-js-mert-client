import { z } from "zod";

export const shopSchema = z.object({
  shopName: z.string().min(1, "Shop name is required"),
  businessLicenseNumber: z
    .string()
    .min(1, "Business license number is required"),
  address: z.string().min(1, "Address is required"),
  contactNumber: z.string().min(11, "Contact number is required"),
  website: z.string().url().optional(),
  servicesOffered: z.string(),
  establishedYear: z.string(),
  socialMediaLinks: z.record(z.string().url()).optional(),
  taxIdentificationNumber: z.string().min(1, "Tax ID is required"),
  logo: z.string().url().optional(),
  isActive: z.boolean(),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});
