"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { ChevronDownIcon } from "lucide-react";
import { EstimateFormSchema } from "@/app/(org)/(operational)/new-estimate/estimate-form-schema";

interface DatePickerProps {
  data: EstimateFormSchema;
  updateField: (field: keyof EstimateFormSchema, value: any) => void;
}

export function DatePicker({ data, updateField }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!data.deliveryDeadline}
          className="data-[empty=true]:text-muted-foreground w-[212px] justify-between text-left font-normal"
        >
          {data.deliveryDeadline ? (
            format(new Date(data.deliveryDeadline), "PPP")
          ) : (
            <span>Selecione uma data</span>
          )}
          <ChevronDownIcon className="h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={
            data.deliveryDeadline ? new Date(data.deliveryDeadline) : undefined
          }
          onSelect={(date) => {
            updateField("deliveryDeadline", date);
          }}
          defaultMonth={
            data.deliveryDeadline ? new Date(data.deliveryDeadline) : undefined
          }
        />
      </PopoverContent>
    </Popover>
  );
}
