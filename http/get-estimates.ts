import { api } from "./api-client";

interface GetEstimatesResponse {
    organization: {
        name: string | null;
        avatarUrl: string | null;
        cnpj: string | null;
        email: string | null;
    } | null;
    role: string;
}

export async function getEstimates() {
    const result = await api.get("estimates").json<GetEstimatesResponse>();

    return result;
}
