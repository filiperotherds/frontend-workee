import { isAuthenticated } from "@/auth/auth";
import { Header } from "@/components/header";
import AppSidebar from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

import MobileNavbar from "@/components/mobile-navbar";

export default async function OrgAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (!isAuthenticated()) {
    redirect("/sign-in");
  }

  return (
    <div className="w-full font-sans">
      <div className="w-full h-full">
        <Header />

        <main className="w-full">
          <div className="w-full h-full p-8 gap-4 items-start justify-start flex flex-col md:flex-row bg-white rounded-t-2xl">
            <SidebarProvider>
              <AppSidebar />

              {children}
            </SidebarProvider>
          </div>
          <MobileNavbar />
        </main>
      </div>
    </div>
  );
}
