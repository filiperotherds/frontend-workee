import { api } from "./api-client";

interface GetSiteResponse {
    id: string;
    name: string;
    slug: string;
    avatarUrl: string | null;
    phone: string | null;
    email: string | null;
    city: string;
    latitude: number;
    longitude: number;
    active: boolean | null;
    organizationId: string | null;
}

export async function getSite({ slug }: { slug: string }) {
    if (!slug || slug === 'undefined') return null;

    const result = await api.get("sites", {
        searchParams: { slug }
    }).json<GetSiteResponse>();

    return result;
}
