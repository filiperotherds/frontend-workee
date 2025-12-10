import { Separator } from "@/components/ui/separator";
import { Slash, Hash } from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { docsContent } from "@/lib/docs-content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DocPage({ params }: PageProps) {
  const { slug } = await params;
  const data = docsContent[slug];

  if (!data) {
    return notFound();
  }

  return (
    <div className="flex flex-col items-start justify-start pb-20 animate-in fade-in duration-500">
      <div className="space-y-6 w-full">
        <div className="flex flex-row items-center text-xs text-muted-foreground space-x-1.5">
          <span>Documentos</span>
          <Slash className="size-2.5 -rotate-25 pt-0.5" />
          <span>{data.category}</span>
          <Slash className="size-2.5 -rotate-25 pt-0.5" />
          <span className="text-zinc-900 font-medium">{data.title}</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-extrabold text-zinc-800 tracking-tight">
            {data.title}
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {data.description}
          </p>
        </div>

        <Separator />

        <div className="prose prose-zinc max-w-none text-muted-foreground text-sm leading-7">
          <p>{data.mainBody}</p>
        </div>
      </div>

      {data.subSections.length > 0 && (
        <div className="w-full mt-12 flex flex-col space-y-12">
          {data.subSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24 flex flex-col space-y-4 group"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-zinc-800">
                  {section.title}
                </h2>

                <Link
                  href={`#${section.id}`}
                  className="text-zinc-300 hover:text-blue-600 opacity-0 group-hover:opacity-100 transition-all"
                  aria-label="Link para esta seção"
                >
                  <Hash className="size-4" />
                </Link>
              </div>

              <div className="prose prose-zinc max-w-none text-muted-foreground text-sm leading-7">
                <p>{section.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
