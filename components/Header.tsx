import Link from "next/link";

export default function Header () {
    return (
        <header className="w-full border-b border-black/10 bg-[#F5EDE3] text-[#4A3F3A]">
            <div className="mx-auto max-w-6xl px-6 py-6 flex items-baseline justify-between">

              {/* Marca */}
              <Link href="/" className="text-3xl font-serif tracking-tight">
              Ateliê CKaizen
              </Link>

              {/* Navegação */}
                <nav className="flex gap-8 text-sm uppercase tracking-wide">
                    <Link
                        href="/"
                        className="hover:underline underline-offset-4"
                    >
                    Início
                    </Link>

                    <Link
                        href="/contato"
                        className="hover:underline underline-offset-4"
                    >
                   Contato      
              </Link>
            </nav>
                
            </div>
        </header>
    );
}