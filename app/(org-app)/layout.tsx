import { auth, isAuthenticated } from "@/auth/auth";
import Header from "@/components/header";
import AppSidebar from "@/components/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

import Topbar from "@/components/topbar";
import { ChartNoAxesColumnIncreasing } from "lucide-react";

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
    <div className="w-full bg-secondary">
      <div className="w-full h-full">
        <Header icon={ChartNoAxesColumnIncreasing} pageTitle="Dashboard"/>
        <SidebarProvider className="min-h-[calc(100svh-64px)] md:min-h-[calc(100svh-104px)]">
          <AppSidebar />
          <main className="w-full">
            <div className="w-full p-4 gap-4 items-start justify-start flex flex-col md:flex-row bg-white rounded-t-3xl">
              <SidebarTrigger className="hidden md:flex"/>
              {children}

            </div>
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}
