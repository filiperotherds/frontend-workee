"use client";

import { Iphone } from "../ui/iphone";

import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-between md:gap-8">
      <div className="flex flex-col items-center md:items-start justify-start space-y-6 md:space-y-10 md:mb-28">
        <div className="flex items-center justify-center py-2 px-4 border border-border rounded-full pointer-events-none">
          <span className="text-sm font-medium text-white">
            Escolhido por +500 profissionais
          </span>
        </div>

        <h1 className="text-center md:text-left text-4xl md:text-6xl text-white font-extrabold">
          As ferramentas <br /> que você precisa, <br /> em um só lugar.
        </h1>

        <p className="text-center md:text-left text-white/85 text-base md:text-lg leading-8 max-w-[600px]">
          Alcance a visibilidade que seu trabalho merece e profissionalize toda
          a sua operação para crescer com segurança.
        </p>

        <Link href="/sign-up">
          <Button className="w-64 h-12 bg-white hover:bg-white/80 text-base text-blue-500 font-semibold rounded-full hover:scale-105">
            Começe Grátis
            <ChevronRight strokeWidth={2.5} />
          </Button>
        </Link>

        <p className="text-xs text-white">* Não exigimos cartão de crédito</p>
      </div>

      <div className="md:flex-1 flex flex-row items-center md:justify-end">
        <div className="w-64 md:w-full max-w-[320px] mx-auto md:mx-0">
          <Iphone
            className="absolute -bottom-16 shadow-2xl"
            src="https://placehold.co/900x1600?text=Jobble."
          />
        </div>
      </div>
    </div>
  );
}
