import DashboardCards from "@/components/dashboard-cards";
import PromotionalCard from "@/components/welcome-card";

export default async function Dashboard() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] h-full flex flex-col items-start justify-start space-y-4">
        <PromotionalCard />
        <DashboardCards />
      </div>
    </div>
  );
}
