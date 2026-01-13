import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ChevronRight } from "lucide-react";
import { auth } from "@/auth/auth";

function getInitials(name: string): string {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .slice(0, 2)
    .join("");

  return initials;
}

export async function ProfileButtonMobile() {
  const { user } = await auth();

  return (
    <Link href={"/user/settings"} className="w-full">
      <div className="w-full flex flex-row items-center justify-between p-2">
        <div className="flex flex-row items-center justify-center gap-3">
          <Avatar>
            {user.avatarUrl && <AvatarImage src={user.avatarUrl} />}
            {user.name && (
              <AvatarFallback>{getInitials(user.name)}</AvatarFallback>
            )}
          </Avatar>

          <div className="flex flex-col items-start">
            <span className="text-sm font-medium">{user.name}</span>
            <span className="text-xs font-medium text-muted-foreground">
              {user.email}
            </span>
          </div>
        </div>

        <ChevronRight size={16} className="text-muted-foreground" />
      </div>
    </Link>
  );
}
