import { Notification } from "./notification";
import { HeaderTitle } from "./header-title";
import { ProfileButtonDesktop } from "./profile/profile-button-desktop";

export function Header() {
  return (
    <div className="md:sticky top-0 z-20 w-full h-16 px-8 flex items-center justify-between rounded-t-lg bg-secondary">
      <HeaderTitle />

      <div className="flex items-center">
        <Notification />
        <div className="hidden md:flex md:ml-8">
          <ProfileButtonDesktop />
        </div>
      </div>
    </div>
  );
}
