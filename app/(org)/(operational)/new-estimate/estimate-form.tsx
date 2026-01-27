"use client";

import { NewEstimateSteps } from "@/components/new-estimate-steps";
import { useState } from "react";
import { CustomerData } from "./_forms/customer-data";
import { EstimateFormSchema } from "./estimate-form-schema";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft, ChevronRight, Loader } from "lucide-react";

import { steps } from "@/app/(org)/(operational)/new-estimate/steps";
import { useFormState } from "@/hooks/use-form-state";
import { createNewEstimate } from "./actions";
import { useRouter } from "next/navigation";
import { EstimateData } from "./_forms/estimate-data";

export function EstimateForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + 14);

  const defaultDeadline = date;

  const [formData, setFormData] = useState<EstimateFormSchema>({
    name: "",
    phone: null,
    email: null,
    cep: null,
    address: null,
    number: null,
    description: null,
    deliveryDeadline: defaultDeadline,
    items: [],
    paymentMethod: null,
    installments: null,
    downPayment: null,
    validity: null,
  });

  const updateField = (field: keyof EstimateFormSchema, value: string | Date) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const [{ errors, message, success }, handleSubmit, isPending] = useFormState(
    () => {},
    //createNewEstimate,
    () => {
      router.push("/estimates");
    }
  );

  return (
    <div className="w-full h-full max-w-[800px] flex flex-col gap-8">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-base md:text-lg font-bold text-primary">
          Novo Orçamento
        </h1>
        <p className="text-xs md:text-sm text-muted-foreground">
          Preencha o formulário abaixo para gerar um novo orçamento
        </p>
      </div>

      <NewEstimateSteps currentStep={currentStep} />

      <form
        className="w-full h-full flex flex-col items-start justify-between space-y-8"
        onSubmit={handleSubmit}
      >
        <div className="w-full h-full overflow-auto no-scrollbar p-1">
          {currentStep === 1 && (
            <CustomerData
              data={formData}
              updateField={updateField}
              setFormData={setFormData}
            />
          )}
          {currentStep === 2 && (
            <EstimateData
              data={formData}
              updateField={updateField}
              setFormData={setFormData}
            />
          )}
          {currentStep === 3 && <div />}
          {currentStep === 4 && <div />}
        </div>

        <div className="w-full flex flex-row items-center justify-between">
          {currentStep !== 1 ? (
            <Button variant={"outline"} size={"sm"} onClick={handleBack}>
              <ChevronLeft />
              Voltar
            </Button>
          ) : (
            <div />
          )}

          {currentStep !== 4 ? (
            <Button
              variant={"default"}
              size={"sm"}
              className="bg-blue-500 hover:bg-blue-500/80"
              onClick={handleNext}
              type="button"
            >
              Próximo
              <ChevronRight />
            </Button>
          ) : (
            <Button
              variant={"default"}
              size={"sm"}
              className="bg-blue-500 hover:bg-blue-500/80"
              type="submit"
              disabled={isPending}
            >
              {isPending ? (
                <Loader className="size-4 animate-spin" />
              ) : (
                <>
                  <Check />
                  Finalizar
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
