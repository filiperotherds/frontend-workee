"use client";

import { EstimateCard } from "@/components/estimate-card";
import { EstimateComponent } from "@/components/estimate-component";
import { EstimatesList } from "@/components/estimates-list";
import { SolicitationList } from "@/components/solicitation-list";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Archive,
  MoreHorizontalIcon,
  Plus,
  ReceiptText,
  ScrollText,
} from "lucide-react";
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
          <ButtonGroup>
            <Button variant={"outline"}>
              <Plus strokeWidth={3} />
              Novo Orçamento
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" aria-label="More Options">
                  <MoreHorizontalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <Link href="/archived-estimate">
                    <DropdownMenuItem
                      variant="default"
                      className="hover:cursor-pointer"
                    >
                      <Archive />
                      Arquivados
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ButtonGroup>
        </div>
      </div>

      <div className="w-full h-full flex flex-row items-start justify-start border border-border">
        <EstimatesList />

        <EstimateComponent />
      </div>
    </div>
  );
}
