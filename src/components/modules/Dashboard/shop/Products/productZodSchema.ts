import { z } from "zod";

export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().positive(),
  stock: z.number().int().nonnegative(),
  weight: z.number().positive(),
  category: z.string(), // Assuming it's an ID as a string
  brand: z.string(), // Assuming it's an ID as a string
  availableColors: z.array(z.string()),
  specification: z.array(z.string()),
  keyFeatures: z.array(z.string()),
});
