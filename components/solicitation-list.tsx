import { Clock, MapPin, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function SolicitationsList() {
  const solicitations = [
    {
      id: 1,
      service: "House Cleaning",
      client: "Maria Silva",
      location: "Jardim Paulista, 2.3 km",
      time: "Today, 14:00",
      price: "R$ 120,00",
      urgent: true,
    },
    {
      id: 2,
      service: "Plumbing Repair",
      client: "João Santos",
      location: "Vila Mariana, 3.8 km",
      time: "Today, 16:30",
      price: "R$ 150,00",
      urgent: false,
    },
    {
      id: 3,
      service: "Electrical Installation",
      client: "Ana Costa",
      location: "Pinheiros, 1.5 km",
      time: "Tomorrow, 09:00",
      price: "R$ 200,00",
      urgent: false,
    },
  ];

  return (
    <section className="w-full space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">
          New Solicitations
        </h2>

        <span className="text-xs font-medium text-green-600">
          {solicitations.length} novas
        </span>
      </div>
      <div className="space-y-3">
        {solicitations.map((solicitation) => (
          <Card
            key={solicitation.id}
            className="border-border bg-card p-4 transition-all hover:border-primary/50"
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
                        variant={
                          solicitation.urgent ? "destructive" : "secondary"
                        }
                      >
                        Urgent
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
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  Accept
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Decline
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
