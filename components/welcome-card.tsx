import Image from "next/image";
import jobbleWordmark from "@/public/jobble-wordmark.svg";
import { Button } from "./ui/button";
import { getProfile } from "@/http/get-profile";
import { redirect } from "next/navigation";
import { Instagram, Link } from "lucide-react";

export default async function PromotionalCard() {
  const { name } = await getProfile()!;

  if (!name) {
    redirect("/sign-in");
  }

  const [firstName, ...fullName] = name?.split(" ");

  return (
    <div className="w-full aspect-10/4 md:aspect-10/2 p-6 rounded-md bg-zinc-100">
      <div className="h-full w-full flex flex-row items-center justify-between">
        <div className="h-full flex flex-col items-start justify-between">
          <Image
            src={jobbleWordmark}
            alt="Jobble"
            className="w-16 dark:invert"
          />
          <div className="flex flex-col items-start justify-center space-y-2 md:space-y-4">
            <h1 className="text-xl md:text-4xl font-bold text-zinc-700">
              Bem-vindo(a) de volta, {firstName}!
            </h1>
            <span className="text-xs md:text-base text-muted-foreground">
              Gerencie seus projetos pela Jobble e construa o seu portifólio na maior rede de prestadores do Brasil. 
            </span>
          </div>
          <div className="flex flex-row items-center justify-center space-x-2">
            <Button variant={"default"} size={"sm"} className="text-sm">
              <Instagram />
              Cartão Instagram
            </Button>

            <Button variant={"outline"} size={"sm"} className="text-sm text-muted-foreground">
              <Link/>
              Compartilhar Perfil
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
