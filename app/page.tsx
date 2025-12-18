import Image from "next/image";
import Section from "@/components/Section";

export default function Home() {
  return (
    <Section className="grid gap-12 md:grid-cols-2 items-center min-h-[70vh]">
      
      {/* Texto */}
      <div>
        <h1 className="text-5xl font-serif leading-tight">
          Ateliê CKaizen
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          No Ateliê CKaizen, cada peça é criada com atenção aos detalhes,
          respeito ao processo e dedicação à costura artesanal.
        </p>
      </div>

      {/* Imagem */}
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
  );
}
