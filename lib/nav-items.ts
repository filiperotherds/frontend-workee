import Settings from "@/app/(org-app)/organization/settings/page";
import { Inbox, ReceiptText, SettingsIcon, Store } from "lucide-react";
import { BsFillBarChartFill } from "react-icons/bs";

export const navItems = [
  {
    title: "Dashboard",
    icon: BsFillBarChartFill,
    href: "/organization/dashboard",
  },
  {
    title: "Orçamentos",
    icon: ReceiptText,
    href: "/organization/estimates",
  },
  {
    title: "Serviços",
    icon: Inbox,
    href: "/organization/projects",
  },
  {
    title: "Configurações",
    icon: SettingsIcon,
    href: "/organization/settings",
  },
];
