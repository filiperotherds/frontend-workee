import { isAuthenticated } from "@/auth/auth";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Entrar - Jobble",
  description:
    "Encontre profissionais qualificados para qualquer serviço que você precise, com avaliações reais e preços transparentes.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (await isAuthenticated()) {
    redirect("/organization/dashboard");
  }

  return <div className="">{children}</div>;
}
