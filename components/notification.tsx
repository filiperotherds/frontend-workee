import { BellRing } from "lucide-react";
import Link from "next/link";

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
    <Link href={"/notifications"}>
      <div className="relative">
        {hasNotifications ? (
          <div className="absolute z-20 right-0 top-0">
            <div className="relative size-1.5 rounded-full flex items-center justify-center bg-notification" />
          </div>
        ) : (
          ""
        )}
        <div className="size-7 flex items-center justify-center">
          <BellRing
            className="text-muted-foreground"
            size={16}
            strokeWidth={2.5}
          />
        </div>
      </div>
    </Link>
  );
}
