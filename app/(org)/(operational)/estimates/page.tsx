import { getOrganization } from "@/http/get-organization";
import EstimatesClient from "./estimates-client";
import { getEstimates } from "@/http/get-estimates";

export default async function EstimatesPage() {
  const membership = await getOrganization();

  const estimates = await getEstimates();

  const {  } = estimates;

  return (
    <EstimatesClient
      organization={membership.organization}
      estimates={estimates}
    />
  );
}
