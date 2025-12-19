import Image from "next/image";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="grid gap-12 md:grid-cols-2 items-center min-h-[70vh]">
        <div>
          <h1 className="text-5xl font-serif leading-tight">
            Ateliê CKaizen
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed">
            No Ateliê CKaizen, cada peça é criada com atenção aos detalhes,
            respeito ao processo e dedicação à costura artesanal.
          </p>
        </div>

        <div className="w-full">
          <Image
            src="/images/tecido.jpg"
            alt="Detalhe de tecido e costura artesanal"
            width={600}
            height={400}
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </Section>

      {/* Serviços */}
      <Section>
        <h2 className="text-3xl font-serif mb-12">
          Serviços
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="border border-black/10 rounded-lg p-6">
            <h3 className="font-serif text-xl mb-4">
              Ajustes e reformas
            </h3>
            <p className="text-sm leading-relaxed">
              Ajustes em roupas para melhor caimento, reformas pontuais
              e correções que valorizam cada peça.
            </p>
          </div>

          <div className="border border-black/10 rounded-lg p-6">
            <h3 className="font-serif text-xl mb-4">
              Encomendas sob medida
            </h3>
            <p className="text-sm leading-relaxed">
              Peças desenvolvidas sob medida, pensadas de forma personalizada,
              respeitando estilo, conforto e funcionalidade.
            </p>
          </div>

          <div className="border border-black/10 rounded-lg p-6">
            <h3 className="font-serif text-xl mb-4">
              Customizações
            </h3>
            <p className="text-sm leading-relaxed">
              Transformações e adaptações em peças existentes,
              trazendo novo propósito através da costura manual.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
