"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { navItems } from "@/lib/nav-items";
import { DollarSign } from "lucide-react";

export default function MobileNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full p-8 flex items-center justify-center border-t border-border bg-background md:hidden">
      <div className="w-full flex flex-row items-center justify-between gap-8">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex-1">
            <div
              className={`flex flex-col items-center justify-end gap-0.5 ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              <item.icon className="size-6" />
              <span className="text-xs font-semibold">{item.title}</span>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href={"/organization/payments"}
        className="absolute -top-8 left-1/2 transform -translate-x-1/2 size-16 rounded-full bg-theme-primary flex items-center justify-center text-white"
      >
        <DollarSign />
      </Link>
    </div>
  );
}
