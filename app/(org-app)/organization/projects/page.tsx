import { ServiceTickets } from "@/components/service-tickets";
import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";

export default function Projects() {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-8 pb-26">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start space-y-0.5">
          <h1 className="text-xl text-primary font-bold">Serviços</h1>
          <span className="text-xs text-muted-foreground">
            A lista de serviços ativos do seu negócio.
          </span>
        </div>

        <Button variant={"ghost"} size={"icon"}>
          <ScrollText className="text-muted-foreground" />
        </Button>
      </div>

      <ServiceTickets />
    </div>
  );
}
