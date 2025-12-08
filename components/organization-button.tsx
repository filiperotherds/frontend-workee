import { Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const organization = {
  name: "Chaveiro Panorama",
  role: "Proprietário",
  avatarUrl: null,
};

function getInitials(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return initials;
}

export default function OrganizationButton() {
  return (
    <Link href="/organization/settings" className="w-full">
      <div className="w-full p-2 flex items-center gap-3 outline-none bg-sidebar-accent hover:bg-sidebar-accent/80 rounded-md">
        <Avatar>
          {organization.avatarUrl && (
            <AvatarImage src={organization.avatarUrl} />
          )}
          {organization.name && (
            <AvatarFallback>{getInitials(organization.name)}</AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col items-start">
          <span className="text-sm font-medium">{organization.name}</span>
          <span className="text-xs font-medium text-muted-foreground">
            {organization.role}
          </span>
        </div>
        <Settings className="size-4 text-muted-foreground" />
      </div>
    </Link>
  );
}
