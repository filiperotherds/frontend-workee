import { ArrowUpRight, MailPlus } from "lucide-react";
import { Card } from "./ui/card";

export function PendingCard() {
  return (
    <Card className="w-full border-border bg-card p-4 transition-colors hover:bg-card/80">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Novas Solicitações</p>
          <p className="text-2xl font-bold text-foreground">8</p>
          <div className="flex items-center gap-1 text-xs font-medium">
            <ArrowUpRight className="h-3 w-3 text-green-500" />
            <span className="text-green-500">+12.5</span>
            <span className="text-muted-foreground">
              em relação ao dia anterior
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-theme-secondary rounded-lg -translate-x-1 translate-y-1" />
          <div className="block relative rounded-lg bg-theme-primary p-2">
            <MailPlus className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </Card>
  );
}
