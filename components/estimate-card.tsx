import { formatter } from "@/lib/number-formatter";

type EstimateCardProps = {
  id: string;
  customer: string;
  price: number;
  service: string;
  date: Date;
};

export default function EstimateCard({
  id,
  customer,
  price,
  service,
  date,
}: EstimateCardProps) {
  const formatedPrice = formatter.format(price / 100);

  return (
    <div className="w-full flex flex-col items-start justify-start">
      <span className="text-sm text-muted-foreground font-medium">
        {id} • {customer}
      </span>

      <h1 className="text-2xl text-primary font-bold">R${formatedPrice}</h1>

      <div className="w-full mt-2 flex flex-row items-center justify-between">
        <span className="text-sm text-muted-foreground">{service}</span>

        <span className="text-sm text-muted-foreground">{date.toLocaleDateString('pt-BR')}</span>
      </div>
    </div>
  );
}
