import DashboardCard from "./dashboard-card";
import { Separator } from "./ui/separator";

const exempleList = [
  {
    title: "Exibições",
    variation: 12.3,
    indicator: "437",
  },
  {
    title: "Conversão",
    variation: -7.4,
    indicator: "27.4%",
  },
  {
    title: "Avaliações",
    variation: 9.3,
    indicator: "4.7",
  },
];

export default function DashboardCards() {
  return (
    <div className="@container/main w-full">
      <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        {exempleList.map((card, index) => (
          <div key={index}>
            <DashboardCard
              title={card.title}
              variation={card.variation}
              indicator={card.indicator}
            />
            {index < exempleList.length - 1 && <Separator className="mt-4" />}
          </div>
        ))}
      </div>
    </div>
  );
}
