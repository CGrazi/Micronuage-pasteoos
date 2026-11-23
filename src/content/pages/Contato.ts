import type { ComponentProps } from "react";
import type { Hours } from "@/components/sections/Hours";

/** The lists the "Contato" page shows. Edit them here: src/pages/Contato.tsx reads them. */
export const hoursItems: NonNullable<ComponentProps<typeof Hours>["items"]> = [
  {
    "day": "Terça a sábado",
    "hours": "7h às 19h"
  },
  {
    "day": "Domingo",
    "hours": "7h às 13h"
  },
  {
    "day": "Segunda",
    "hours": "Fechado"
  }
];
