"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type CtaButtonProps = {
  title: string;
};

export default function CtaButton({ title }: CtaButtonProps) {
  return (
    <div className="w-full">
      <div className="relative group w-full md:w-2/3 h-16">
        <div className="absolute inset-0 bg-theme-secondary rounded-lg -translate-x-1 translate-y-1" />
        <Link
          href="/organization/sign-up"
          className="block relative w-full h-full bg-theme-primary rounded-lg
                     transition-transform duration-200 ease-out
                     group-hover:-translate-y-1 group-hover:translate-x-1
                     active:translate-x-0 active:translate-y-0"
        >
          {/* Conteúdo do Botão */}
          <div className="w-full h-full flex flex-row items-end justify-start px-3 py-2">
            <div className="flex flex-row items-center justify-center space-x-2 text-zinc-700">
              <span className="font-mono font-medium tracking-wide">
                {title}
              </span>
              <ArrowUpRight size={18} strokeWidth={2} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
