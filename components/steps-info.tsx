"use client";

import { ContactRound, MapPinHouse, Store } from "lucide-react";
import AnimatedContent from "./AnimatedContent";

export default function StepsInfo() {
  return (
    <div className="relative px-8 py-20 w-full bg-background flex flex-col items-center justify-center">
      <div className="z-10 w-full max-w-[1200px] h-auto flex items-center justify-center">
        <div className="grid grid-cols-3 gap-8 w-full">
          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
            delay={0}
          >
            <div className="w-full flex flex-col items-center justify-start space-y-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-theme-secondary">
                <Store
                  size={24}
                  strokeWidth={2.5}
                  className="text-theme-secondary"
                />
              </div>

              <h1 className="text-theme-secondary font-medium text-center">
                Registre seu Negócio
              </h1>

              <p className="text-center text-sm text-muted-foreground">
                Registre suas informações comerciais e defina a área de atuação
                do seu negócio para começar a conectar com clientes.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
            delay={0.2}
          >
            <div className="w-full flex flex-col items-center justify-start space-y-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-theme-secondary">
                <MapPinHouse
                  size={24}
                  strokeWidth={2.5}
                  className="text-theme-secondary"
                />
              </div>

              <h1 className="text-theme-secondary font-medium text-center">
                Cadastre seu Endereço
              </h1>

              <p className="text-center text-sm text-muted-foreground">
                Informe o local onde você atua ou pretende oferecer seus
                serviços para que clientes possam encontrá-lo facilmente.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity={true}
            scale={1}
            threshold={0.1}
            delay={0.4}
          >
            <div className="w-full flex flex-col items-center justify-start space-y-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white border-2 border-theme-secondary">
                <ContactRound
                  size={24}
                  strokeWidth={2.5}
                  className="text-theme-secondary"
                />
              </div>

              <h1 className="text-theme-secondary font-medium text-center">
                Receba Contatos
              </h1>

              <p className="text-center text-sm text-muted-foreground">
                Comece a receber contatos e solicitações de orçamento de
                clientes interessados nos seus serviços, expandindo sua base de
                clientes e aumentando suas oportunidades de negócio.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </div>
    </div>
  );
}
