import profileBg from "@/assets/profile-bg.png";
import Image from "next/image";
import verifiedIcon from "@/assets/verified.svg";
import Link from "next/link";
import { getSite } from "@/http/get-site";
import { notFound } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { RiWhatsappFill } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function SubdomainPage({
  params,
}: {
  params: Promise<{ subdomain: string }>;
}) {
  const { subdomain } = await params;

  const siteData = await getSite({ slug: subdomain });

  if (!siteData) {
    notFound();
  }

  function getInitials(name: string): string {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join("");

    return initials;
  }

  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-start">
      <div className="absolute w-full z-20 top-0 flex flex-row items-center justify-between p-4">
        <span className="text-xs text-semibold text-muted-foreground">
          Jobble LTDA © copyright 2026
        </span>

        <Link href="https://jobble.com.br" target="_blank">
          <span className="text-xs text-semibold text-muted-foreground hover:underline decoration-dashed">
            Criado por jobble.com.br
          </span>
        </Link>
      </div>
      <div
        style={{ backgroundImage: `url(${profileBg.src})` }}
        className="w-full aspect-16/12 md:aspect-16/3 bg-cover bg-center flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="size-24 rounded-full border-2 border-blue-500 overflow-hidden p-1 pointer-events-none">
            <Avatar className="size-full">
              {siteData.avatarUrl && <AvatarImage src={siteData.avatarUrl} />}
              {siteData.name && (
                <AvatarFallback className="bg-secondary text-muted-foreground text-2xl">
                  {getInitials(siteData.name)}
                </AvatarFallback>
              )}
            </Avatar>
          </div>

          <div className="flex flex-row items-center justify-center gap-2">
            <h1 className="text-lg font-semibold text-primary">
              {siteData.name}
            </h1>

            <Image src={verifiedIcon} alt="verified" />
          </div>

          <div className="w-full max-w-[420px] flex flex-wrap items-center justify-center gap-2 pointer-events-none">
            <div className="flex flex-row items-center justify-center space-x-1">
              <MapPin size={14} className="text-muted-foreground" />

              <span className="text-sm text-primary font-medium">
                {siteData.city}
              </span>
            </div>

            {siteData.phone && (
              <div className="flex flex-row items-center justify-center space-x-1">
                <Phone size={14} className="text-muted-foreground" />

                <span className="text-sm text-primary font-medium">
                  {siteData.phone}
                </span>
              </div>
            )}

            {siteData.email && (
              <div className="flex flex-row items-center justify-center space-x-1">
                <Mail size={14} className="text-muted-foreground" />

                <span className="text-sm text-primary font-medium">
                  {siteData.email}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="p-8 w-full">
        <div className="w-full max-w-[1200px] flex flex-row items-start justify-center">
          <div className="w-full max-w-[300px] flex flex-col items-start justify-start gap-2">
            <Button
              size={"lg"}
              className="w-full bg-green-600 hover:bg-green-600/80"
            >
              <RiWhatsappFill color="#fff" />
              Chamar no Whatsapp
            </Button>
            <div className="w-full flex flex-col p-2 bg-white shadow-sm rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
