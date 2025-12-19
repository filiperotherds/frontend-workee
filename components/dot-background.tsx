"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "./ui/dot-pattern";

export function DotBackground() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <DotPattern
        glow={true}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]"
        )}
      />
    </div>
  );
}
