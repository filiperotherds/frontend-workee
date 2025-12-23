"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useFormState } from "@/hooks/use-form-state";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertTriangle, Loader2 } from "lucide-react";
import { organizationSignUpAction } from "@/app/(auth)/organization/sign-up/actions";

type signUpType = "INDIVIDUAL" | "ORGANIZATION";

export function SignupForm({
  signUpType,
  className,
  ...props
}: React.ComponentProps<"form"> & { signUpType?: signUpType }) {
  const router = useRouter();

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    organizationSignUpAction,
    () => {
      if (signUpType === "ORGANIZATION") {
        router.push("/complete-signup");
      } else {
        router.push("/sign-in");
      }
    }
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      {success === false && message && (
        <Alert variant="destructive">
          <AlertTriangle className="size-4" />
          <AlertTitle>Falha ao entrar!</AlertTitle>
          <AlertDescription>
            <p>{message}</p>
          </AlertDescription>
        </Alert>
      )}
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">
            {signUpType === "ORGANIZATION"
              ? "Torne-se um Parceiro!"
              : "Crie sua Conta"}
          </h1>
          <p className="text-muted-foreground text-sm text-balance">
            Preencha o formulário abaixo para criar sua conta
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="name">Nome Completo</FieldLabel>
          <Input id="name" name="name" type="text" placeholder="José Silva" />
          {errors?.name && (
            <p className="text-xs font-medium text-red-500">{errors.name[0]}</p>
          )}
        </Field>
        <Field>
          <FieldLabel htmlFor="email">E-mail</FieldLabel>
          <Input
            id="email"
            name="email"
            type="text"
            placeholder="email@jobble.com.br"
          />
          {errors?.email && (
            <p className="text-xs font-medium text-red-500">
              {errors.email[0]}
            </p>
          )}
          <FieldDescription>
            Usaremos para entrar em contato com você. Não compartilharemos seu
            e-mail com mais ninguém.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="password">Senha</FieldLabel>
          <Input id="password" name="password" type="password" required />
          {errors?.password && (
            <p className="text-xs font-medium text-red-500">
              {errors.password[0]}
            </p>
          )}
          <FieldDescription>Deve ter no mínimo 8 caracteres.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="confirm_password">Confirme sua Senha</FieldLabel>
          <Input
            id="confirm_password"
            name="confirm_password"
            type="password"
            required
          />
          {errors?.confirm_password && (
            <p className="text-xs font-medium text-red-500">
              {errors.confirm_password[0]}
            </p>
          )}
          <FieldDescription>Por favor confirme sua senha.</FieldDescription>
        </Field>
        <Field>
          <Button type="submit" disabled={isPending} className="bg-theme-primary hover:bg-theme-primary/80 text-primary">
            {isPending ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              "Crie sua Conta"
            )}
          </Button>
        </Field>
        <FieldSeparator>Ou continue com</FieldSeparator>
        <Field>
          <Button variant="outline" type="button" className="cursor-pointer">
            <svg
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M62.72 32.725c0-2.269-.204-4.45-.582-6.545H32v12.378h17.222c-.742 4-2.997 7.389-6.386 9.658v8.03h10.342c6.051-5.572 9.542-13.775 9.542-23.52Z"
              ></path>
              <path
                fill="#34A853"
                d="M31.999 64.004c8.64 0 15.883-2.866 21.178-7.753l-10.342-8.029c-2.865 1.92-6.53 3.055-10.836 3.055-8.335 0-15.39-5.63-17.906-13.193H3.403v8.29c5.265 10.46 16.087 17.63 28.596 17.63Z"
              ></path>
              <path
                fill="#FBBC05"
                d="M14.095 38.084a19.236 19.236 0 0 1-1.004-6.08c0-2.11.364-4.16 1.004-6.08v-8.291H3.403A31.987 31.987 0 0 0 0 32.003c0 5.164 1.236 10.052 3.404 14.372l10.69-8.291Z"
              ></path>
              <path
                fill="#EA4335"
                d="M31.999 12.727c4.698 0 8.916 1.615 12.232 4.786l9.179-9.178C47.868 3.17 40.624 0 31.999 0 19.489 0 8.668 7.17 3.402 17.63l10.691 8.29C16.61 18.356 23.664 12.727 32 12.727Z"
              ></path>
            </svg>
            Criar com Google
          </Button>
          <FieldDescription className="px-6 text-center">
            Já tem uma conta? <a href="/sign-in">Entrar</a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
