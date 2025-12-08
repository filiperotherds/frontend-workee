import { api } from "./api-client";

interface GetOrganizationResponse {
  id: string;
  name: string | null;
  email: string;
  avatarUrl: string | null;
  accountType: "INDIVIDUAL" | "ORGANIZATION";
  userProfile: {
    id: string;
  };
}

export async function getOrganization() {
  const result = await api.get("organization").json<GetOrganizationResponse>();

  return result;
}
