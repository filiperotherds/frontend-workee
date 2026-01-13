import { EstimateCard } from "@/components/estimate-card";
import { SolicitationList } from "@/components/solicitation-list";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HandHelping, ReceiptText, ScrollText } from "lucide-react";
import Link from "next/link";

export default function Estimates() {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-8">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start space-y-0.5">
          <h1 className="text-xl text-primary font-bold">Orçamentos</h1>
          <span className="text-xs text-muted-foreground">
            A lista de orçamentos do seu negócio.
          </span>
        </div>

        <Button variant={"ghost"} size={"icon"}>
          <ScrollText className="text-muted-foreground" />
        </Button>
      </div>

      <Link href={'/organization/estimates/create'} className="w-full">
        <Button className="w-full bg-zinc-700" variant={"default"} size={"lg"}>
          <ReceiptText />
          Novo Orçamento
        </Button>
      </Link>

      <SolicitationList isCompact />

      <EstimateCard />
    </div>
  );
}
