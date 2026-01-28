"use client";

import { forwardRef } from "react";
import Image from "next/image";
import jobbleLogo from "@/assets/jobble-logo.png";
import { formatCNPJ } from "@/lib/cnpj-formatter";

interface Estimate {
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
}

interface EstimateDocumentProps {
  organization: {
    name: string | null;
    avatarUrl: string | null;
    cnpj: string | null;
    email: string | null;
  } | null;
  estimate: Estimate;
}

const EstimateDocument = forwardRef<HTMLDivElement, EstimateDocumentProps>(
  ({ organization, estimate }, ref) => {
    const cnpj = organization?.cnpj ? formatCNPJ(organization.cnpj) : null;

    const subtotal = estimate.items.reduce(
      (acc, item) => acc + item.quantity * item.unitValue,
      0
    );

    const tax = subtotal * 0.05;
    const total = subtotal + tax;

    return (
      <div
        ref={ref}
        className="bg-white w-[800px] p-10 shadow-lg print:shadow-none print:w-full"
      >
        {/* Header */}
        <div className="flex justify-between items-start mb-14">
          <div>
            <h1 className="font-bold text-xl text-gray-800">
              {organization?.name}
            </h1>
            <p className="text-sm text-gray-600">{cnpj}</p>
            <p className="text-sm text-gray-600">{organization?.email}</p>
          </div>

          {organization?.avatarUrl ? (
            <img
              src={organization?.avatarUrl}
              alt="Organization Logo"
              className="h-16 opacity-70 grayscale"
            />
          ) : (
            <></>
          )}
        </div>

        <h2 className="text-3xl font-bold text-right text-zinc-700 mb-12">
          ORÇAMENTO {estimate.estimateNo}
        </h2>

        {/* Cliente */}
        <div className="flex justify-between mb-12">
          <div>
            <p className="text-xs text-muted-foreground font-semibold mb-1">
              Cliente
            </p>
            <p className="text-lg font-bold">{estimate?.customer?.name}</p>
            <p className="text-sm text-gray-600 max-w-60">
              {estimate?.customer?.address}
            </p>
          </div>

          <div className="space-y-1 text-sm">
            <div className="flex justify-between gap-6">
              <span className="font-semibold text-muted-foreground">
                Data do Orçamento
              </span>
              <span>{estimate.createdAt}</span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="font-semibold text-muted-foreground">
                Prazo de Entrega
              </span>
              <span> {estimate?.deliveryDeadline} </span>
            </div>
            <div className="flex justify-between gap-6">
              <span className="font-semibold text-muted-foreground">
                Garantia
              </span>
              <span> {estimate?.warrantyTerms} </span>
            </div>
          </div>
        </div>

        {/* Tabela */}
        <table className="w-full mb-10">
          <thead>
            <tr className="bg-zinc-700 text-white">
              <th className="py-2 px-3 text-left w-16">QTD</th>
              <th className="py-2 px-3 text-left">Descrição</th>
              <th className="py-2 px-3 text-right">Unitário</th>
              <th className="py-2 px-3 text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            {estimate.items.map((item, i) => (
              <tr key={i} className="border-b text-sm">
                <td className="py-3 px-3 text-center font-bold">
                  {item.quantity}
                </td>
                <td className="py-3 px-3">{item.description}</td>
                <td className="py-3 px-3 text-right">
                  R${item.unitValue.toFixed(2)}
                </td>
                <td className="py-3 px-3 text-right font-semibold">
                  R${(item.quantity * item.unitValue).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Totais */}
        <div className="flex justify-end mb-16">
          <div className="w-64 space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Subtotal</span>
              <span>R${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Taxas</span>
              <span>R${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold border-t pt-3">
              <span>Total</span>
              <span>R${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t pt-4 flex justify-between items-end text-xs text-gray-500">
          <div>
            <p className="font-bold text-muted-foreground mb-1">
              Termos e Condições
            </p>
            <p>Orçamento válido por 14 dias</p>
          </div>

          <span className="uppercase text-[10px] opacity-70">
            Desenvolvido por Jobble
          </span>
        </div>
      </div>
    );
  }
);

EstimateDocument.displayName = "EstimateDocument";

export default EstimateDocument;
