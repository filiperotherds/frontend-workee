import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar - Workee",
  description:
    "Encontre profissionais qualificados para qualquer serviço que você precise, com avaliações reais e preços transparentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      {children}
    </div>
  );
}
