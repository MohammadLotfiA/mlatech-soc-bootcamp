import React from 'react';

export interface SectionBlockProps {
    id: string;
    kicker?: string;
    title: string;
    description?: string;
    children: React.ReactNode;
}

export function SectionBlock({ id, kicker, title, description, children }: SectionBlockProps) {
    return (
        <section id={id} className="mb-16 scroll-mt-24 w-full">
            <div className="mb-8">
                {kicker && <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-primary">{kicker}</span>}
                <h2 className="mb-4 text-2xl md:text-3xl font-extrabold text-foreground leading-tight">{title}</h2>
                {description && <p className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground">{description}</p>}
            </div>
            <div className="w-full max-w-full min-w-0">
                {children}
            </div>
        </section>
    );
}