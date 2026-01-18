"use client";

import { BalanceCard } from "@/components/balance-card";
import { BillingCard } from "@/components/billing-card";
import { SolicitationList } from "@/components/solicitation-list";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Dashboard() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="w-full flex items-center justify-center pb-28">
        <div className="w-full h-full flex flex-col items-start justify-start space-y-8">
          <BillingCard />

          <Separator />

          <BalanceCard />

          <SolicitationList />
        </div>
      </div>
    );
  }

  return (
    <div>
      
    </div>
  )
}
