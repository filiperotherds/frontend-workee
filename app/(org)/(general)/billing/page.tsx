import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Edit, History } from "lucide-react";
import Link from "next/link";

export default function Billing() {
  //simulando status do plano
  const cancelado = false;

  return (
    <div className="w-full h-[calc(100vh-80px)] flex flex-col items-center p-8 rounded-lg bg-white overflow-auto no-scrollbar">
      <div className="w-full max-w-[1200px] flex flex-col gap-8">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex flex-col items-start justify-start">
            <h1 className="text-lg font-bold text-primary">Faturamento</h1>
            <p className="text-sm text-muted-foreground">
              Central de planos e customização
            </p>
          </div>

          <Link href="/billing/history">
            <Button variant={"outline"} size={"sm"}>
              <History className="text-muted-foreground" />
              Histórico de Faturamento
            </Button>
          </Link>
        </div>

        <div className="w-full flex flex-col items-start justify-start p-4 gap-8 border border-border rounded-xl">
          <div className="w-full flex flex-row items-center justify-between">
            <div className="flex flex-col items-start justify-start">
              <div className="flex flex-row items-center gap-2">
                <h1 className="text-2xl font-bold text-primary">
                  Plano Básico
                </h1>

                {cancelado ? (
                  <Badge className="bg-destructive/10 text-destructive">
                    Cancelado
                  </Badge>
                ) : (
                  <Badge className="bg-green-500/10 text-green-600">
                    Mensal
                  </Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                Funcionalidades essenciais para autônomos e individuais
              </p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <Button variant={"outline"}>Cancelar Plano</Button>

              <Button className="bg-blue-500 hover:bg-blue-500/80">
                Atualizar Plano
              </Button>
            </div>
          </div>

          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-col items-start py-2 px-3 border border-dashed border-border rounded-lg">
              <h1 className="text-lg font-bold text-zinc-700">R$119,90</h1>
              <span className="text-xs text-muted-foreground">
                Valor do próximo faturamento
              </span>
            </div>

            <div className="flex flex-col items-start py-2 px-3 border border-dashed border-border rounded-lg">
              <h1 className="text-lg font-bold text-zinc-700">23/02/2026</h1>
              <span className="text-xs text-muted-foreground">
                Data da próxima cobrança
              </span>
            </div>
          </div>

          <Field className="w-full">
            <FieldLabel htmlFor="progress-upload">
              <span>Membros na Equipe</span>
              <span className="ml-auto">2 de 20</span>
            </FieldLabel>
            <Progress value={10} id="progress-upload" />
          </Field>
        </div>

        <div className="w-full flex flex-col items-start justify-start p-4 gap-8 border border-border rounded-xl">
          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="text-base font-bold text-primary">
              Dados de Faturamento
            </h1>

            <div className="flex flex-row items-center gap-2">
              <Button variant={"outline"}>
                <Edit className="text-muted-foreground" />
                Atualizar
              </Button>
            </div>
          </div>

          <div className="w-full flex flex-col items-start gap-4 text-primary">
            <div className="w-full flex flex-row items-center justify-between">
              <h2 className="text-sm font-medium">Nome da Empresa</h2>

              <span className="text-sm">Chaveiro Panorama</span>
            </div>

            <div className="w-full flex flex-row items-center justify-between">
              <h2 className="text-sm font-medium">Endereço</h2>

              <span className="text-sm">
                Rua 2 1585, Centro, Rio Claro - SP
              </span>
            </div>

            <div className="w-full flex flex-row items-center justify-between">
              <h2 className="text-sm font-medium">Proprietário</h2>

              <span className="text-sm">Márcio Rother de Souza</span>
            </div>

            <div className="w-full flex flex-row items-center justify-between">
              <h2 className="text-sm font-medium">CPF/CNPJ</h2>

              <span className="text-sm">62.008.370/0001-22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
