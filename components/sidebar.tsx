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
import { NewEstimateButton } from "./new-estimate-button";

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
        title: "Contas a Pagar",
        url: "/accounts-payable",
        icon: BanknoteArrowDown,
      },
      {
        title: "Serviços",
        url: "/services",
        icon: Layers,
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
        pending: 3,
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
      <SidebarHeader className="-mt-1">
        <NewEstimateButton />
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
