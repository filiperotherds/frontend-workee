import { Check } from "lucide-react";

import { steps } from "@/app/(org)/(operational)/new-estimate/steps";

interface NewEstimateStepsProps {
  currentStep: number;
}

export function NewEstimateSteps({ currentStep }: NewEstimateStepsProps) {
  return (
    <div className="w-full flex flex-row items-center justify-between space-x-4">
      {steps.map((step) => {
        const isCompleted = currentStep > step.id;
        const isActive = currentStep === step.id;
        return (
          <div
            key={step.id}
            className={`${
              step.id !== 4 ? "w-full space-x-4" : ""
            } flex flex-row items-center`}
          >
            <div
              className={`shrink-0 flex items-center justify-center size-12 rounded-full border-2 text-sm font-semibold transition-colors duration-200 ${
                isCompleted
                  ? "bg-green-600 border-green-600 text-white"
                  : isActive
                  ? "border-muted-foreground/80 text-zinc-700 bg-white"
                  : "border-gray-200 text-gray-400 bg-white"
              }`}
            >
              {isCompleted ? <Check size={18} /> : <step.icon size={18} />}
            </div>

            {step.id !== 4 ? (
              <div className="flex-1 h-[1px] border-t-2 border-dotted border-gray-200" />
            ) : (
              <></>
            )}
          </div>
        );
      })}
    </div>
  );
}
