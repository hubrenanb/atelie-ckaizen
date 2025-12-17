import Section from "@/components/Section";
import Image from "next/image";

export default function Home () {
  return (
    <Section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Texto */}
      <div>
        <h1 className="text-6xl font-serif leading-tight tracking-tight">
          Costura Artesanal
          <br />
          com propósito 
        </h1>

        <p className="mt-8 max-w-xl text-lg leading-relaxed">
          No Ateliê CKaizen, cada peça é desenvolvida com atenção
          aos detalhes, respeito ao processo e evolução contínua
          através da costura manual.
        </p>
      </div>

      {/* Imagem */}
      <div className="relative w-full h-[420px]">
        <Image
        src="/images/atelie.jpg"
        alt="Detalhe do trabalho artesanal em costura no Ateliê CKaizen"
        fill
        className="object-cover rounded-lg"
        priority
        />
      </div>

    </Section>
  );
}