import { api } from "./api-client";

interface GetProfileResponse {
  id: string;
  name: string | null;
  email: string;
  avatarUrl: string | null;
  userProfile: {
    id: string;
  };
}

export async function getProfile() {
  const result = await api.get("users/profile").json<GetProfileResponse>();

  return result;
}
