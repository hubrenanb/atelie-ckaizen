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
        <section className={`bg-[#F5EDE3] py-24 ${className}`}>
            <div className="mx-auto max-w-6xl px-6">
                {children}
            </div>
        </section>        

    );
}
