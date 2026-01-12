import { ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import { getOrganization } from "@/http/get-organization";

function getInitials(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return initials;
}

export async function OrganizationButton() {
  const membership = await getOrganization();

  const organization = membership.organization;

  return (
    <Link href="/organization/settings" className="w-full">
      <div className="w-full p-2 flex items-center justify-between outline-none rounded-md">
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-theme-secondary rounded-full -translate-x-1 translate-y-1" />

            <Avatar>
              {organization?.avatarUrl && (
                <AvatarImage src={organization.avatarUrl} />
              )}
              {organization?.name && (
                <AvatarFallback className="bg-theme-primary">
                  {getInitials(organization.name)}
                </AvatarFallback>
              )}
            </Avatar>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-sm font-semibold">{organization?.name}</span>
            <span className="text-xs font-medium text-muted-foreground">
              {membership.role === "ADMIN" ? "Proprietário" : "Membro"}
            </span>
          </div>
        </div>

        <ChevronRight className="size-4 text-muted-foreground" />
      </div>
    </Link>
  );
}
