"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function DocsSidebar() {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  // Esse useEffect garante que pegamos o hash assim que a página carrega
  // e monitora mudanças na URL
  useEffect(() => {
    // Função para atualizar o hash
    const updateHash = () => {
      setActiveHash(window.location.hash);
    };

    // Atualiza no mount
    updateHash();

    // Adiciona listener para mudanças de hash (ex: botão voltar do navegador)
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []); // Roda apenas na montagem inicial

  // Esse useEffect observa mudanças de página (pathname) para resetar ou pegar novo hash
  useEffect(() => {
    setActiveHash(window.location.hash);
  }, [pathname]);

  // Função auxiliar para verificar se o link está ativo
  const isLinkActive = (href: string) => {
    // Constrói a URL atual completa (ex: /docs/provider-area#prestador-seguro)
    const currentFullUrl = pathname + activeHash;

    // Compara estritamente.
    // Se href for "/docs/abc", ele só fica ativo se não tiver hash.
    // Se href for "/docs/abc#123", ele só fica ativo se o hash for #123.
    return currentFullUrl === href;
  };

  return (
    <div className="w-64 flex flex-col space-y-6">
      <h1 className="text-sm font-medium">Documentos</h1>

      {docsConfig.map((section, index) => (
        <div key={index} className="flex flex-col space-y-2">
          <h2 className="text-sm text-muted-foreground font-medium">
            {section.title}
          </h2>
          <div className="flex flex-col space-y-1 pl-2 border-l border-zinc-200 ml-1">
            {section.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                // Ao clicar, forçamos a atualização do estado local do hash
                // Isso é necessário porque o Next.js Link previne o reload da página
                onClick={() => {
                  const hashIndex = item.href.indexOf("#");
                  if (hashIndex !== -1) {
                    setActiveHash(item.href.substring(hashIndex));
                  } else {
                    setActiveHash("");
                  }
                }}
              >
                <span
                  className={cn(
                    "text-sm hover:text-blue-600 transition-colors block py-1",
                    isLinkActive(item.href)
                      ? "text-blue-600 font-medium"
                      : "text-muted-foreground"
                  )}
                >
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
