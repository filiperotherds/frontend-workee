import { api } from "./api-client";

interface SignUpRequest {
  name: string;
  email: string;
  password: string;
  accountType: "INDIVIDUAL" | "ORGANIZATION";
  orgType?: "PROVIDER" | undefined;
}

type SignUpResponse = void;

export async function organizationSignUp({
  name,
  email,
  password,
  accountType,
  orgType,
}: SignUpRequest): Promise<SignUpResponse> {
  await api.post("auth/organization/signup", {
    json: {
      name,
      email,
      password,
      accountType,
      orgType,
    },
  });
}
