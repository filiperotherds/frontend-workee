"use client";

import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { EstimateFormSchema } from "../estimate-form-schema";
import { Dispatch, SetStateAction } from "react";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/date-picker";
import { BookMarked, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

interface EstimateDataProps {
  data: EstimateFormSchema;
  updateField: (field: keyof EstimateFormSchema, value: string) => void;
  setFormData: Dispatch<SetStateAction<EstimateFormSchema>>;
}

export function EstimateData({
  data,
  updateField,
  setFormData,
}: EstimateDataProps) {
  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...(prev.items || []),
        {
          productId: crypto.randomUUID(),
          name: "",
          quantity: 1,
          unitValue: 0,
        },
      ],
    }));
  };

  const removeItem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const updateItemValue = (
    index: number,
    field: "name" | "quantity" | "unitValue",
    value: string | number
  ) => {
    setFormData((prev) => {
      const newItems = [...prev.items];
      newItems[index] = {
        ...newItems[index],
        [field]: value,
      };
      return { ...prev, items: newItems };
    });
  };

  return (
    <div className="w-full space-y-8 animate-in fade-in slide-in-from-left-4 duration-300">
      <Field>
        <div className="flex flex-row items-center space-x-2">
          <FieldLabel>Descrição</FieldLabel>
          <span className="text-xs text-muted-foreground/80 font-medium">
            opcional
          </span>
        </div>
        <Textarea
          id="description"
          rows={4}
          value={data.description ? data.description : ""}
          placeholder=""
          onChange={(e) => updateField("description", e.target.value)}
        />
      </Field>

      <Field>
        <div className="flex flex-row items-center space-x-2">
          <FieldLabel>Conclusão</FieldLabel>
          <span className="text-xs text-muted-foreground/80 font-medium">
            opcional
          </span>
        </div>
        <DatePicker data={data} updateField={updateField} />
      </Field>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <FieldLabel>Itens do Orçamento</FieldLabel>
          <div className="flex flex-row items-center space-x-2">
            <Button
              onClick={addItem}
              size="sm"
              variant="outline"
              className="gap-2"
            >
              <Plus size={16} /> Adicionar Item
            </Button>

            <Button size="icon-sm" variant="outline" className="gap-2">
              <BookMarked />
            </Button>
          </div>
        </div>

        {data.items && data.items.length > 0 && (
          <div className="grid grid-cols-12 gap-4 px-1 text-xs font-medium text-muted-foreground tracking-wider">
            <div className="col-span-6">Nome do Item</div>
            <div className="col-span-2">Qtd</div>
            <div className="col-span-3">Valor Unit.</div>
            <div className="col-span-1"></div>
          </div>
        )}

        <div className="space-y-3">
          {data.items?.map((item, index) => (
            <div
              key={item.productId || index}
              className="grid grid-cols-12 gap-4 items-start group"
            >
              <div className="col-span-6">
                <Input
                  placeholder="Nome do produto ou serviço"
                  value={item.name}
                  onChange={(e) =>
                    updateItemValue(index, "name", e.target.value)
                  }
                />
              </div>

              <div className="col-span-2">
                <Input
                  type="number"
                  min={1}
                  placeholder="1"
                  value={item.quantity}
                  onChange={(e) =>
                    updateItemValue(index, "quantity", Number(e.target.value))
                  }
                />
              </div>

              <div className="col-span-3">
                <InputGroup>
                  <InputGroupAddon>R$</InputGroupAddon>
                  <InputGroupInput
                    type="text"
                    inputMode="numeric"
                    placeholder="0,00"
                    value={
                      item.unitValue
                        ? item.unitValue.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        : "0,00"
                    }
                    onChange={(e) => {
                      const rawValue = e.target.value.replace(/\D/g, "");

                      const numericValue = Number(rawValue) / 100;

                      updateItemValue(index, "unitValue", numericValue);
                    }}
                  />
                </InputGroup>
                <div className="text-[10px] text-muted-foreground text-right mt-1 px-1">
                  Total: R$ {(item.quantity * item.unitValue).toFixed(2)}
                </div>
              </div>

              <div className="col-span-1 flex justify-end">
                <Button
                  size={"icon"}
                  variant={"ghost"}
                  type="button"
                  onClick={() => removeItem(index)}
                  className="text-muted-foreground hover:text-destructive hover:bg-destructive/5 transition-colors"
                >
                  <Trash2 size={18} />
                </Button>
              </div>
            </div>
          ))}

          {(!data.items || data.items.length === 0) && (
            <div className="text-center py-8 border-2 border-dashed rounded-lg">
              <p className="text-sm text-muted-foreground mb-3">
                Nenhum item adicionado ainda.
              </p>
              <Button onClick={addItem} variant="secondary" size="sm">
                Adicionar primeiro item
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
