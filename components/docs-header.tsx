import Image from "next/image";
import Link from "next/link";
import jobbleWordmark from "@/public/jobble-wordmark.svg";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { SearchIcon } from "lucide-react";
import brasil from "@/assets/brasil.svg";

export default function DocsHeader() {
  return (
    <div className="sticky top-0 z-20 w-full h-16 px-8 flex items-center justify-between rounded-t-lg bg-white shadow-sm">
      <div className="flex items-center justify-center">
        <Link href="/" className="flex flex-row items-end justify-start gap-2">
          <Image
            src={jobbleWordmark}
            alt="Jobble"
            className="w-20 dark:invert"
          />
          <span className="text-sm font-bold text-blue-900">Docs</span>
        </Link>
      </div>

      <div className="mx-auto">
        <InputGroup>
          <InputGroupInput placeholder="Pesquisar..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <InputGroupButton>Pesquisar</InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="flex flex-row items-center justify-center space-x-1.5 pointer-events-none">
        <span className="text-sm font-medium text-primary">
          Empresa Brasileira
        </span>
        <Image src={brasil} alt="info" className="size-4" />
      </div>
    </div>
  );
}
