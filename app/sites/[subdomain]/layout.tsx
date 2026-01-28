import type { Metadata } from "next";
import { Geist_Mono, Geist } from "next/font/google";
import "../../globals.css";
import NextTopLoader from "nextjs-toploader";
import { getSite } from "@/http/get-site";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}): Promise<Metadata> {
  const { subdomain } = await params;

  if (!subdomain) {
    return {
      title: "Jobble - Prestador não encontrado",
    };
  }

  const siteData = await getSite({ slug: subdomain });

  return {
    title: `${siteData?.name}`,
  };
}

export default async function SubdomainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ subdomain: string }>;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-white">
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        <NextTopLoader
          color="#3b82f6"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={400}
          shadow="0 0 10px #3b82f6,0 0 5px #3b82f6"
        />
        {children}
      </body>
    </html>
  );
}
