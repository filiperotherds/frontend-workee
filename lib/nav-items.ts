import { Inbox, ReceiptText, Store } from "lucide-react";
import { BsFillBarChartFill } from "react-icons/bs";

export const navItems = [
  {
    title: "Dashboard",
    icon: BsFillBarChartFill,
    href: "/organization/dashboard",
  },
  {
    title: "Orçamento",
    icon: ReceiptText,
    href: "/organization/estimates",
  },
  {
    title: "Serviços",
    icon: Inbox,
    href: "/organization/projects",
  },
  {
    title: "Empresa",
    icon: Store,
    href: "/organization/settings",
  },
];
