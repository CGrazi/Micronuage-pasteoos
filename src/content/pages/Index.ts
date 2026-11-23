import type { ComponentProps } from "react";
import type { Faq } from "@/components/sections/Faq";
import type { Features } from "@/components/sections/Features";
import type { Gallery } from "@/components/sections/Gallery";
import type { GenericSection } from "@/components/sections/GenericSection";
import type { Marquee } from "@/components/sections/Marquee";
import { images } from "@/content/images";

/** The lists the "Pasteoos" page shows. Edit them here: src/pages/Index.tsx reads them. */
export const marqueeItems: NonNullable<ComponentProps<typeof Marquee>["items"]> = [
  {
    "text": "Massa feita todos os dias"
  },
  {
    "text": "Recheios frescos e generosos"
  },
  {
    "text": "Encomendas para eventos"
  },
  {
    "text": "Retirada no balcão ou entrega"
  }
];

export const shopItems: NonNullable<ComponentProps<typeof GenericSection>["items"]> = [
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

export const galleryItems: NonNullable<ComponentProps<typeof Gallery>["items"]> = [
  {
    "image": images.galleryImg1.src,
    "caption": "Nosso balcão"
  },
  {
    "image": images.galleryImg2.src,
    "caption": "Pães do dia"
  },
  {
    "image": images.galleryImg3.src,
    "caption": "Sobremesas"
  },
  {
    "image": images.galleryImg9.src,
    "caption": "Vitrine"
  },
  {
    "image": images.galleryImg10.src,
    "caption": "Croissants"
  },
  {
    "image": images.galleryImg11.src,
    "caption": "Macarons"
  }
];

export const featuresItems: NonNullable<ComponentProps<typeof Features>["items"]> = [
  {
    "icon": "clock",
    "title": "Feito no dia",
    "description": "Massa preparada de madrugada, assada pela manhã. O que sobra não volta no dia seguinte."
  },
  {
    "icon": "heart",
    "title": "Recheio de verdade",
    "description": "Sem conservantes, sem atalho. Queijo, carne, frango e doces feitos aqui."
  },
  {
    "icon": "truck",
    "title": "Entrega e retirada",
    "description": "Retire no balcão ou receba em casa. Encomendas para festas e eventos com antecedência."
  }
];

export const faqItems: NonNullable<ComponentProps<typeof Faq>["items"]> = [
  {
    "question": "Fazem encomendas para festas?",
    "answer": "Sim. Pedidos com pelo menos 3 dias de antecedência. Montamos kits com salgados, doces e bolos sob medida."
  },
  {
    "question": "Tem opções sem glúten ou veganas?",
    "answer": "Temos macarons (sem glúten) e algumas opções veganas que mudam toda semana. Pergunte no balcão ou pelo WhatsApp."
  },
  {
    "question": "Qual o horário de funcionamento?",
    "answer": "Terça a sábado, das 7h às 19h. Domingo, das 7h às 13h. Segunda fechamos para descanso."
  }
];
