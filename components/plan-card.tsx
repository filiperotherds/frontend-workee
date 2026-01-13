import Image from "next/image";

import diamondIcon from "@/assets/plans/diamond.png";
import briefcaseIcon from "@/assets/plans/briefcase.png";
import planeIcon from "@/assets/plans/paper-plane.png";
import { Calendar } from "lucide-react";

export function PlanCard() {
  return (
    <div className="w-full flex flex-row items-center justify-start gap-6 p-4 rounded-xl border-b border-l border-border shadow-xs">
      <Image src={diamondIcon} alt="Plan" className="size-24 -m-2" />

      <div className="flex flex-col items-start justify-between space-y-2">
        <div className="flex flex-col items-start justify-start">
          <span className="text-xs font-medium text-muted-foreground">
            Seu Plano
          </span>

          <h1 className="text-xl font-bold text-primary">Profissional</h1>
        </div>

        <div className="flex flex-row items-center justify-center gap-2 text-muted-foreground">
          <Calendar size={16} />

          <span className="text-sm font-medium">Renova em 01/02/2026</span>
        </div>
      </div>
    </div>
  );
}
