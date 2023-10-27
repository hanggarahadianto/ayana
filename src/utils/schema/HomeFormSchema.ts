import z from "zod";

export const HomeFormSchema = z.object({
  title: z.string().min(1, "name is required").max(20),
  content: z.string().min(1, "content is required"),
  address: z.string().min(1, "address is required"),
  bathroom: z.string().min(1, "bathroom is required"),
  bedroom: z.string().min(1, "bedroom is required"),
  square: z.string().min(1, "square is required"),
  // file: z.string().min(1, "image is required"),
  file: z.any(),
});
