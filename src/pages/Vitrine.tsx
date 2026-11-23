import { GenericSection } from "@/components/sections/GenericSection";
import { vitrineItems } from "@/content/pages/Vitrine";

export default function VitrinePage() {
  return (
    <>
      <title>Vitrine · Pasteoos</title>
      <meta name="description" content="Pastéis, doces e salgados artesanais da Pasteoos. Massa feita no dia, recheio de verdade." />
      <GenericSection
        id="vitrine"
        title="Vitrine completa"
        intro="Tudo feito aqui, do zero. Os sabores mudam com a estação."
        items={vitrineItems}
      />
    </>
  );
}
