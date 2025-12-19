import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { DotBackground } from "./dot-background";

export default function Hero() {
  return (
    <div className="relative p-8 pt-16 w-full bg-theme-secondary flex items-center justify-center">
      <div className="absolute z-0 w-full h-full flex flex-row items-center justify-start">
        <DotBackground />
      </div>
      <div className="z-50 w-full max-w-[1200px] flex flex-row items-center justify-center gap-8">
        {/* Column #1 */}
        <div className="w-full flex flex-col items-start justify-start space-y-10">
          <h1 className="text-white text-7xl font-extrabold">
            Para quem faz o Brasil acontecer
          </h1>

          <p className="text-white/80 text-lg leading-8">
            Alcance a visibilidade que seu trabalho merece e profissionalize
            toda a sua gestão para crescer com segurança. Uma ferramenta
            completa, pensada para aqueles que constroem o futuro com as
            próprias mãos.
          </p>

          <Link href="/organization/sign-up">
            <Button
              variant={"default"}
              size={"lg"}
              className="text-theme-secondary"
            >
              Comece sem Custos!
              <ArrowUpRight />
            </Button>
          </Link>
        </div>

        {/* Column #2 */}
        <div className="w-full h-16 bg-white"></div>
      </div>
    </div>
  );
}
