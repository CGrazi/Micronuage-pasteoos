import { Contact } from "@/components/sections/Contact";
import { Hours } from "@/components/sections/Hours";
import { hoursItems } from "@/content/pages/Contato";

export default function ContatoPage() {
  return (
    <>
      <title>Contato · Pasteoos</title>
      <meta name="description" content="Fale com a Pasteoos: encomendas, eventos, dúvidas ou só pra dizer oi." />
      <Contact
        id="contact"
        title="Fale com a gente"
        subtitle="Encomenda, evento, dúvida ou só pra dizer oi. Respondemos em até um dia útil."
        buttonText="Enviar mensagem"
        namePlaceholder="Seu nome"
        emailPlaceholder="Seu e-mail"
        messagePlaceholder="Como podemos ajudar"
        showPhone
        showMap={false}
        mode="message"
      />
      <Hours
        id="hours"
        title="Horários"
        items={hoursItems}
      />
    </>
  );
}
