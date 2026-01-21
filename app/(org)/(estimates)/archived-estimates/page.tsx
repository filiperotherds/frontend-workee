import { getOrganization } from "@/http/get-organization";
import EstimatesClient from "../estimates/estimates-client";

export default async function ArchivedEstimates() {
  const membership = await getOrganization();

  const estimates = [
    {
      id: "1",
      estimateNo: "EST-001",
      date: "2024-01-15",
      dueDate: "2024-02-15",
      tax: 25,
      customer: {
        name: "Acme Corp",
        address: "123 Business St, City, State 12345",
      },
      items: [
        {
          qty: 2,
          description: "Web Development Services",
          unitPrice: 5000,
        },
        {
          qty: 1,
          description: "UI/UX Design",
          unitPrice: 2500,
        },
      ],
    },
    {
      id: "2",
      estimateNo: "EST-002",
      date: "2024-01-18",
      dueDate: "2024-02-18",
      tax: 25,
      customer: {
        name: "Tech Solutions Inc",
        address: "456 Innovation Ave, Tech City, State 67890",
      },
      items: [
        {
          qty: 5,
          description: "Consulting Hours",
          unitPrice: 250,
        },
      ],
    },
  ];

  return (
    <EstimatesClient
      organization={membership.organization}
      estimates={estimates}
    />
  );
}
