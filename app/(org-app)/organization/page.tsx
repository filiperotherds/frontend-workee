import OrganizationButton from "@/components/organization-button";
import { ProfileButtonServer } from "@/components/profile/profile-button-server";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BadgeDollarSign, CreditCard, Phone } from "lucide-react";
import Link from "next/link";

const menuOptions = [
  {
    title: "Configurações de Custos",
    icon: BadgeDollarSign,
    href: "/organization/costs-config",
  },
  {
    title: "Contato",
    icon: Phone,
    href: "/organization/contact",
  },
  {
    title: "Plano",
    icon: CreditCard,
    href: "/organization/plan",
  },
];

export default function Organization() {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-6">
      <div className="w-full flex flex-col items-start justify-start gap-3">
        <span className="text-sm font-semibold text-muted-foreground">
          Você
        </span>
        <ProfileButtonServer />
      </div>

      <Separator />

      <div className="w-full flex flex-col items-start justify-start gap-3">
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <span className="text-sm font-semibold text-muted-foreground">
            Sua Empresa
          </span>
          <OrganizationButton />
        </div>

        {menuOptions.map((option) => (
          <Link key={option.href} href={option.href} className="w-full">
            <Button className="w-full justify-start text-primary" variant={"ghost"} size={"default"}>
              <option.icon />
              {option.title}
            </Button>
          </Link>
        ))}

        {/* <Link href={"/organization/website"} className="w-full">
          <Button className="w-full px-3 justify-between" variant={"secondary"}>
            <div className="flex flex-row items-center justify-center gap-2">
              <Monitor />
              Seu Site
            </div>

            <span className="text-xs text-destructive font-semibold">
              Novo!
            </span>
          </Button>
        </Link> */}
      </div>
    </div>
  );
}
