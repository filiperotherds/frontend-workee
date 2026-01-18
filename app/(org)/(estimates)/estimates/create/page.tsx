import { Button } from "@/components/ui/button";
import { ReceiptText } from "lucide-react";

export default function CreateEstimate() {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-8">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start space-y-0.5">
          <h1 className="text-xl text-primary font-bold">Novo Orçamento</h1>
          <span className="text-xs text-muted-foreground">
            Crie e compartilhe um novo orçamento.
          </span>
        </div>

        <Button variant={"ghost"} size={"icon"}>
          <ReceiptText className="text-muted-foreground" />
        </Button>
      </div>
    </div>
  );
}
