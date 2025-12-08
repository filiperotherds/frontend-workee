import Image from "next/image";
import Link from "next/link";
import jobbleWordmark from "@/public/jobble-wordmark.svg";
import { ProfileButton } from "./profile-button";
import Notification from "./notification";

export default function Header() {
  return (
    <div className="sticky top-0 z-20 w-full h-16 px-8 flex items-center justify-between rounded-t-lg bg-white shadow-sm">
      <div className="flex items-center justify-center">
        <Link href="/sign-in" className="flex flex-row items-end justify-start gap-2">
          <Image
            src={jobbleWordmark}
            alt="Jobble"
            className="w-20 dark:invert"
          />
          <span className="text-sm font-bold text-muted-foreground">
            Beta
          </span>
        </Link>
      </div>

      <div className="flex items-center space-x-4 md:space-x-8">
        <Notification />
        <ProfileButton />
      </div>
    </div>
  );
}
