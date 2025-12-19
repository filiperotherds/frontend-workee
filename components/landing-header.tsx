import jobbleLogo from "@/assets/jobble-white.svg";
import Image from "next/image";
import { NavMenu } from "./nav-menu";
import Link from "next/link";
import { Button } from "./ui/button";

export default function LandingHeader() {
  return (
    <div className="px-8 sticky top-0 z-20 w-full h-16 flex items-center justify-center bg-theme-secondary">
      <div className="h-full w-full max-w-[1200px] flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-8">
          <Link href="/">
            <Image src={jobbleLogo} alt="Jobble" className="w-20" />
          </Link>

          <NavMenu />
        </div>

        <div className="flex flex-row items-center justify-center space-x-4">
          <Link href="/sign-in">
            <Button
              variant={"link"}
              className="text-white hover:text-white/90 hover:no-underline"
            >
              Entrar
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button
              variant={"default"}
              size={"sm"}
              className="text-theme-secondary"
            >
              Cadastre-se
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
