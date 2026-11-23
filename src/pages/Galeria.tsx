import { Gallery } from "@/components/sections/Gallery";
import { galleryItems } from "@/content/pages/Galeria";

export default function GaleriaPage() {
  return (
    <>
      <title>Galeria · Pasteoos</title>
      <meta name="description" content="Fotos da Pasteoos: nosso espaço, os doces, os salgados e tudo que sai da cozinha." />
      <Gallery
        id="gallery"
        title="Galeria da Pasteoos"
        intro="Nosso espaço, o que sai do forno e os detalhes que fazem a diferença."
        items={galleryItems}
      />
    </>
  );
}
