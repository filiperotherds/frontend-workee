import type { Metadata } from "next";
import DocsHeader from "@/components/docs-header";
import { DocsSidebar } from "@/components/docs-sidebar";

export const metadata: Metadata = {
  title: "Documentação - Jobble",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <DocsHeader />
      <div className="w-full min-h-[calc(100vh-64px)] flex justify-center px-8 py-16">
        <div className="w-full max-w-[1200px] flex flex-row gap-12 items-start">
          <aside className="hidden lg:block shrink-0 sticky top-32 w-64">
            <DocsSidebar />
          </aside>

          <main className="flex-1 min-w-0">{children}</main>
        </div>
      </div>
    </div>
  );
}
