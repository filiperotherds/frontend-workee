"use client";

import { useState, useRef } from "react";
import { Plus, Check, ChevronRight, ChevronLeft, Loader2 } from "lucide-react";
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
import { FormEvent, useTransition } from "react";
// Certifique-se de importar o formatCnpj
import { formatPhone, formatCep, formatCnpj } from "@/lib/utils";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldLegend,
  FieldTitle,
} from "./ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

// ... Interfaces e useFormState ...
interface FormState {
  success: boolean;
  message: string | null;
  errors: Record<string, string[]> | null;
}

function useFormState(
  action: (data: FormData) => Promise<FormState>,
  onSuccess?: () => Promise<void> | void,
  initialState?: FormState
) {
  const [isPending, startTransition] = useTransition();
  const [formState, setFormState] = useState(
    initialState ?? { success: false, message: null, errors: null }
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    startTransition(async () => {
      const state = await action(data);
      if (state.success && onSuccess) {
        await onSuccess();
      }
      setFormState(state);
    });
  }

  return [formState, handleSubmit, isPending] as const;
}

async function createEstimateAction(data: FormData): Promise<FormState> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log("Submetendo ao servidor:", Object.fromEntries(data));
  return {
    success: true,
    message: "Orçamento criado com sucesso!",
    errors: null,
  };
}

const steps = [
  { id: 1, title: "Cliente", description: "Dados cadastrais" },
  { id: 2, title: "Orçamento", description: "Descrição e valores" },
  { id: 3, title: "Pagamento", description: "Condições e prazos" },
  { id: 4, title: "Termos", description: "Info. Adicionais" },
];

const initialFormData = {
  name: "",
  empresa: "",
  phone: "",
  email: "",
  cep: "",
  address: "",
  num: "",
};

