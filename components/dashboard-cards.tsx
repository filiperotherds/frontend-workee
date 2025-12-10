import { TrendingDown, TrendingUp } from "lucide-react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function DashboardCards() {
  return (
    <div className="@container/main w-full">
      <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
        <Card className="@container/card w-full" data-slot="card">
          <CardHeader>
            <CardDescription>Visibilidade</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              1.2k
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-green-600">
                <TrendingUp />
                +12.3%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              As visitas aumentaram 12.3% <TrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">Visitantes neste mês</div>
          </CardFooter>
        </Card>

        <Card className="@container/card w-full" data-slot="card">
          <CardHeader>
            <CardDescription>Agilidade</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              47 min
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-red-600">
                <TrendingDown />
                +20%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Aumentou 20% neste mês <TrendingDown className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Tempo de resposta requer atenção
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card w-full" data-slot="card">
          <CardHeader>
            <CardDescription>Conversão</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              27.4%
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-green-600">
                <TrendingUp />
                +2.3%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Acima da meta <TrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Taxa de conversão neste mês
            </div>
          </CardFooter>
        </Card>

        <Card className="@container/card w-full" data-slot="card">
          <CardHeader>
            <CardDescription>Avaliações</CardDescription>
            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
              4.7
            </CardTitle>
            <CardAction>
              <Badge variant="outline" className="text-green-600">
                <TrendingUp />
                +9.3%
              </Badge>
            </CardAction>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1.5 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Excelente desempenho <TrendingUp className="size-4" />
            </div>
            <div className="text-muted-foreground">Baseado em 49 serviços</div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
