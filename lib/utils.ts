import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCep = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2")
    .substring(0, 9);
};

export const formatPhone = (value: string) => {
  const numbers = value.replace(/\D/g, "");

  const char = numbers.substring(0, 11);

  if (char.length === 0) return "";

  if (char.length <= 2) return `(${char}`;

  if (char.length <= 6) return `(${char.substring(0, 2)}) ${char.substring(2)}`;

  if (char.length === 11) {
    return `(${char.substring(0, 2)}) ${char.substring(2, 7)}-${char.substring(7)}`;
  }

  return `(${char.substring(0, 2)}) ${char.substring(2, 6)}-${char.substring(6)}`;
};

export const formatCnpj = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .substring(0, 18);
};