"use server";

import { HTTPError } from "ky";
import { z } from "zod";

import { organizationSignUp } from "@/http/organization-sign-up";

const signUpSchema = z
  .object({
    name: z.string().refine((value) => value.split(" ").length > 1, {
      message: "Insira seu nome completo.",
    }),
    email: z.string().email({ message: "Endereço de e-mail inválido." }),
    password: z
      .string()
      .min(6, { message: "A senha deve ter pelo menos 6 caracteres." }),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "A confirmação da senha não confere.",
    path: ["confirm_password"],
  });

export async function organizationSignUpAction(data: FormData) {
  const result = signUpSchema.safeParse(Object.fromEntries(data));

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;

    return { success: false, message: null, errors };
  }

  const { name, email, password } = result.data;

  try {
    await organizationSignUp({
      name,
      email,
      password,
      accountType: "ORGANIZATION",
      orgType: "PROVIDER",
    });
  } catch (err) {
    if (err instanceof HTTPError) {
      const { message } = await err.response.json();

      return { success: false, message, errors: null };
    }

    console.error(err);

    return {
      success: false,
      message: "Unexpected error, try again in a few minutes.",
      errors: null,
    };
  }

  return { success: true, message: null, errors: null };
}
