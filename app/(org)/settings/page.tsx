import { OrganizationButton } from "@/components/organization-button";
import { PlanCard } from "@/components/plan-card";
import { ProfileButtonMobile } from "@/components/profile/profile-button-mobile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { BookUser, MapPinHouse, Store, User, Users } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const menuOptions = [
  {
    title: "Endereços",
    icon: MapPinHouse,
    href: "/organization/address",
  },
  {
    title: "Contatos",
    icon: BookUser,
    href: "/organization/contact",
  },
  {
    title: "Equipe",
    icon: Users,
    href: "/organization/members",
  },
];

export default function Organization() {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-6">
      <div className="w-full flex flex-col items-start justify-start gap-3">
        <div className="flex flex-row items-center justify-center space-x-2  text-muted-foreground">
          <User size={16} />
          <span className="text-sm font-semibold">Você</span>
        </div>
        <Suspense fallback={<Skeleton className="w-full h-12" />}>
          <ProfileButtonMobile />
        </Suspense>
      </div>

      <Separator />

      <div className="w-full flex flex-col items-start justify-start gap-3">
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="flex flex-row items-center justify-center space-x-2  text-muted-foreground">
            <Store size={16} />
            <span className="text-sm font-semibold">Sua Empresa</span>
          </div>

          <PlanCard />

          <Suspense fallback={<Skeleton className="w-full h-12" />}>
            <OrganizationButton />
          </Suspense>
        </div>

        {menuOptions.map((option) => (
          <Link key={option.href} href={option.href} className="w-full">
            <Button
              className="w-full justify-start text-primary font-medium"
              variant={"ghost"}
              size={"default"}
            >
              <option.icon />
              {option.title}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}
