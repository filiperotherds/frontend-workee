import DashboardCards from "@/components/dashboard-cards";
import EstimateCard from "@/components/estimate-card";

export default async function Dashboard() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] h-full flex flex-col items-start justify-start space-y-8">
        <EstimateCard totalEstimate={8254.94}/>
        <DashboardCards />
      </div>
    </div>
  );
}
