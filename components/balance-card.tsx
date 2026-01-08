import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const saldoTotal = formatCurrency(45327.78);

export function BalanceCard() {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-1">
      <h1 className="text-sm text-muted-foreground font-medium">Saldo Jobble</h1>

      <div className="w-full flex flex-row items-center justify-between">
        <span className="text-2xl text-primary font-semibold">
          {saldoTotal}
        </span>

        <Link href="/organization/">
          <Button variant={"ghost"} size={"icon-sm"}>
            <ChevronRight />
          </Button>
        </Link>
      </div>

      <span className="text-xs font-medium text-muted-foreground">
        Disponível para saque
      </span>
    </div>
  );
}