export function NewEstimateButton() {
  const [currentStep, setCurrentStep] = useState(1);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const [isLoadingCep, setIsLoadingCep] = useState(false);
  const [isLoadingCnpj, setIsLoadingCnpj] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const fetchAddressByCep = async (cep: string) => {
    setIsLoadingCep(true);
    try {
      const cleanCep = cep.replace(/\D/g, "");
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v2/${cleanCep}`
      );
      if (!response.ok) throw new Error("CEP não encontrado");
      const data = await response.json();

      const formattedAddress = `${data.street}, ${data.neighborhood}, ${data.city} - ${data.state}`;

      setFormData((prev) => ({
        ...prev,
        address: formattedAddress,
      }));
      document.getElementById("num")?.focus();
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    } finally {
      setIsLoadingCep(false);
    }
  };

  // --- NOVO: Função para buscar CNPJ ---
  const fetchCompanyByCnpj = async (cnpj: string) => {
    setIsLoadingCnpj(true);
    try {
      const cleanCnpj = cnpj.replace(/\D/g, "");
      const response = await fetch(
        `https://brasilapi.com.br/api/cnpj/v1/${cleanCnpj}`
      );

      if (!response.ok) throw new Error("CNPJ não encontrado");

      const data = await response.json();

      // Formata endereço vindo do CNPJ (Opcional, mas útil)
      const addressFromCnpj = `${data.logradouro}, ${data.bairro}, ${data.municipio} - ${data.uf}`;
      const cepFromCnpj = formatCep(data.cep);

      setFormData((prev) => ({
        ...prev,
        empresa: data.razao_social, // Preenche a Razão Social
        // Opcional: Já preenche o endereço também se estiver vazio
        cep: prev.cep ? prev.cep : cepFromCnpj,
        address: prev.address ? prev.address : addressFromCnpj,
        num: prev.num ? prev.num : data.numero,
        email: prev.email ? prev.email : data.email || "",
      }));
    } catch (error) {
      console.error("Erro ao buscar CNPJ:", error);
    } finally {
      setIsLoadingCnpj(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    let finalValue = value;

    if (field === "phone") {
      finalValue = formatPhone(value);
    }

    if (field === "cep") {
      finalValue = formatCep(value);
      const cleanCep = finalValue.replace(/\D/g, "");
      if (cleanCep.length === 8) {
        fetchAddressByCep(cleanCep);
      }
    }

    // --- NOVO: Lógica do CNPJ ---
    if (field === "cnpj") {
      finalValue = formatCnpj(value);
      const cleanCnpj = finalValue.replace(/\D/g, "");
      // CNPJ tem 14 dígitos
      if (cleanCnpj.length === 14) {
        fetchCompanyByCnpj(cleanCnpj);
      }
    }

    setFormData((prev) => ({ ...prev, [field]: finalValue }));
  };

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        setCurrentStep(1);
        setFormData(initialFormData);
        setIsLoadingCep(false);
        setIsLoadingCnpj(false); // Reset loading
      }, 300);
    }
  };

  const [state, handleSubmit, isPending] = useFormState(
    createEstimateAction,
    () => {
      handleOpenChange(false);
    }
  );

  const handleNext = () => {
    if (formRef.current) {
      if (formRef.current.checkValidity()) {
        if (currentStep < steps.length) {
          setCurrentStep((prev) => prev + 1);
        }
      } else {
        formRef.current.reportValidity();
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          size={"default"}
          className="text-sm w-full bg-blue-500 hover:bg-blue-500/80 text-white"
        >
          <Plus /> Novo Orçamento
        </Button>
      </DialogTrigger>

      <DialogContent
        className="font-sans w-full sm:max-w-[600px] rounded-2xl max-h-[calc(100vh-64px)] overflow-scroll no-scrollbar"
        onInteractOutside={(e) => isPending && e.preventDefault()}
      >
        <DialogHeader className="gap-0 mb-6">
          <DialogTitle>Novo Orçamento</DialogTitle>
          <DialogDescription>
            Crie um novo orçamento seguindo os passos abaixo.
          </DialogDescription>
        </DialogHeader>

        {/* STEPPER VISUAL */}
        <div className="relative w-full mb-8">
          <div className="absolute top-4 left-0 w-full h-[1px] border-t-2 border-dotted border-gray-200 -z-10 " />
          <div className="flex justify-between w-full">
            {steps.map((step) => {
              const isCompleted = currentStep > step.id;
              const isActive = currentStep === step.id;
              return (
                <div
                  key={step.id}
                  className="flex flex-col items-center group bg-white"
                >
                  <div
                    className={`flex items-center justify-center size-8 rounded-full border-2 text-sm font-semibold transition-colors duration-200 ${
                      isCompleted
                        ? "bg-green-600 border-green-600 text-white"
                        : isActive
                        ? "border-gray-900 text-gray-900 bg-white"
                        : "border-gray-200 text-gray-400 bg-white"
                    }`}
                  >
                    {isCompleted ? <Check className="w-4 h-4" /> : step.id}
                  </div>
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

        {/* FORMULÁRIO */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4"
          noValidate
        >
          {Object.entries(formData).map(([key, value]) => (
            <input key={key} type="hidden" name={key} value={value} />
          ))}

          {currentStep === 1 && (
            <div className="grid gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="grid gap-2 mb-4">
                <Label htmlFor="type">Tipo de Cliente</Label>
                <RadioGroup
                  value={formData.type}
                  onValueChange={(value) => handleInputChange("type", value)}
                  className="w-full"
                >
                  <FieldLabel htmlFor="cpf">
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>Pessoa Física</FieldTitle>
                        <FieldDescription>
                          Para clientes individuais com CPF.
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem value="cpf" id="cpf" />
                    </Field>
                  </FieldLabel>

                  <FieldLabel htmlFor="cnpj">
                    <Field orientation="horizontal">
                      <FieldContent>
                        <FieldTitle>Pessoa Jurídica</FieldTitle>
                        <FieldDescription>
                          Para negócios com CNPJ.
                        </FieldDescription>
                      </FieldContent>
                      <RadioGroupItem value="cnpj" id="cnpj" />
                    </Field>
                  </FieldLabel>
                </RadioGroup>
              </div>

              {formData.type === "cpf" ? (
                <>
                  <Field className="grid gap-2">
                    <div className="flex items-center justify-start gap-2">
                      <FieldLabel htmlFor="name">Nome</FieldLabel>
                      <FieldDescription className="text-[10px] font-sans text-destructive">
                        Obrigatório
                      </FieldDescription>
                    </div>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                    />
                  </Field>
                </>
              ) : (
                <>
                  {/* --- BLOCO DO CNPJ --- */}
                  <Field className="grid gap-2">
                    <FieldLabel htmlFor="cnpj">CNPJ</FieldLabel>
                    <InputGroup>
                      <InputGroupInput
                        id="cnpj"
                        required
                        placeholder="00.000.000/0000-00"
                        maxLength={18}
                        value={formData.cnpj}
                        onChange={(e) =>
                          handleInputChange("cnpj", e.target.value)
                        }
                        disabled={isLoadingCnpj}
                      />
                      {isLoadingCnpj && (
                        <InputGroupAddon align={"inline-end"}>
                          <Loader2 className="animate-spin" />
                        </InputGroupAddon>
                      )}
                    </InputGroup>
                  </Field>

                  <Field className="grid gap-2">
                    <FieldLabel htmlFor="empresa">Razão Social</FieldLabel>
                    <Input
                      id="empresa"
                      required
                      value={formData.empresa}
                      onChange={(e) =>
                        handleInputChange("empresa", e.target.value)
                      }
                      placeholder="Nome da Empresa"
                    />
                  </Field>
                </>
              )}

              <Field className="grid gap-2">
                <FieldLabel htmlFor="phone">Telefone</FieldLabel>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="(00) 00000-0000"
                />
              </Field>

              <Field className="grid gap-2 mb-4">
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="contato@empresa.com"
                />
              </Field>

              <div className="grid grid-cols-2 gap-2">
                <Field className="grid gap-2">
                  <FieldLabel htmlFor="cep">CEP</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="cep"
                      required
                      placeholder="00000-000"
                      maxLength={9}
                      value={formData.cep}
                      onChange={(e) => handleInputChange("cep", e.target.value)}
                      disabled={isLoadingCep}
                    />
                    {isLoadingCep && (
                      <InputGroupAddon align={"inline-end"}>
                        <Loader2 className="animate-spin" />
                      </InputGroupAddon>
                    )}
                  </InputGroup>
                </Field>

                <Field className="grid gap-2">
                  <FieldLabel htmlFor="num">Número</FieldLabel>
                  <Input
                    id="num"
                    required
                    value={formData.num}
                    onChange={(e) => handleInputChange("num", e.target.value)}
                  />
                </Field>
              </div>

              <Field className="grid gap-2">
                <FieldLabel htmlFor="address">Endereço</FieldLabel>
                <Input
                  id="address"
                  required
                  placeholder="Logradouro, Bairro, Cidade - UF"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                />
              </Field>
            </div>
          )}

          {/* ... Restante dos Steps ... */}
          {/* ... Footer ... */}
          {currentStep === 2 && (
            <div className="grid gap-4 animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="grid gap-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={formData.website}
                  onChange={(e) => handleInputChange("website", e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Localização</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                />
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
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) =>
                    handleInputChange("linkedin", e.target.value)
                  }
                />
              </div>
            </div>
          )}

          {state.errors && (
            <div className="text-red-500 text-sm mt-2">
              Algo deu errado. Verifique os dados.
            </div>
          )}

          <DialogFooter className="flex justify-between sm:justify-between w-full mt-6">
            {currentStep === 1 ? (
              <DialogClose asChild>
                <Button
                  type="button"
                  variant={"outline"}
                  size={"sm"}
                  disabled={isPending}
                >
                  Cancelar
                </Button>
              </DialogClose>
            ) : (
              <Button
                type="button"
                variant="outline"
                size={"sm"}
                onClick={handleBack}
                disabled={isPending}
              >
                <ChevronLeft /> Voltar
              </Button>
            )}

            {currentStep < steps.length ? (
              <Button
                type="button"
                variant={"default"}
                size={"sm"}
                onClick={handleNext}
                disabled={isPending || isLoadingCep || isLoadingCnpj}
              >
                Seguinte <ChevronRight />
              </Button>
            ) : (
              <Button
                type="submit"
                variant={"default"}
                size={"sm"}
                className="bg-blue-500 hover:bg-blue-500/80"
                disabled={isPending}
              >
                {isPending ? <Loader2 className="animate-spin" /> : <Check />}
                Criar Orçamento
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
