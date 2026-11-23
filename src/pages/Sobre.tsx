import { About } from "@/components/sections/About";
import { aboutBullets } from "@/content/pages/Sobre";
import { images } from "@/content/images";

export default function SobrePage() {
  return (
    <>
      <title>Sobre · Pasteoos</title>
      <meta name="description" content="Conheça a Pasteoos: pastelaria artesanal com massa feita no dia e recheios preparados na cozinha." />
      <About
        id="about"
        eyebrow="A Pasteoos"
        title="Feito aqui, do zero, todos os dias"
        text="A Pasteoos nasceu da vontade de comer um pastel de verdade: massa crocante que não encharca, recheio que não é só nome e preço justo.\n\nTudo começa de madrugada, quando a massa é preparada e descansa antes de ir ao forno. Os recheios saem da nossa cozinha — queijo, carne, frango, palmito e os doces da estação. Nada vem pronto de fora."
        image={images.aboutPhoto.src}
        imageSide="left"
        bullets={aboutBullets}
      />
    </>
  );
}
