import { ArrowDown, ArrowUp } from "lucide-react";

type DashboardCardProps = {
  title: string;
  variation: number;
  indicator: string;
};

export default function DashboardCard({
  title,
  indicator,
  variation,
}: DashboardCardProps) {
  return (
    <div className="w-full h-20 flex flex-row space-x-4 items-start justify-start">
      <div
        className={`h-full w-0.5 ${
          variation > 0 ? "bg-green-500" : "bg-destructive"
        }`}
      />

      <div className="w-full h-full flex flex-col items-start justify-between">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <h1 className="font-medium leading-4">{title}</h1>
            <span className="text-sm text-muted-foreground font-semibold">
              Total
            </span>
          </div>

          <div
            className={`px-2 py-0.5 flex flex-row items-center justify-center space-x-1 rounded-md text-sm font-medium ${
              variation > 0
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-destructive"
            }`}
          >
            <span>{variation}%</span>
            <div
              className={`p-0.5 rounded-full ${
                variation > 0
                  ? "text-green-100 bg-green-600"
                  : "text-red-100 bg-destructive"
              }`}
            >
              {variation > 0 ? (
                <ArrowUp size={10} strokeWidth={3} />
              ) : (
                <ArrowDown size={10} strokeWidth={3} />
              )}
            </div>
          </div>
        </div>

        <span className="text-3xl text-primary font-semibold">{indicator}</span>
      </div>
    </div>
  );
}
