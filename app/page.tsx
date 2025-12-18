
import Image from "next/image";

export default function Home () {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-center">
        
        {/* Texto */}
      <div>
        <h1 className="text-5xl font-serif leading-relaxed">
          Ateliê CKaizen
        </h1>

        <p className="mt-6 max-w=xl text-lg leading relaxed">
        No Ateliê CKaizen, cada peça é criada com atenção aos detalhes, 
        respeito ao processo e dedicação à costura artesanal
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

      </div>
    </section>
  );
}
