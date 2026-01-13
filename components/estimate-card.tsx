import { formatter } from "@/lib/number-formatter";
import { Separator } from "./ui/separator";

interface Estimate {
  id: string;
  customer: string;
  price: number;
  service: string;
  date: Date;
}

const estimates: Estimate[] = [
  {
    id: "EST-2026-001",
    customer: "Maria Jose",
    price: 50000,
    service: "Serviço 1",
    date: new Date("2024-01-15"),
  },
  {
    id: "EST-2026-002",
    customer: "Gabriel Ribeiro",
    price: 75000,
    service: "Serviço 2",
    date: new Date("2024-01-20"),
  },
  {
    id: "EST-2026-003",
    customer: "Filipe Rother",
    price: 120000,
    service: "Serviço 3",
    date: new Date("2024-01-25"),
  },
];

export function EstimateCard() {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4">
      {estimates.map((estimate) => (
        <div
          key={estimate.id}
          className="w-full flex flex-col items-start justify-start"
        >
          <span className="text-sm text-muted-foreground font-medium">
            {estimate.id} • {estimate.customer}
          </span>

          <h1 className="text-2xl text-primary font-bold">
            R${formatter.format(estimate.price / 100)}
          </h1>

          <div className="w-full mt-2 flex flex-row items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {estimate.service}
            </span>

            <span className="text-sm text-muted-foreground">
              {estimate.date.toLocaleDateString("pt-BR")}
            </span>
          </div>
          {estimate.id !== estimates[estimates.length - 1].id && (
            <Separator className="mt-4" />
          )}
        </div>
      ))}
    </div>
  );
}
