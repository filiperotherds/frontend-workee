import { BellRing } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "./ui/dropdown-menu";
import EmptyNotifications from "./empty-notifications";

type NotificationItem = {
  title: string;
  content: string;
  date: string;
};

const notifications: NotificationItem[] | null = [
  {
    title: "Bem Vindo(a), Márcio!",
    content:
      "Desejamos que sua jornada seja próspera por aqui! Se tiver alguma dúvida, nossa equipe está a disposição para ajudar.",
    date: "Há 5 min",
  },
];

export function Notification() {
  const hasNotifications = notifications && notifications.length > 0;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative cursor-pointer outline-none">
        {hasNotifications ? (
          <div className="absolute z-20 -top-1 -right-1">
            <div className="relative h-4 min-w-4 px-1 rounded-full flex items-center justify-center bg-theme-secondary">
              <span className="text-[10px] font-medium text-white">
                {notifications.length}
              </span>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="size-8 flex items-center justify-center rounded-md bg-secondary hover:bg-secondary/80">
          <BellRing
            className="text-muted-foreground"
            size={16}
            strokeWidth={2.5}
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="w-[280px] md:w-96 p-2"
      >
        {hasNotifications ? (
          <>
            <DropdownMenuLabel className="text-medium text-muted-foreground">
              Notificações
            </DropdownMenuLabel>
            {notifications.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className="flex flex-col items-start gap-1 p-3 cursor-pointer"
              >
                <div className="flex w-full justify-between items-center">
                  <span className="font-semibold text-sm">{item.title}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {item.content}
                </p>
              </DropdownMenuItem>
            ))}
          </>
        ) : (
          <EmptyNotifications />
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
