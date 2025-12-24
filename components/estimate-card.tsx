type EstimateCardProps = {
  totalEstimate: number;
};

export default function EstimateCard({ totalEstimate }: EstimateCardProps) {
  return (
    <div className="w-full flex flex-col items-start justify-start space-y-2">
      <h1 className="text-sm text-muted-foreground font-medium">
        Total Orçado
      </h1>

      <span className="text-5xl text-primary font-medium">
        R${totalEstimate}
      </span>
    </div>
  );
}
