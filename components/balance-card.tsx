import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight, PiggyBank } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const saldoTotal = formatCurrency(45327.78);

export function BalanceCard() {
  return (
    <div className="w-full flex flex-row items-center justify-start space-x-4 p-4 rounded-2xl shadow-lg">
      <div className="size-14 flex items-center justify-center bg-green-50 rounded-full">
        <PiggyBank className="text-green-700" size={28} />
      </div>

      <div className="flex flex-col items-start justify-center space-y-1">
        <span className="text-xs font-medium text-muted-foreground">
          Saldo disponível para saque
        </span>

        <span className="text-2xl text-primary font-bold">
          {saldoTotal}
        </span>
      </div>
    </div>
  );
}
