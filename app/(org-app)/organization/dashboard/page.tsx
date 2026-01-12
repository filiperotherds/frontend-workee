import { BalanceCard } from "@/components/balance-card";
import { BillingCard } from "@/components/billing-card";
import { SolicitationList } from "@/components/solicitation-list";
import { Separator } from "@/components/ui/separator";

export default async function Dashboard() {
  return (
    <div className="w-full flex items-center justify-center pb-28">
      <div className="w-full max-w-[1200px] h-full flex flex-col items-start justify-start space-y-8">
        <BillingCard />

        <Separator />

        <BalanceCard />

        <SolicitationList />
      </div>
    </div>
  );
}
