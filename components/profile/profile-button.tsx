"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { ProfileButtonDesktop } from "./profile-button-desktop";
import { ProfileButtonMobile } from "./profile-button-mobile";

export function ProfileButton({ user }: any) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <ProfileButtonMobile user={user} />;
  }

  return <ProfileButtonDesktop user={user} />;
}
