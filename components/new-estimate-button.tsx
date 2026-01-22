"use client"; // Necessário pois usamos useState

import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

// Definição dos passos conforme a imagem
const steps = [
  { id: 1, title: "Your details", description: "Name and email" },
  { id: 2, title: "Company details", description: "Website and location" },
  { id: 3, title: "Invite your team", description: "Start collaborating" },
  { id: 4, title: "Add your socials", description: "Automatic sharing" },
];

export function NewEstimateButton() {
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false);

  // Funções de navegação
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault(); // Previne submit real
    if (currentStep < steps.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          size={"default"}
          className="text-sm w-full bg-blue-500 hover:bg-blue-500/80 text-white hover:text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          Novo Orçamento
        </Button>
      </DialogTrigger>

      <DialogContent className="w-full sm:max-w-[800px] rounded-2xl">
        <DialogHeader className="gap-0 mb-6">
          <DialogTitle className="font-sans text-base">
            Novo Orçamento
          </DialogTitle>
          <DialogDescription className="font-sans">
            Crie um novo orçamento seguindo os passos abaixo.
          </DialogDescription>
        </DialogHeader>

        {/* --- INICIO DO STEPPER (REPRODUÇÃO DA IMAGEM) --- */}
        <div className="relative w-full mb-8">
          {/* Linha pontilhada de fundo */}
          <div className="absolute top-4 left-0 w-full h-[1px] border-t-2 border-dotted border-gray-200 -z-10" />

          <div className="flex justify-between w-full">
            {steps.map((step) => {
              const isCompleted = currentStep > step.id;
              const isActive = currentStep === step.id;

              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center group bg-white px-2"
                >
                  {" "}
                  {/* bg-white para esconder a linha atrás do círculo */}
                  {/* Círculo do Passo */}
                  <div
                    className={`
                                            flex items-center justify-center w-8 h-8 rounded-full border-2 text-sm font-semibold transition-colors duration-200
                                            ${
                                              isCompleted
                                                ? "bg-green-600 border-green-600 text-white"
                                                : isActive
                                                ? "border-gray-900 text-gray-900 bg-white"
                                                : "border-gray-200 text-gray-400 bg-white"
                                            }
                                        `}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  {/* Textos (Titulo e Descrição) */}
                  <div className="mt-2 text-center">
                    <p
                      className={`text-sm font-medium ${
                        isActive || isCompleted
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-500 hidden sm:block">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* --- FIM DO STEPPER --- */}

        <form
          className="space-y-4 py-4 min-h-[200px]"
          onSubmit={currentStep === steps.length ? undefined : handleNext}
        >
          {/* Renderização Condicional do Conteúdo baseada no currentStep */}
          {currentStep === 1 && (
            <div className="grid gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="grid gap-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Ex: João Silva" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="joao@empresa.com"
                  required
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="grid gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="grid gap-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="www.suaempresa.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Localização</Label>
                <Input id="location" placeholder="São Paulo, SP" />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="grid gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="flex flex-col items-center justify-center h-32 border-2 border-dashed rounded-lg bg-gray-50">
                <p className="text-sm text-gray-500">
                  Área de convite de equipe
                </p>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="grid gap-2">
                <Label htmlFor="linkedin">LinkedIn</Label>
                <Input id="linkedin" placeholder="url do perfil" />
              </div>
            </div>
          )}

          <DialogFooter className="flex justify-between sm:justify-between w-full mt-6">
            {/* Botão Cancelar ou Voltar */}
            {currentStep === 1 ? (
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>
            ) : (
              <Button type="button" variant="outline" onClick={handleBack}>
                Voltar
              </Button>
            )}

            {/* Botão Próximo ou Salvar */}
            {currentStep < steps.length ? (
              <Button type="submit">Próximo</Button>
            ) : (
              <Button type="submit" onClick={() => console.log("Finalizar")}>
                Criar Orçamento
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
