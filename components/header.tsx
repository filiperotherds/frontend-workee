import { Notification } from "./notification";
import { ProfileButtonDesktop } from "./profile/profile-button-desktop";
import Image from "next/image";
import jobbleLogo from "@/assets/jobble-logo.png";

export function Header() {
  return (
    <div className="md:sticky top-0 z-20 w-full h-16 px-8 flex items-center justify-between bg-secondary">
      <div className="flex flex-row items-center">
        <Image src={jobbleLogo} alt="Jobble" className="w-32" />
      </div>

      <div className="flex items-center">
        <Notification />
        <div className="hidden md:flex md:ml-8">
          <ProfileButtonDesktop />
        </div>
      </div>
    </div>
  );
}
