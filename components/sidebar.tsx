"use client";

import {
  BanknoteArrowDown,
  Layers,
  LayoutDashboard,
  ReceiptText,
  Ticket,
  Trophy,
  User,
  Wallet,
} from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navGroups = [
  {
    label: "Prestador",
    items: [
      {
        title: "Painel",
        url: "/organization/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Orçamentos",
        url: "/organization/estimates",
        icon: ReceiptText,
      },
      {
        title: "Meus Serviços",
        url: "/organization/services",
        icon: Layers,
      },
      {
        title: "Clientes",
        url: "/organization/customers",
        icon: User,
      },
    ],
  },
  {
    label: "Pagamentos",
    items: [
      {
        title: "Cobranças",
        url: "/organization/payments",
        icon: BanknoteArrowDown,
      },
      {
        title: "Carteira",
        url: "/organization/wallet",
        icon: Wallet,
      },
    ],
  },
  {
    label: "Parceiros",
    items: [
      {
        title: "Prêmios",
        url: "/organization/awards",
        icon: Trophy,
      },
      {
        title: "Afiliados",
        url: "/organization/afiliate",
        icon: Ticket,
      },
    ],
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  const isLinkActive = (url: string) => {
    if (url === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(url);
  };

  return (
    <Sidebar>
      <SidebarContent>
        {navGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="text-muted-foreground text-sm font-medium">
                {group.items.map((item) => {
                  const isActive = isLinkActive(item.url);

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={item.url}>
                          <item.icon size={16} />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <Separator />

      <SidebarFooter>
        <div className="p-2 w-full flex flex-col items-start justify-start space-y-4">
          {/* <OrganizationButton /> */}

          <p className="text-xs text-muted-foreground">Jobble Inc. © 2025</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
