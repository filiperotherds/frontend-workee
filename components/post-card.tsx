import { RiVerifiedBadgeFill } from "react-icons/ri";

export default function PostCard() {
  return (
    <div className="w-sm p-4 space-y-4 flex flex-col items-start justify-center bg-white rounded-xl">
      {/* Header content - photo / name / @ */}
      <div className="w-full flex flex-row items-center justify-start space-x-3">
        <div className="size-10 rounded-full border border-border overflow-hidden">
          <img
            src="/placeholder.svg"
            alt="foto perfil"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col items-start justify-center">
          <div className="flex flex-row items-center justify-start space-x-1">
            <h1 className="text-sm font-medium text-foreground">
              jobble.brasil
            </h1>
            <RiVerifiedBadgeFill className="size-4 text-blue-500" />
          </div>

          <span className="text-xs font-medium text-muted-foreground">
            @jobble.brasil
          </span>
        </div>
      </div>

      <div className="w-full h-auto">
        <p className="text-xs text-foreground">
          A Jobble conecta você a profissionais qualificados para qualquer
          serviço que você precise. Com avaliações reais e preços transparentes,
          encontrar o profissional ideal nunca foi tão fácil!
        </p>
      </div>
    </div>
  );
}
