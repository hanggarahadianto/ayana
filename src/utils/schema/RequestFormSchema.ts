// export const OrderFormSchema = () => {};

import z from "zod";

export const RequestFormSchema = z.object({
  name: z.string().min(1, "name is required").max(20),
  phone: z.string().min(1, "phone is required"),
  date: z.date({
    required_error: "A date is required.",
  }),
  time: z.string(),
  home_id: z.string(),
});
