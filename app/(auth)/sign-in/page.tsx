import { BackgroundGradient } from "@/components/background-gradient";
import { LoginForm } from "@/components/login-form";
import PostCard from "@/components/post-card";
import Link from "next/link";

import logo from "@/assets/jobble-teste.png";

export default function SignIn() {
  return (
    <div className="bg-neutral-900 dark min-h-svh flex flex-row">
      <div className="dark flex flex-col items-center flex-1 shrink-0 p-8 border-r shadow-lg bg-studio border-default">
        <div className="w-full h-fullflex justify-center gap-2 md:justify-start">
          <Link href="/">
            <img
              src={logo.src}
              alt="Jobble"
              className="w-24"
            />
          </Link>
        </div>

        <div className="w-full h-full flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>

        <span className="text-muted-foreground text-[12px] text-center max-w-sm">
          Ao continuar, você concorda com os <a href="/terms-of-service" className="underline whitespace-nowrap" target="_blank">Termos de Serviço</a> e a <a href="/privacy-policy" className="underline whitespace-nowrap" target="_blank">Política de Privacidade</a> da Jobble.
        </span>
      </div>

      <aside className="bg-neutral-950 flex-col items-center justify-center flex-1 hidden basis-1/4 lg:flex">
        <div className="relative flex flex-col gap-6">
          <div className="absolute select-none -top-12 -left-11">
            <span className="text-[160px] leading-none text-muted-foreground/30">“</span>
          </div>
          <span className="text-primary z-10 max-w-lg text-xl">
            Uma ferramenta que ajuda de verdade. Acompanhar as métricas e ver o número de cliques que meu WhatsApp tá recebendo é muito bom. Fora que fazer o orçamento por la economiza um bom tempo, pra quem vive na correria, é uma mão na roda.
          </span>
          <a href="https://chaveiropanorama.jobble.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
            <img src="https://osqinylytyyjfppindqy.supabase.co/storage/v1/object/public/jobble-public/chaveiro-panorama.jpg" alt="Chaveiro Panorama" className="size-12 rounded-full" />
            <div className="flex flex-col">
              <h1 className="text-primary">Chaveiro Panorama</h1>
              <cite className="text-sm not-italic text-muted-foreground whitespace-nowrap">
                @chaveiropanorama
              </cite>
            </div>
          </a>
        </div>
      </aside>
    </div>
  );
}
