"use client";

import {
  Archive,
  BanknoteArrowDown,
  FilePlusCorner,
  Inbox,
  Layers,
  LayoutDashboard,
  Plus,
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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

const navGroups = [
  {
    label: "Geral",
    items: [
      {
        title: "Início",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Serviços",
        url: "/services",
        icon: Layers,
      },
      {
        title: "Clientes",
        url: "/customers",
        icon: User,
      },
    ],
  },
  {
    label: "Orçamentos",
    items: [
      {
        title: "Orçamentos Ativos",
        url: "/estimates",
        icon: Inbox,
      },
      {
        title: "Arquivados",
        url: "/archived-estimates",
        icon: Archive,
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
      <SidebarHeader>
        <Button
          size={"default"}
          className="w-full bg-blue-500 hover:bg-blue-500/80 text-white hover:text-white"
        >
          <Plus />
          Novo Orçamento
        </Button>
      </SidebarHeader>
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
                      <SidebarMenuButton
                        asChild
                        isActive={isActive}
                        className={`text-primary font-normal ${
                          isActive ? "" : "[&>svg]:text-muted-foreground"
                        }`}
                      >
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

          <p className="text-xs text-muted-foreground">
            Jobble Profissionais © 2026
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
