import { auth } from "@/auth/auth";
import { ProfileButton } from "./profile-button";

export async function ProfileButtonServer() {
  const { user } = await auth();
  return <ProfileButton user={user} />;
}
