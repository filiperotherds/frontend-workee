"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";
import { FolderOpen, RefreshCcw, Search } from "lucide-react";

interface EstimateSummary {
  id: string;
  estimateNo: string;
  date: string;
  dueDate: string;
  tax: number;
  customer: {
    name: string;
    address: string;
  };
  items: {
    qty: number;
    description: string;
    unitPrice: number;
  }[];
}

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



        <Button
          size={"icon"}
          variant={"ghost"}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <RefreshCcw />
        </Button>
      </div>

      <div className="flex flex-col space-y-8 flex-1 overflow-y-auto min-h-0">
        <div className="flex flex-col space-y-4">
          <label className="text-xs text-muted-foreground">
            Solicitações Pendentes
          </label>

          <div className="flex flex-col space-y-1">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="size-10 flex items-center justify-center rounded-lg bg-secondary">
                <FolderOpen size={20} className="text-muted-foreground" />
              </div>

              <h1 className="text-xs text-primary">Sem Solicitações Ainda</h1>

              <p className="text-xs text-muted-foreground text-center">
                Suas solicitações de orçamentos pendentes aparecerão aqui.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <label className="text-xs text-muted-foreground">
            Orçamentos Ativos
          </label>

          <div className="flex flex-col space-y-1">
            {estimates.map((estimate) => {
              const total =
                estimate.items.reduce(
                  (sum, item) => sum + item.unitPrice * item.qty,
                  0
                ) + estimate.tax;

              const date = new Date(estimate.date);
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
                  <div className="flex justify-between items-start mb-1">
                    <span className="font-medium text-sm truncate">
                      {estimate.estimateNo} - {estimate.customer.name}
                    </span>

                    <span className="text-xs text-muted-foreground">
                      {formattedDate}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground truncate">
                    {estimate.items[0].description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
