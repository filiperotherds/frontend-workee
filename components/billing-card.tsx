import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const billingTotal = 8273.24;

export default function BillingCard() {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-2">
      <h1 className="text-sm text-muted-foreground font-medium">
        Total Faturado
      </h1>

      <div className="w-full flex flex-row items-center justify-between">
        <span className="text-5xl text-primary font-semibold">
          R${billingTotal}
        </span>

        <Link href="/organization/">
          <Button variant={"ghost"} size={"icon-sm"}>
            <ChevronRight />
          </Button>
        </Link>
      </div>

      <span className="text-xs text-muted-foreground font-medium">
        Nos últimos 30 dias
      </span>
    </div>
  );
}
