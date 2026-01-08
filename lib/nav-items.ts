import { ReceiptText, Store, Users } from "lucide-react";
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
    title: "Equipe",
    icon: Users,
    href: "/organization/projects",
  },
  {
    title: "Empresa",
    icon: Store,
    href: "/organization",
  },
];
