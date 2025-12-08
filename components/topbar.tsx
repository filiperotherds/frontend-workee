import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

import infoIcon from "@/assets/info-icon.svg";
import wallet from "@/assets/wallet.svg";

export default function Topbar() {
  return (
    <div className="hidden md:flex absolute px-2 w-full h-12 top-0 left-0 bg-blue-950">
      <div className="w-full h-10 flex flex-row items-center justify-between">
        <Link href="/docs" target="_blank">
          <Button variant="link" size="sm" className="text-white">
            <span>Prestador Seguro</span>
            <Image src={infoIcon} alt="info" className="size-4 invert" />
          </Button>
        </Link>

        <div className="flex flex-row items-center justify-center gap-1 text-sm text-white">
          <span>Já disponível a </span>
          <span className="font-medium"> aplicação mobile</span>
          <span> nas lojas de aplicativo!</span>
        </div>

        <Link href="/billing">
          <Button variant="default" className="h-7">
            <Image src={wallet} alt="wallet" className="size-3 invert" />
            Gestão de Assinatura
          </Button>
        </Link>
      </div>
    </div>
  );
}
