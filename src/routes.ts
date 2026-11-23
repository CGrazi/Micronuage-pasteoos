import type { ComponentType } from "react";
import IndexPage from "@/pages/Index";
import VitrinePage from "@/pages/Vitrine";
import GaleriaPage from "@/pages/Galeria";
import SobrePage from "@/pages/Sobre";
import ContatoPage from "@/pages/Contato";

/** Every page of the site. The menu (src/content/site.ts) links to these paths. */
export const routes: { path: string; name: string; Page: ComponentType }[] = [
  { path: "/", name: "Pasteoos", Page: IndexPage },
  { path: "/vitrine", name: "Vitrine", Page: VitrinePage },
  { path: "/galeria", name: "Galeria", Page: GaleriaPage },
  { path: "/sobre", name: "Sobre", Page: SobrePage },
  { path: "/contato", name: "Contato", Page: ContatoPage },
];
