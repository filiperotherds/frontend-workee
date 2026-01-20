"use client"

import LandingHeader from "@/components/landing/landing-header";
import Hero from "@/components/landing/hero";
import { Highlighter } from "@/components/ui/highlighter";
import LandingFooter from "@/components/landing/landing-footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import character from "@/assets/character.png";
import contract from "@/assets/contract.png";
import clock from "@/assets/clock.png";
import { Separator } from "@/components/ui/separator";

export default function Home() {

  return (
    <div className="font-sans w-full h-full flex flex-col items-center justify-start space-y-5 bg-secondary">

      <div className="w-full flex flex-col items-center justify-center p-5 bg-blue-500 relative overflow-hidden">

        {/* Header */}

        <LandingHeader />

        {/* Hero */}

        <Hero />

        {/* SVG Wave - Separator */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
        >
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="block md:hidden w-full h-[120px]"
          >
            <path
              d="M0,40 C240,120 480,40 720,60 960,80 1200,120 1440,60 L1440,120 L0,120 Z"
              fill="rgb(248 250 252)"
            />
          </svg>

          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="hidden md:block w-full h-[120px]"
          >
            <path
              d="M0,20 C240,80 480,120 720,90 960,60 1200,20 1440,60 L1440,120 L0,120 Z"
              fill="rgb(248 250 252)"
            />
          </svg>
        </div>
      </div>

      <div className="w-full max-w-7xl flex flex-col items-start justify-start gap-16 p-5">

        {/* #1st Section */}

        <div className="w-full flex flex-row items-center justify-center gap-8">
          <div className="w-full flex flex-col items-start justify-start space-y-8">
            <span className="text-sm font-medium text-muted-foreground uppercase">
              Máxima Conversão
            </span>

            <h1 className="text-6xl font-extrabold text-primary">
              Converta mais <br /> com orçamentos <br /> <Highlighter action="underline" color="#3b82f6" multiline strokeWidth={2}>profissionais</Highlighter>
            </h1>

            <p className="max-w-[520px] text-base text-muted-foreground">
              A Jobble revoluciona a forma como você gera propostas. Com inteligência artificial integrada, crie orçamentos profissionais em segundos, personalize conforme sua marca e aumente suas chances de fechamento em até 40%. Simplifique seu processo de vendas e foque no que realmente importa.
            </p>

            <Link href="/sign-up">
              <Button
                className="w-64 h-12 bg-transparent hover:bg-transparent text-base text-primary font-semibold border-2 border-primary rounded-full hover:scale-105"
              >
                Começe Grátis
                <ChevronRight strokeWidth={2.5} />
              </Button>
            </Link>
          </div>

          <div className="w-full flex items-center justify-center">
            <Image src={contract} alt="Old Estimate" width={360} />
          </div>
        </div>

        {/* #2th Section */}

        <div className="w-full flex flex-row items-center justify-between p-16 gap-16 rounded-xl bg-white">
          <div className="flex-1 flex flex-col items-start justify-start gap-6">
            <Image src={character} className="w-56" alt="Character" />

            <h1 className="text-4xl font-bold leading-10">
              Comece na Jobble <br /> em 5 minutos
            </h1>

            <p className="text-sm">
              Apenas 3 passos simples para otimizar <br /> as operações da sua empresa.
            </p>

            <Link href="/sign-up">
              <Button
                className="w-64 h-12 bg-blue-500 hover:bg-blue-500 text-base text-white font-semibold rounded-full hover:scale-105"
              >
                Começe Grátis
                <ChevronRight strokeWidth={2.5} />
              </Button>
            </Link>
          </div>

          <div className="w-full max-w-96 flex flex-col items-start justify-start gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">
                Passo 1
              </h1>

              <p className="text-muted-foreground text-sm">
                Cadastre sua empresa na plataforma. Isso leva pouco tempo, pedimos penas alguns poucos dados essênciais.
              </p>
            </div>

            <Separator />

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">
                Passo 2
              </h1>

              <p className="text-muted-foreground text-sm">
                Suba uma foto do logotipo do seu negócio. Assim garantimos a máxima personalização para seu cliente.
              </p>
            </div>

            <Separator />

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">
                Passo 3
              </h1>

              <p className="text-muted-foreground text-sm">
                Tudo pronto. Gere seu primeiro orçamento profissional e personalizado, e garanta mais conversões!
              </p>
            </div>
          </div>
        </div>

        {/* #3rd Section */}

        <div className="w-full flex flex-row items-center justify-center gap-8">
          <div className="w-full flex items-center justify-center">
            <Image src={clock} alt="Old Estimate" width={360} />
          </div>

          <div className="w-full flex flex-col items-end justify-start space-y-8">
            <span className="text-sm font-medium text-muted-foreground uppercase text-right">
              Máxima Eficiência
            </span>

            <h1 className="text-6xl font-extrabold text-primary text-right">
              Um sistema que <br /> joga no <Highlighter action="underline" color="#3b82f6" multiline strokeWidth={2}>seu time</Highlighter>
            </h1>

            <p className="max-w-[520px] text-base text-muted-foreground text-right">
              A Jobble revoluciona a forma como você gera propostas. Com inteligência artificial integrada, crie orçamentos profissionais em segundos, personalize conforme sua marca e aumente suas chances de fechamento em até 40%. Simplifique seu processo de vendas e foque no que realmente importa.
            </p>

            <Link href="/sign-up">
              <Button
                className="w-64 h-12 bg-transparent hover:bg-transparent text-base text-primary font-semibold border-2 border-primary rounded-full hover:scale-105"
              >
                Começe Grátis
                <ChevronRight strokeWidth={2.5} />
              </Button>
            </Link>
          </div>
        </div>

      </div>

      <LandingFooter />
    </div>
  )
}