"use client";

import { usePathname } from "next/navigation";

import { CircleDollarSign, ReceiptText, Settings } from "lucide-react";
import { BsFillBarChartFill } from "react-icons/bs";
import Link from "next/link";

const navItems = [
  {
    title: "Dash",
    icon: BsFillBarChartFill,
    href: "/organization/dashboard",
  },
  {
    title: "Financeiro",
    icon: CircleDollarSign,
    href: "/organization/financial",
  },
  {
    title: "Orçamento",
    icon: ReceiptText,
    href: "/organization/estimate",
  },
  {
    title: "Ajustes",
    icon: Settings,
    href: "/organization/settings",
  },
];

export default function MobileNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 w-full p-8 flex items-center justify-center border-t border-border bg-background md:hidden">
      <div className="w-full flex flex-row items-center justify-between gap-8">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="flex-1">
            <div
              className={`flex flex-col items-center justify-end ${
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
    </div>
  );
}
