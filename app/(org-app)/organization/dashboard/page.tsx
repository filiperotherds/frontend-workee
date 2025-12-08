import PromotionalCard from "@/components/promotional-card";

export default async function Dashboard() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full max-w-[1200px] flex flex-col items-start justify-start space-y-4">
        <PromotionalCard />
      </div>
    </div>
  );
}
