import { auth, isAuthenticated } from "@/auth/auth";
import { Header } from "@/components/header";
import AppSidebar from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import MobileNavbar from "@/components/mobile-navbar";

export const metadata: Metadata = {
  title: "Jobble",
};

export default async function OrgAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isAuthenticated()) {
    redirect("/sign-in");
  }

  const { user } = await auth();

  if (user.accountType !== "ORGANIZATION") {
    redirect("/home");
  }

  return (
    <div className="w-full bg-secondary font-sans">
      <div className="w-full h-full">
        <Header />
        <SidebarProvider className="min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-104px)]">
          <AppSidebar />
          <main className="w-full">
            <div className="w-full h-full p-8 gap-4 items-start justify-start flex flex-col md:flex-row bg-white rounded-t-4xl">
              <SidebarTrigger className="hidden md:flex" />
              {children}
            </div>
            <MobileNavbar />
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
