import z from "zod";

export const estimateFormSchema = z.object({
  name: z.string({ message: "Campo Obrigatório" }),
  phone: z.string().nullable(),
  email: z.string().nullable(),
  cep: z.string().nullable(),
  address: z.string().nullable(),
  number: z.string().nullable(),
  description: z.string().nullable(),
  deliveryDeadline: z.date(),
  items: z.array(
    z.object({
      productId: z.string(),
      name: z.string(),
      quantity: z.number(),
      unitValue: z.number(),
    })
  ),
  paymentMethod: z.string().nullable(),
  installments: z.number().nullable(),
  downPayment: z.number().nullable(),
  validity: z.date().nullable(),
});

export type EstimateFormSchema = z.infer<typeof estimateFormSchema>;
