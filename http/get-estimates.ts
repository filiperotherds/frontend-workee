import { api } from "./api-client";

interface GetEstimatesResponse {
  id: string;
  estimateNo: number;
  description: string | null;
  status: "pending" | "approved" | "refused";
  createdAt: string;
  validity: string | null;
  deliveryDeadline: string | null;
  warrantyTerms: string | null;
  paymentMethod: "";
  installments: number;
  downPayment: string | number | null;
  organizationId: string | null;
  customerId: string | null;

  customer: {
    name: string | null;
    email: string | null;
    address: string | null;
    phone: string | null;
  } | null;

  items: {
    id: string;
    description: string;
    quantity: number;
    unitValue: number;
    estimateId: string;
    productId: string | null;
  }[];
};

export async function getEstimates() {
  const result = await api.get("estimates").json<GetEstimatesResponse[]>();

  return result;
}
