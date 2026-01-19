import {
  Archive,
  FileCog,
  FileText,
  Printer,
  Share,
  Upload,
} from "lucide-react";
import Image from "next/image";
import jobbleLogo from "@/assets/jobble-logo.png";
import { Button } from "./ui/button";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { ButtonGroup, ButtonGroupText } from "./ui/button-group";

interface EstimateItem {
  qty: number;
  description: string;
  unitPrice: number;
}

export function EstimateComponent() {
  const contentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef,
    documentTitle: "orcamento_0000226",
  });

  const data = {
    estimateNo: "0000226",
    date: "11-04-2023",
    dueDate: "25-04-2023",
    customer: {
      name: "Customer Name",
      address: "1234 Customer St, Customer Town, ST 12345",
    },
    items: [
      { qty: 1, description: "Kitchen faucet installation", unitPrice: 230.0 },
      { qty: 2, description: "Toilet unclogging", unitPrice: 80.0 },
      {
        qty: 1,
        description: "Water heater inspection and maintenance",
        unitPrice: 100.0,
      },
      {
        qty: 3,
        description: "Hours of labor for pipe repairs (@$70/hr)",
        unitPrice: 70.0,
      },
    ] as EstimateItem[],
  };

  const subtotal = data.items.reduce(
    (acc, item) => acc + item.qty * item.unitPrice,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <div className="bg-secondary w-full flex items-center justify-center">
        <div className="w-[800px] flex flex-row pt-8 items-center justify-start">
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
            </ButtonGroup>

            <ButtonGroup>
              <Button
                variant={"outline"}
                size={"default"}
                className="text-destructive hover:text-destructive/70"
                onClick={() => {}}
              >
                <Archive />
                Arquivar
              </Button>
            </ButtonGroup>
          </ButtonGroup>
        </div>
      </div>

      <div className="bg-secondary w-full p-8 min-h-screen flex justify-center items-start print:bg-white print:p-0">
        {/* Container Principal - Tamanho A4 Aproximado */}
        <div
          ref={contentRef}
          className="bg-white w-[800px] p-8 shadow-lg print:shadow-none print:w-full"
        >
          {/* Header: Empresa e Logo */}
          <div className="flex justify-between items-start mb-16">
            <div>
              <h1 className="font-bold text-xl text-gray-800">
                Chaveiro Panorama
              </h1>
              <p className="text-gray-600 text-sm">62.008.370/0001-22</p>
              <p className="text-gray-600 text-sm">
                chaveiropanorama@hotmail.com
              </p>
            </div>
            <div className="border-2 border-dashed border-border rounded-lg p-6 flex flex-col items-center text-muted-foreground print:hidden">
              <Upload />
              <span className="text-sm font-semibold">Upload Logo</span>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-zinc-700 text-right mb-12 uppercase">
            ORÇAMENTO
          </h2>

          {/* Info de Cliente e Datas */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <h3 className="text-muted-foreground text-xs font-semibold mb-2">
                Cliente
              </h3>
              <p className="text-xl font-bold text-gray-800">
                {data.customer.name}
              </p>
              <p className="text-gray-600 max-w-[200px]">
                {data.customer.address}
              </p>
            </div>

            <div className="text-left space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-bold mr-4">
                  Orçamento
                </span>
                <span className="text-sm">{data.estimateNo}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-bold mr-4">
                  Data
                </span>
                <span className="text-sm">{data.date}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-muted-foreground font-bold mr-4">
                  Validade
                </span>
                <span className="text-sm">{data.dueDate}</span>
              </div>
            </div>
          </div>

          {/* Tabela de Itens */}
          <table className="w-full mb-8">
            <thead>
              <tr className="bg-muted-foreground text-white print:bg-muted-foreground print:text-white">
                <th className="py-2 px-4 text-left w-16">QTD</th>
                <th className="py-2 px-4 text-left">Descrição</th>
                <th className="py-2 px-4 text-right">Valor Unitário</th>
                <th className="py-2 px-4 text-right">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {data.items.map((item, index) => (
                <tr key={index} className="text-gray-700">
                  <td className="py-4 px-4 font-bold text-end">{item.qty}</td>
                  <td className="py-4 px-4">{item.description}</td>
                  <td className="py-4 px-4 text-right">
                    {item.unitPrice.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-right font-semibold">
                    R${(item.qty * item.unitPrice).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totais */}
          <div className="flex justify-end mb-20">
            <div className="w-64 space-y-3">
              <div className="flex justify-between text-muted-foreground">
                <span className="font-bold">Subtotal</span>
                <span>R${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span className="font-bold">Taxas</span>
                <span>R${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-3 text-zinc-700 font-bold text-xl">
                <span>Total (BRL)</span>
                <span>R${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="print:block print-footer">
            <div className="flex justify-between items-end border-t border-border pt-4">
              <div className="text-sm text-gray-600">
                <h4 className="text-muted-foreground font-bold mb-1">
                  Termos e Condições
                </h4>
                <p>Válido para os próximos 14 dias</p>
                <p>Favor emitir pagamentos para: Chaveiro Panorama</p>
              </div>

              <div className="flex flex-col items-center">
                <span className="text-[10px] text-zinc-400 uppercase font-bold mb-1">
                  Desenvolvido Por
                </span>
                <Image
                  src={jobbleLogo}
                  alt="Jobble"
                  className="w-14 grayscale opacity-70"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
