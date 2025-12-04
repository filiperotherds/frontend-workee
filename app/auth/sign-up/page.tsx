import { BackgroundGradient } from "@/components/background-gradient";
import PostCard from "@/components/post-card";
import { SignupForm } from "@/components/signup-form";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/jobble-wordmark.svg"
              alt="jobble logo"
              className="w-20"
            />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <div className="absolute inset-0 z-0 w-full h-full">
          <BackgroundGradient />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <PostCard
            text={`
              "A Jobble surgiu como um projeto social inovador, com a missão de 
              conectar pessoas com segurança e confiança. Hoje somos a maior empresa a 
              oferecer suporte e ferramentas para prestadores de serviço de todo o 
              Brasil." - Filipe Rother, CTO da Jobble.
              `}
          />
        </div>
      </div>
    </div>
  );
}
