import { AlertTriangle, Clock, Eye, MapPin, Reply, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface SolicitationListProps {
  isCompact?: boolean;
}

export function SolicitationList({ isCompact }: SolicitationListProps) {
  const solicitations = [
    {
      id: 1,
      service: "Abertura Veicular",
      client: "Maria Silva",
      location: "Jardim Paulista, 2.3 km",
      time: "Today, 14:00",
      price: "R$ 120,00",
      urgent: true,
    },
    {
      id: 2,
      service: "Cópia de Chave Veicular",
      client: "João Santos",
      location: "Vila Mariana, 3.8 km",
      time: "Today, 16:30",
      price: "R$ 150,00",
      urgent: false,
    },
    {
      id: 3,
      service: "Troca de Fechadura Residencial",
      client: "Ana Costa",
      location: "Pinheiros, 1.5 km",
      time: "Tomorrow, 09:00",
      price: "R$ 200,00",
      urgent: false,
    },
  ];

  if (isCompact) {
    return (
      <section className="w-full space-y-4">
        <Link href={"/organization/dashboard"}>
          <div className="flex items-center justify-between p-4 rounded-xl border-b border-l border-border shadow-xs">
            <div className="flex flex-col items-start justify-start space-y-0.5">
              <h1 className="text-xl text-primary font-bold">Solicitações</h1>
              <span className="text-xs text-muted-foreground">
                Solicitações de orçamentos pendentes.
              </span>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-theme-secondary rounded-md -translate-x-1 translate-y-1" />

              <div className="relative flex items-center justify-center py-0.5 px-2 bg-theme-primary rounded-md">
                <span className="text-xs font-medium text-white">
                  {solicitations.length} novas
                </span>
              </div>
            </div>
          </div>
        </Link>
      </section>
    );
  } else {
    return (
      <section className="w-full space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start justify-start space-y-0.5">
            <h1 className="text-xl text-primary font-bold">Solicitações</h1>
            <span className="text-xs text-muted-foreground">
              Solicitações de orçamentos pendentes.
            </span>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-theme-secondary rounded-md -translate-x-1 translate-y-1" />

            <div className="relative flex items-center justify-center py-0.5 px-2 bg-theme-primary rounded-md">
              <span className="text-xs font-medium text-white">
                {solicitations.length} novas
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {solicitations.map((solicitation) => (
            <Card
              key={solicitation.id}
              className="rounded-xl border-border bg-card p-4"
            >
              <div className="space-y-3">
                <div className="w-full flex items-start justify-between">
                  <div className="w-full space-y-1">
                    <div className="w-full flex flex-row items-center justify-between gap-2">
                      <h3 className="font-semibold text-foreground">
                        {solicitation.service}
                      </h3>
                      {solicitation.urgent && (
                        <Badge
                          className={
                            solicitation.urgent ? "bg-amber-300" : "secondary"
                          }
                        >
                          <AlertTriangle />
                          Urgente
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="h-3 w-3" />
                      <span>{solicitation.client}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{solicitation.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{solicitation.time}</span>
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <Button className="flex-1 bg-zinc-700 text-primary-foreground">
                    <Reply />
                    Responder
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    );
  }
}
