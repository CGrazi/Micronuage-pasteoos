import type { ComponentProps } from "react";
import type { Gallery } from "@/components/sections/Gallery";
import { images } from "@/content/images";

/** The lists the "Galeria" page shows. Edit them here: src/pages/Galeria.tsx reads them. */
export const galleryItems: NonNullable<ComponentProps<typeof Gallery>["items"]> = [
  {
    "image": images.galleryImg1.src,
    "caption": "Nosso espaço"
  },
  {
    "image": images.galleryImg2.src,
    "caption": "Pães do dia"
  },
  {
    "image": images.galleryImg3.src,
    "caption": "Sobremesa de framboesa"
  },
  {
    "image": images.galleryImg4.src,
    "caption": "Tiramisu"
  },
  {
    "image": images.galleryImg5.src,
    "caption": "Pães rústicos"
  },
  {
    "image": images.galleryImg6.src,
    "caption": "Panna cotta"
  },
  {
    "image": images.galleryImg7.src,
    "caption": "Cupcake de baunilha"
  },
  {
    "image": images.galleryImg8.src,
    "caption": "Merengues"
  }
];
