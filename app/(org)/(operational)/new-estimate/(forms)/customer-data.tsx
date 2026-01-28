"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatCep, formatPhone } from "@/lib/utils";
import { Loader, Search } from "lucide-react";
import { useState, Dispatch, SetStateAction } from "react";
import { EstimateFormSchema } from "../estimate-form-schema";

interface CustomerDataProps {
  data: EstimateFormSchema;
  updateField: (field: keyof EstimateFormSchema, value: string) => void;
  setFormData: Dispatch<SetStateAction<EstimateFormSchema>>;
}

export function CustomerData({
  data,
  updateField,
  setFormData,
}: CustomerDataProps) {
  const [isLoadingCep, setIsLoadingCep] = useState(false);

  const fetchAddressByCep = async (cep: string) => {
    setIsLoadingCep(true);
    try {
      const cleanCep = cep.replace(/\D/g, "");
      const response = await fetch(
        `https://brasilapi.com.br/api/cep/v2/${cleanCep}`
      );
      if (!response.ok) throw new Error("CEP não encontrado");
      const apiData = await response.json();

      const formattedAddress = `${apiData.street}, ${apiData.neighborhood}, ${apiData.city} - ${apiData.state}`;

      setFormData((prev) => ({
        ...prev,
        address: formattedAddress,
        cep: formatCep(cep),
      }));

      document.getElementById("number")?.focus();
    } catch (error) {
      console.error("Erro ao buscar CEP:", error);
    } finally {
      setIsLoadingCep(false);
    }
  };

  const handleCepChange = (value: string) => {
    const formatted = formatCep(value);
    updateField("cep", formatted);

    const cleanCep = formatted.replace(/\D/g, "");
    if (cleanCep.length === 8) {
      fetchAddressByCep(cleanCep);
    }
  };

  const handlePhoneChange = (value: string) => {
    const formatted = formatPhone(value);

    updateField("phone", formatted);
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-left-4 duration-300">
      <Field>
        <FieldLabel>Nome</FieldLabel>
        <div className="flex flex-row items-center gap-2">
          <Input
            id="name"
            value={data.name}
            onChange={(e) => updateField("name", e.target.value)}
          />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Search />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Pesquisar</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </Field>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <Field>
          <div className="flex flex-row items-center space-x-2">
            <FieldLabel>Telefone</FieldLabel>
            <span className="text-xs text-muted-foreground/80 font-medium">
              opcional
            </span>
          </div>
          <Input
            id="phone"
            type="tel"
            value={data.phone ? data.phone : ""}
            placeholder="(00) 00000-0000"
            onChange={(e) => handlePhoneChange(e.target.value)}
          />
        </Field>

        <Field>
          <div className="flex flex-row items-center space-x-2">
            <FieldLabel>E-mail</FieldLabel>
            <span className="text-xs text-muted-foreground/80 font-medium">
              opcional
            </span>
          </div>
          <Input
            id="email"
            type="email"
            value={data.email ? data.email : ""}
            placeholder="exemplo@email.com"
            onChange={(e) => updateField("email", e.target.value)}
          />
        </Field>
      </div>

      <Field className="max-w-40">
        <div className="flex flex-row items-center space-x-2">
          <FieldLabel>CEP</FieldLabel>
          <span className="text-xs text-muted-foreground/80 font-medium">
            opcional
          </span>
        </div>
        <InputGroup>
          <InputGroupInput
            id="cep"
            required
            placeholder="00000-000"
            maxLength={9}
            value={data.cep ? data.cep : ""}
            onChange={(e) => handleCepChange(e.target.value)}
            disabled={isLoadingCep}
          />
          {isLoadingCep && (
            <InputGroupAddon align={"inline-end"}>
              <Loader className="animate-spin" />
            </InputGroupAddon>
          )}
        </InputGroup>
      </Field>

      <div className="flex flex-col md:flex-row items-center gap-8">
        <Field>
          <div className="flex flex-row items-center space-x-2">
            <FieldLabel>Endereço</FieldLabel>
            <span className="text-xs text-muted-foreground/80 font-medium">
              opcional
            </span>
          </div>
          <Input
            id="address"
            value={data.address ? data.address : ""}
            onChange={(e) => updateField("address", e.target.value)}
          />
        </Field>

        <Field className="max-w-40">
          <div className="flex flex-row items-center space-x-2">
            <FieldLabel>Número</FieldLabel>
            <span className="text-xs text-muted-foreground/80 font-medium">
              opcional
            </span>
          </div>
          <Input
            id="number"
            value={data.number ? data.number : ""}
            onChange={(e) => updateField("number", e.target.value)}
          />
        </Field>
      </div>
    </div>
  );
}
