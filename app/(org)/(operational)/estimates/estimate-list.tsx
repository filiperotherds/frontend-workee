"use client";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { FolderOpen, History, Search } from "lucide-react";
import Link from "next/link";

interface EstimateSummary {
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
[];

interface EstimateListProps {
  estimates: EstimateSummary[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function EstimateList({
  estimates,
  selectedId,
  onSelect,
}: EstimateListProps) {
  return (
    <div className="w-96 h-full flex flex-col bg-white rounded-lg border border-border/60 p-4 gap-4">
      <div className="flex flex-row items-center justify-start gap-1">
        <InputGroup>
          <InputGroupInput placeholder="Pesquisar..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>

        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/estimates/history">
              <Button
                size={"icon"}
                variant={"ghost"}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <History />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Histórico</p>
          </TooltipContent>
        </Tooltip>
      </div>

      <div className="flex flex-col space-y-8 flex-1 overflow-y-auto min-h-0">
        <div className="flex flex-col space-y-4">
          <label className="text-xs text-muted-foreground">
            Solicitações Pendentes
          </label>

          <h1 className="text-xs text-primary text-center">
            Sem novas solicitações.
          </h1>
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-xs text-muted-foreground">
            Orçamentos Ativos
          </label>

          <div className="flex flex-col space-y-1">
            {estimates.length < 1 ? (
              <div className="flex flex-col space-y-1">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <div className="size-10 flex items-center justify-center rounded-lg bg-secondary">
                    <FolderOpen size={20} className="text-muted-foreground" />
                  </div>

                  <h1 className="text-xs text-primary">
                    Sem orçamentos ativos
                  </h1>

                  <p className="text-xs text-muted-foreground text-center">
                    Sua lista de orçamentos ativos aparecerá aqui.
                  </p>
                </div>
              </div>
            ) : (
              estimates.map((estimate) => {
                const total = estimate.items.reduce(
                  (sum, item) => sum + item.unitValue * item.quantity,
                  0
                );

                const date = new Date(estimate.createdAt);
                const formattedDate = date.toLocaleDateString("pt-BR", {
                  month: "short",
                  day: "numeric",
                });

                const isActive = estimate.id === selectedId;

                return (
                  <button
                    key={estimate.id}
                    onClick={() => onSelect(estimate.id)}
                    className={cn(
                      "group w-full bg-white rounded-md text-left py-2 px-3 hover:bg-zinc-100 transition-colors",
                      isActive && "bg-zinc-100"
                    )}
                  >
                    <div className="flex justify-between items-start gap-4 mb-1">
                      <span className="font-medium text-sm truncate">
                        {estimate.customer?.name}
                      </span>

                      <span className="text-xs text-muted-foreground whitespace-nowrap shrink-0">
                        {formattedDate}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground truncate">
                      {estimate.items[0].description}
                    </p>
                  </button>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
