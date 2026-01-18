"use client";

import { EstimateCard } from "@/components/estimate-card";
import { EstimateComponent } from "@/components/estimate-component";
import { EstimatesList } from "@/components/estimates-list";
import { SolicitationList } from "@/components/solicitation-list";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useIsMobile } from "@/hooks/use-mobile";
import { Archive, ReceiptText, ScrollText } from "lucide-react";
import Link from "next/link";

export default function Estimates() {
  const isMobile = useIsMobile();

  if (isMobile) {
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

        <Link href={"/organization/estimates/create"} className="w-full">
          <Button
            className="w-full bg-zinc-700"
            variant={"default"}
            size={"lg"}
          >
            <ReceiptText />
            Novo Orçamento
          </Button>
        </Link>

        <SolicitationList isCompact />

        <EstimateCard />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-start justify-start space-y-8">
      <div className="w-full flex flex-row items-center justify-between">
        <div className="flex flex-col items-start justify-start space-y-0.5">
          <h1 className="text-xl text-primary font-bold">Orçamentos</h1>
          <span className="text-xs text-muted-foreground">
            A lista de orçamentos do seu negócio.
          </span>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4">
          <Link href="/new-estimate">
            <Button variant={"outline"} size={"sm"}>
              <Archive />
              Arquivados
            </Button>
          </Link>

          <Link href="/new-estimate">
            <Button
              variant={"default"}
              size={"sm"}
              className="bg-zinc-700 hover:bg-zinc-600"
            >
              <ReceiptText />
              Novo Orçamento
            </Button>
          </Link>
        </div>
      </div>

      <div className="w-full h-full flex flex-row items-start justify-start border-t border-border">
        <EstimatesList />

        <EstimateComponent />
      </div>
    </div>
  );
}
