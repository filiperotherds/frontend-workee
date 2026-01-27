import { HTTPError } from "ky";
import { estimateFormSchema } from "./estimate-form-schema";
import { z } from "zod";

export async function createNewEstimate(data: FormData) {
  const result = estimateFormSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const {
    name,
    phone,
    email,
    address,
    cep,
    number,
    description,
    deliveryDeadline,
    items,
    downPayment,
    paymentMethod,
    installments,
    validity,
  } = result.data;

  try {
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return { success: false, message, errors: null };
    }

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
    };
  }
}
