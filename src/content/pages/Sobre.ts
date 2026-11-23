import type { ComponentProps } from "react";
import type { About } from "@/components/sections/About";

/** The lists the "Sobre" page shows. Edit them here: src/pages/Sobre.tsx reads them. */
export const aboutBullets: NonNullable<ComponentProps<typeof About>["bullets"]> = [
  {
    "text": "Massa feita de madrugada, assada pela manhã"
  },
  {
    "text": "Recheios preparados na cozinha, sem conservantes"
  },
  {
    "text": "Ingredientes de fornecedores locais"
  }
];
