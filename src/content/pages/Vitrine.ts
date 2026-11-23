import type { ComponentProps } from "react";
import type { GenericSection } from "@/components/sections/GenericSection";
import { images } from "@/content/images";

/** The lists the "Vitrine" page shows. Edit them here: src/pages/Vitrine.tsx reads them. */
export const vitrineItems: NonNullable<ComponentProps<typeof GenericSection>["items"]> = [
  {
    "title": "Croissant amanteigado",
    "group": "Salgados",
    "badge": "Mais pedido",
    "image": images.vitrineItem1.src,
    "meta": "Massa folhada, manteiga francesa",
    "price": "R$ 12,90"
  },
  {
    "title": "Bolo de chocolate",
    "group": "Doces",
    "image": images.vitrineItem2.src,
    "meta": "Fatia generosa, ganache 70%",
    "price": "R$ 14,90"
  },
  {
    "title": "Cookies artesanais",
    "group": "Doces",
    "image": images.vitrineItem3.src,
    "meta": "Chocolate belga, crocante por fora",
    "price": "R$ 8,90"
  },
  {
    "title": "Tortinhas de frutas",
    "group": "Doces",
    "badge": "Novidade",
    "image": images.vitrineItem4.src,
    "meta": "Creme pâtissier e frutas da estação",
    "price": "R$ 16,90"
  },
  {
    "title": "Macarons (caixa com 6)",
    "group": "Doces",
    "image": images.vitrineItem5.src,
    "meta": "Sabores variados, sem glúten",
    "price": "R$ 29,90"
  },
  {
    "title": "Cupcakes pastel",
    "group": "Doces",
    "image": images.vitrineItem6.src,
    "meta": "Cobertura de buttercream",
    "price": "R$ 11,90"
  },
  {
    "title": "Pães enrolados",
    "group": "Salgados",
    "image": images.vitrineItem7.src,
    "meta": "Queijo e orégano, massa macia",
    "price": "R$ 9,90"
  },
  {
    "title": "Cheesecake",
    "group": "Doces",
    "badge": "Mais pedido",
    "image": images.vitrineItem8.src,
    "meta": "Calda de frutas vermelhas",
    "price": "R$ 18,90"
  }
];
