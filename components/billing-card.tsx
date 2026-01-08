import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const billingTotal = formatCurrency(8273.24);

const date = new Date().toLocaleDateString("pt-BR");

export function BillingCard() {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-2">
      <h1 className="text-sm text-muted-foreground font-medium">
        Caixa {date}
      </h1>

      <div className="w-full flex flex-row items-center justify-between">
        <span className="text-5xl text-primary font-semibold">
          {billingTotal}
        </span>

        <Link href="/organization/">
          <Button variant={"ghost"} size={"icon-sm"}>
            <ChevronRight />
          </Button>
        </Link>
      </div>

      <div className="flex flex-row items-center justify-start">
        <div className="flex flex-row items-center justify-center space-x-0.5">
          <ArrowUpRight size={14} className="text-green-500" />

          <span className="text-xs font-medium text-green-500">+12.5%</span>
        </div>

        <span className="text-xs font-medium text-muted-foreground">
          &nbsp; em relação ao dia anterior
        </span>
      </div>
    </div>
  );
}
