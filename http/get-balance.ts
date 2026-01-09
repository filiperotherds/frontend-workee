import { api } from "./api-client";

interface GetProfileResponse {
  id: string;
  name: string | null;
  email: string;
  avatarUrl: string | null;
  accountType: "INDIVIDUAL" | "ORGANIZATION";
  userProfile: {
    id: string;
  };
}

export async function getBalance() {
  const result = await api.get("users/profile").json<GetProfileResponse>();

  return result;
}
