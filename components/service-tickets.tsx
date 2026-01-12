import { Separator } from "./ui/separator";

const mockServices = [
  {
    serviceTitle: "Abertura Residencial",
    date: "2024-01-15",
    time: "09:00",
    address: "Av. Paulista, 1000 - São Paulo, SP",
    estimateNumber: "EST-2026-0001",
    price: "R$120,00",
  },
  {
    serviceTitle: "Abertura Veicular",
    date: "2024-01-20",
    time: "14:30",
    address: "Rua das Flores, 200 - Rio de Janeiro, RJ",
    estimateNumber: "EST-2026-0002",
    price: "R$450,00",
  },
  {
    serviceTitle: "Troca de Fechadura",
    date: "2024-02-01",
    time: "08:00",
    address: "Praça Central, 50 - Belo Horizonte, MG",
    estimateNumber: "EST-2026-0003",
    price: "R$90,00",
  },
];

export function ServiceTickets() {
  const patternWidth = 10;
  const patternHeight = 5;

  return (
    <div className="w-full flex flex-col space-y-4">
      {mockServices.map((item, index) => (
        <div key={index}>
          <div className="w-full max-w-md p-4 bg-gray-100 flex justify-center">
            <div className="relative w-full filter drop-shadow-md text-primary">
              <svg
                className="w-full block"
                height={patternHeight}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="topSerratedPositive"
                    x="0"
                    y="0"
                    width={patternWidth}
                    height={patternHeight}
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d={`M0 ${patternHeight} L${
                        patternWidth / 2
                      } 0 L${patternWidth} ${patternHeight} Z`}
                      className="fill-white"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height={patternHeight}
                  fill="url(#topSerratedPositive)"
                />
              </svg>

              <div className="bg-white px-8 py-6">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold tracking-tight mb-1 text-foreground">
                    {item.serviceTitle}
                  </h2>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    jobble profissionais
                  </p>
                </div>

                <div className="border-t-2 border-dashed border-border mb-6" />

                {/* Event Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-start">
                    <div className="text-muted-foreground text-sm uppercase tracking-wide">
                      Data
                    </div>
                    <div className="text-sm text-right font-medium text-foreground">
                      {item.date}
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="text-muted-foreground text-sm uppercase tracking-wide">
                      Horário
                    </div>
                    <div className="text-sm text-right font-medium text-foreground">
                      {item.time}
                    </div>
                  </div>

                  <div className="flex justify-between items-start">
                    <div className="text-muted-foreground text-sm uppercase tracking-wide">
                      Local
                    </div>
                    <div className="text-sm text-right font-medium text-foreground max-w-[60%]">
                      {item.address}
                    </div>
                  </div>
                </div>

                <div className="border-t-2 border-dashed border-border mb-6" />

                <div className="flex justify-between items-center mb-6">
                  <div className="text-muted-foreground text-sm uppercase tracking-wide">
                    Valor Total
                  </div>
                  <div className="text-sm font-bold text-foreground">
                    {item.price}
                  </div>
                </div>

                <div className="border-t-2 border-dashed border-border mb-6" />

                <div className="text-center pb-2">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    Número do Orçamento
                  </div>
                  <div className="font-mono text-sm font-medium text-foreground">
                    {item.estimateNumber}
                  </div>
                </div>
              </div>

              <svg
                className="w-full block relative -top-[1px]"
                height={patternHeight}
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    id="bottomSerratedPositive"
                    x="0"
                    y="0"
                    width={patternWidth}
                    height={patternHeight}
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d={`M0 0 L${
                        patternWidth / 2
                      } ${patternHeight} L${patternWidth} 0 Z`}
                      className="fill-white"
                    />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height={patternHeight}
                  fill="url(#bottomSerratedPositive)"
                />
              </svg>
            </div>
          </div>

          {index < mockServices.length - 1 && <Separator className="mt-4" />}
        </div>
      ))}
    </div>
  );
}
