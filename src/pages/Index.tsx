import { Faq } from "@/components/sections/Faq";
import { Features } from "@/components/sections/Features";
import { Gallery } from "@/components/sections/Gallery";
import { GenericSection } from "@/components/sections/GenericSection";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { marqueeItems, shopItems, galleryItems, featuresItems, faqItems } from "@/content/pages/Index";
import { images } from "@/content/images";

export default function IndexPage() {
  return (
    <>
      <title>Pasteoos — Pastelaria artesanal</title>
      <meta name="description" content="Pastéis crocantes, recheios frescos e massa feita no dia. Conheça a Pasteoos." />
      <Hero
        id="hero"
        eyebrow="Pastelaria artesanal"
        title="Massa feita no dia, recheio de verdade"
        subtitle="Cada pastel sai da nossa cozinha com massa preparada de madrugada e recheio feito na hora. Crocante por fora, generoso por dentro."
        buttonText="Ver a vitrine"
        buttonUrl="/vitrine"
        buttonSecondaryText="Galeria"
        buttonSecondaryUrl="/galeria"
        image={images.heroPhoto.src}
        alignment="left"
        variant="editorial"
      />
      <Marquee
        id="marquee"
        items={marqueeItems}
      />
      <GenericSection
        id="shop"
        title="Na vitrine hoje"
        intro="Feito de madrugada, assado pela manhã. O que sobra não volta."
        items={shopItems}
      />
      <Gallery
        id="gallery"
        title="Um pouco do que sai daqui"
        items={galleryItems}
      />
      <Features
        id="features"
        eyebrow="Como funciona"
        title="Feito com cuidado"
        layout="list"
        items={featuresItems}
      />
      <Faq
        id="faq"
        title="Perguntas frequentes"
        items={faqItems}
      />
    </>
  );
}
