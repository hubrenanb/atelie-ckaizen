import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ateliê CKaizen",
  description: "Ateliê artesanal focado em criação manual, cuidado e evolução contínua.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F5EDE3] text-[#4A3F3A]`}
      >
        <header className="w-full border-b border-black/10">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <h1 className="text-2xl font-sans">
              Ateliê CKaizen
            </h1>
          </div>
        </header>

        <main>
          {children}
        </main>

        <footer className="w-full border-t border-black/10 mt-16">
          <div className="mx-auto max-w-6xl px-6 py-6 text-sm">
            © {new Date().getFullYear()} Ateliê CKaizen
          </div>
        </footer>
      </body>
    </html>
  );
}