"use client";

import { useMemo, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Button } from "@/components/ui/button";
import {
  Archive,
  Eye,
  FilePen,
  Printer,
  Share,
  FileText,
  Plus,
} from "lucide-react"; // Adicionei ícones novos
import EstimateDocument from "./estimate-document";
import { EstimateList } from "./estimate-list";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { ShareButton } from "@/components/share-button";
import { ArchiveButton } from "@/components/archive-button";

interface EstimatesClientProps {
  organization: {
    name: string | null;
    avatarUrl: string | null;
    cnpj: string | null;
    email: string | null;
  } | null;
  estimates: {
    id: string;
    estimateNo: number;
    description: string | null;
    status: "pending" | "approved" | "refused";
    createdAt: string;
    validity: string | null;

    deliveryDeadline: string | null;
    warrantyTerms: string | null;
    paymentMethod: "";
    installments: number;
    downPayment: string | number | null;

    organizationId: string | null;
    customerId: string | null;

    customer: {
      name: string | null;
      email: string | null;
      address: string | null;
      phone: string | null;
    } | null;

    items: {
      id: string;
      description: string;
      quantity: number;
      unitValue: number;
      estimateId: string;
      productId: string | null;
    }[];
  }[];
}

export default function EstimatesClient({
  organization,
  estimates,
}: EstimatesClientProps) {
  // 1. CORREÇÃO: Inicialização segura. Se o array for vazio, inicia como null.
  const [selectedId, setSelectedId] = useState<string | null>(
    estimates.length > 0 ? estimates[0].id : null
  );

  const selectedEstimate = useMemo(
    () => estimates.find((e) => e.id === selectedId),
    [selectedId, estimates]
  );

  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: selectedEstimate
      ? `${selectedEstimate.estimateNo}`
      : "orçamento",
  });

  return (
    <div className="bg-secondary w-full h-[calc(100vh-80px)] flex flex-row justify-between gap-1">
      <EstimateList
        estimates={estimates}
        selectedId={selectedId || ""}
        onSelect={setSelectedId}
      />

      {estimates.length > 0 && selectedEstimate ? (
        <div className="w-full h-full flex flex-col items-center justify-start space-y-4 rounded-lg border border-border/60 p-4 bg-white">
          <div className="w-full flex flex-row items-center justify-between space-x-4">
            <div className="flex flex-row items-center justify-center gap-2">
              <Badge
                variant={"secondary"}
                className={`pointer-events-none ${
                  selectedEstimate?.status === "pending"
                    ? "text-muted-foreground/80 bg-zinc-100"
                    : "text-green-500 bg-green-500/5"
                }`}
              >
                {selectedEstimate?.status === "pending"
                  ? "Pendente"
                  : "Aprovado"}
              </Badge>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={`https://jobble.com.br/estimates/${selectedEstimate?.id}`}
                    target="_blank"
                  >
                    <Button
                      variant={"ghost"}
                      size={"icon"}
                      className="text-muted-foreground"
                    >
                      <Eye />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Visualizar</p>
                </TooltipContent>
              </Tooltip>
            </div>

            <div className="flex flex-row items-center justify-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    disabled={selectedEstimate?.status === "approved"}
                    variant={"ghost"}
                    size={"icon"}
                    className="text-muted-foreground"
                    onClick={() => {}}
                  >
                    <FilePen />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Editar</p>
                </TooltipContent>
              </Tooltip>

              <ShareButton estimateId={selectedEstimate?.id} />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="text-muted-foreground"
                    onClick={() => handlePrint()}
                  >
                    <Printer />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <p>Imprimir</p>
                </TooltipContent>
              </Tooltip>

              <ArchiveButton estimateId={selectedEstimate?.id} />
            </div>
          </div>

          <div className="w-full">
            <h1 className="text-lg font-medium text-primary">
              {selectedEstimate?.estimateNo} -{" "}
              {selectedEstimate?.customer?.name}
            </h1>
          </div>

          <Separator />

          <div className="h-full w-full flex flex-col items-center no-scrollbar overflow-y-auto">
            {selectedEstimate && (
              <EstimateDocument
                ref={contentRef}
                organization={organization}
                estimate={selectedEstimate}
              />
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-4 rounded-lg border border-border/60 p-4 bg-white text-muted-foreground">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="size-10 flex items-center justify-center rounded-lg bg-secondary">
              <FileText size={20} className="text-muted-foreground" />
            </div>
            <h3 className="text-xs text-primary">
              Nenhum orçamento selecionado
            </h3>
            <p className="text-xs text-center max-w-xs">
              Você ainda não possui orçamentos criados ou selecionados. Crie um
              novo para começar.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
