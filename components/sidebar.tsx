"use client";

import {
  Archive, CreditCard, Inbox, LayoutDashboard,
  Package, Plus, ReceiptText, Users, Wrench
} from "lucide-react";
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
        title: "Faturamento",
        url: "/billing",
        icon: CreditCard,
      },
    ],
  },
  {
    label: "Operacional",
    items: [
      {
        title: "Orçamentos",
        url: "/estimates",
        icon: Inbox,
        pending: 3,
      },
      {
        title: "Ordens de Serviço",
        url: "/service-orders",
        icon: ReceiptText,
      },
      {
        title: "Ordens Arquivadas",
        url: "/archived-service-orders",
        icon: Archive,
      },
    ],
  },
  {
    label: "Cadastros",
    items: [
      {
        title: "Produtos",
        url: "/products",
        icon: Package,
      },
      {
        title: "Serviços",
        url: "/services",
        icon: Wrench,
      },
    ],
  },
  {
    label: "Relacionamento com Cliente",
    items: [
      {
        title: "Clientes",
        url: "/customers",
        icon: Users,
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
      <SidebarHeader className="-mt-1">
        <Link href="/new-estimate/customer-details">
          <Button size={"default"} className="text-sm w-full bg-blue-500 hover:bg-blue-500/80 text-white">
            <Plus />
            Novo Orçamento
          </Button>
        </Link>
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
                        className={`text-primary hover:[&>svg]:text-blue-500 font-normal ${isActive ? "" : "[&>svg]:text-muted-foreground"
                          }`}
                      >
                        <Link href={item.url}>
                          <item.icon size={16} />
                          <span>{item.title}</span>

                          {item.pending ? <span className="absolute right-3 text-muted-foreground text-xs">{item.pending}</span> : ""}
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

      <SidebarFooter>
        <div className="w-full flex flex-col items-start justify-start space-y-4">
          {/* <OrganizationButton /> */}

          <p className="text-xs text-muted-foreground">
            Jobble Profissionais © 2026
          </p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
