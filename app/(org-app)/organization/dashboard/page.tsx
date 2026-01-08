import { BalanceCard } from "@/components/balance-card";
import { BillingCard } from "@/components/billing-card";
import { PendingCard } from "@/components/pending-card";
import { Separator } from "@/components/ui/separator";

export default async function Dashboard() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] h-full flex flex-col items-start justify-start space-y-8">
        <BillingCard />

        <Separator />

        <BalanceCard />

        <PendingCard />
      </div>
    </div>
  );
}
