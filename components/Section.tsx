import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
}

export default function Section ({
    children,
    className = "",
}: SectionProps) {
    return (
        <section className={`bg-[#F5EDE3] text-[#4A3F3A] py-24 ${className}`}>
            <div className="mx-auto max-w-6xl px-6">
                {children}
            </div>
        </section>        

    );
}
