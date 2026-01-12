import { House, Inbox, ReceiptText, SettingsIcon } from "lucide-react";

export const navItems = [
  {
    title: "Início",
    icon: House,
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
    title: "Opções",
    icon: SettingsIcon,
    href: "/organization/settings",
  },
];
