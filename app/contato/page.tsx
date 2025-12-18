
import Section from "@/components/Section";

export default function ContatoPage() {
  return (
    <Section className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-4xl font-serif">
          Contato
        </h1>

           <p className="mt-6 text-lg leading-relaxed">
          Entre em contato para solicitar ajustes, encomendas sob medida,
          tirar dúvidas ou propor parcerias.
        </p>
      </div>
    </Section>
  );
}