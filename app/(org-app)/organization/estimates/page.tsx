import EstimateCard from "@/components/estimate-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { History, ReceiptText } from "lucide-react";
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
          <History className="text-muted-foreground" />
        </Button>
      </div>

      <Link href="/organization/new-estimate" className="w-full">
        <Button className="w-full" variant={"default"} size={"lg"}>
          <ReceiptText />
          Novo Orçamento
        </Button>
      </Link>

      <div className="w-full flex flex-col space-y-4">
        {estimateFakeList.map((item, index) => (
          <div key={index}>
            <EstimateCard
              id={item.id}
              customer={item.customer}
              price={item.price}
              service={item.service}
              date={item.date}
            />

            {index < estimateFakeList.length - 1 && (
              <Separator className="mt-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
