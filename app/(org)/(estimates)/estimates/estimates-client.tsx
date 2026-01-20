"use client";

import { useMemo, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import {
  Archive,
  FileCog,
  MoreHorizontalIcon,
  Plus,
  Printer,
  Share,
} from "lucide-react";
import EstimateDocument from "./estimate-document";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { EstimateList } from "./estimate-list";

interface EstimatesClientProps {
  organization: {
    type: "INDIVIDUAL" | "ORGANIZATION";
    name: string | null;
    avatarUrl: string | null;
    cnpj: string | null;
    email: string | null;
  } | null;
  estimates: {
    id: string;
    estimateNo: string;
    date: string;
    dueDate: string;
    tax: number;
    customer: {
      name: string;
      address: string;
    };
    items: {
      qty: number;
      description: string;
      unitPrice: number;
    }[];
  }[];
}

export default function EstimatesClient({
  organization,
  estimates,
}: EstimatesClientProps) {
  const [selectedId, setSelectedId] = useState<string>(estimates[0].id);

  const selectedEstimate = useMemo(
    () => estimates.find((e) => e.id === selectedId),
    [selectedId]
  );

  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: selectedEstimate ? `${selectedEstimate.estimateNo}` : "orçamento",
  });

  return (
    <div className="w-full flex flex-col space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold text-primary">Orçamentos</h1>
          <p className="text-xs text-muted-foreground">
            Visualização e impressão dos orçamentos.
          </p>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4">
          <ButtonGroup>
            <ButtonGroup>
              <Button variant={"outline"} size={"default"}>
                <FileCog />
                Editar
              </Button>

              <Button variant={"outline"} size={"default"}>
                <Share />
                Compartilhar
              </Button>

              <Button
                variant={"outline"}
                size={"default"}
                onClick={() => handlePrint()}
              >
                <Printer />
                Imprimir
              </Button>

              <Button
                variant={"outline"}
                size={"default"}
                className="text-destructive hover:text-destructive/70"
                onClick={() => { }}
              >
                <Archive />
                Arquivar
              </Button>
            </ButtonGroup>

            <ButtonGroup>
              <Button variant={"outline"}>
                <Plus strokeWidth={3} />
                Novo Orçamento
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="More Options"
                  >
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
          </ButtonGroup>
        </div>
      </div>

      {/* Documento */}
      <div className="bg-secondary w-full h-full flex flex-row items-start justify-between p-8 rounded-xl">
        <EstimateList
          estimates={estimates}
          selectedId={selectedId}
          onSelect={setSelectedId}
        />

        {selectedEstimate && (
          <EstimateDocument
            ref={contentRef}
            organization={organization}
            estimate={selectedEstimate}
          />
        )}
      </div>
    </div>
  );
}
