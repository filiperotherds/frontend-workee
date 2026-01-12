import { api } from "./api-client";

interface GetOrganizationResponse {
    organization: {
        type: "INDIVIDUAL" | "ORGANIZATION";
        name: string | null;
        avatarUrl: string | null;
    } | null;
    role: string;
}

export async function getOrganization() {
  const result = await api.get("organizations").json<GetOrganizationResponse>();

  return result;
}
