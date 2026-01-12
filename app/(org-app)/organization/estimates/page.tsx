import EstimateCard from "@/components/estimate-card";
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
import { Separator } from "@/components/ui/separator";
import { HandHelping, ReceiptText, ScrollText } from "lucide-react";
import Link from "next/link";

const estimateFakeList = [
  {
    id: "#0001",
    customer: "Gabriel Souza",
    price: 12000,
    service: "Abertura Residencial",
    date: new Date(),
  },
  {
    id: "#0002",
    customer: "Rafael Pereira Reis",
    price: 24000,
    service: "Troca de Fechadura",
    date: new Date(),
  },
];

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

      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="w-full bg-zinc-700"
            variant={"default"}
            size={"lg"}
          >
            <ReceiptText />
            Novo Orçamento
          </Button>
        </DialogTrigger>
        <DialogContent className="rounded-2xl">
          <DialogHeader className="w-full flex flex-col items-start justify-start">
            <DialogTitle>Tipo de Orçamento</DialogTitle>
            <DialogDescription>
              Escolha o tipo de orçamento a ser gerado
            </DialogDescription>
          </DialogHeader>

          <div className="w-full flex flex-col items-start justify-start space-y-6">
            <Link href="/organization/estimates/create" className="w-full">
              <div className="w-full p-4 gap-2 flex flex-row items-start justify-start border border-border rounded-md">
                <div className="size-4">
                  <ReceiptText size={16} className="text-muted-foreground" />
                </div>

                <div className="flex flex-col items-start justify-start space-y-1">
                  <h1 className="text-base leading-4 font-semibold">
                    Orçamento Simples
                  </h1>

                  <span className="text-xs text-muted-foreground">
                    Crie orçamentos simplificados rápidos e diretos para seus
                    clientes
                  </span>
                </div>
              </div>
            </Link>

            <Link
              href="/organization/comercial-propose/create"
              className="w-full"
            >
              <div className="w-full p-4 gap-2 flex flex-row items-start justify-start border border-border rounded-md">
                <div className="size-4">
                  <HandHelping size={16} className="text-muted-foreground" />
                </div>

                <div className="flex flex-col items-start justify-start space-y-1">
                  <h1 className="text-base leading-4 font-semibold">
                    Proposta Comercial
                  </h1>

                  <span className="text-xs text-muted-foreground">
                    Crie propostas comerciais detalhadas e personalizadas
                    específicas para seus clientes.
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </DialogContent>
      </Dialog>

      <SolicitationList isCompact />

      
    </div>
  );
}
