"use client";

import { usePathname } from "next/navigation";
import { navItems } from "@/lib/nav-items";

export function HeaderTitle() {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      {navItems.map((item) => {
        if (item.href === pathname) {
          const IconComponent = item.icon;
          return (
            <div key={item.href} className="flex items-center gap-2">
              <IconComponent
                size={16}
                className="text-[#8A8AA3]"
              />
              <span className="font-medium">{item.title}</span>
            </div>
          );
        }
      })}
    </div>
  );
}
