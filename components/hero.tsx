import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { DotBackground } from "./dot-background";
import LogoLoop from "./LogoLoop";

import logo01 from "@/assets/logos/logoipsum-358.svg";
import logo02 from "@/assets/logos/logoipsum-372.svg";
import logo03 from "@/assets/logos/logoipsum-393.svg";
import logo04 from "@/assets/logos/logoipsum-404.svg";
import logo05 from "@/assets/logos/logoipsum-410.svg";

const techLogos = [
  {
    src: logo01.src,
    alt: "Jobble",
    title: "Jobble",
    href: "https://jobble.com.br",
  },
  {
    src: logo02.src,
    alt: "Jobble",
    title: "Jobble",
    href: "https://jobble.com.br",
  },
  {
    src: logo03.src,
    alt: "Jobble",
    title: "Jobble",
    href: "https://jobble.com.br",
  },
  {
    src: logo04.src,
    alt: "Jobble",
    title: "Jobble",
    href: "https://jobble.com.br",
  },
  {
    src: logo05.src,
    alt: "Jobble",
    title: "Jobble",
    href: "https://jobble.com.br",
  },
];

export default function Hero() {
  return (
    <div className="relative px-8 py-20 w-full bg-theme-secondary flex flex-col items-center justify-center">
      <div className="absolute z-0 w-full h-full flex flex-row items-center justify-start">
        <DotBackground />
      </div>
      <div className="z-50 w-full max-w-[1200px] h-auto flex items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center space-y-10">
          <h1 className="text-white text-7xl font-extrabold text-center max-w-[600px]">
            Para quem faz o Brasil acontecer
          </h1>

          <p className="text-white/80 text-lg leading-8 text-center max-w-[600px]">
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
              Comece sem Custos
              <ArrowUpRight />
            </Button>
          </Link>

          <div className="w-full flex flex-col items-center justify-center space-y-8 pt-8">
            <h2 className="text-zinc-300 font-medium">Projeto apoiado por</h2>
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="right"
              logoHeight={48}
              gap={40}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="oklch(0.2447 0.0869 268.88)"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
