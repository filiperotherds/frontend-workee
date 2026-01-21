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

        <main className="w-full h-full">
          <div className="w-full h-full p-8 md:px-4 md:py-0 gap-4 items-start justify-start flex flex-col md:flex-row bg-white md:bg-secondary rounded-t-2xl">
            <SidebarProvider className="h-max">
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
