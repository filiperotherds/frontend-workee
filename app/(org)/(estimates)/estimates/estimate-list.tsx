"use client";

import { cn } from "@/lib/utils";

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
    <aside className="w-[320px] border-r border-border bg-background">
      <div className="p-4 border-b border-border">
        <h2 className="text-sm font-bold text-muted-foreground">Orçamentos</h2>
      </div>

      <div className="flex flex-col divide-y">
        {estimates.map((estimate) => {
          const total =
            estimate.items.reduce(
              (sum, item) => sum + item.unitPrice * item.qty,
              0
            ) + estimate.tax;

          const isActive = estimate.id === selectedId;

          return (
            <button
              key={estimate.id}
              onClick={() => onSelect(estimate.id)}
              className={cn(
                "w-full text-left p-4 transition-colors hover:bg-muted",
                isActive && "bg-muted"
              )}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-sm">
                  #{estimate.estimateNo}
                </span>
                <span className="text-xs text-muted-foreground">
                  {estimate.date}
                </span>
              </div>

              <p className="text-sm text-gray-700 truncate">
                {estimate.customer.name}
              </p>

              <p className="text-sm font-semibold text-primary mt-2">
                R${total.toFixed(2)}
              </p>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
