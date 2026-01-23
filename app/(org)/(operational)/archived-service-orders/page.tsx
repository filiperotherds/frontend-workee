import { getOrganization } from "@/http/get-organization";

export default async function ArchivedEstimates() {
  const membership = await getOrganization();

  return (
    <>
    </>
  );
}
