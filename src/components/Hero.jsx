import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger typography entrance
            gsap.from('.hero-text', {
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.08,
                ease: 'power3.out',
                delay: 0.2
            });

            gsap.from('.hero-cta', {
                y: 20,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.8
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const message = "Hola Seba, tengo un proyecto y me gustaría saber";
    const wppUrl = `https://wa.me/5491130612030?text=${encodeURIComponent(message)}`;

    return (
        <section
            ref={containerRef}
            className="relative h-[100dvh] w-full flex items-end justify-start overflow-hidden bg-charcoal"
        >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Bass Objetos Hero"
                    className="w-full h-full object-cover object-center opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-moss/60 to-transparent" />
            </div>

            <div className="relative z-10 px-6 pb-20 md:pb-32 md:px-16 max-w-5xl">
                <div className="flex flex-col">
                    <h1 className="flex flex-col text-cream">
                        <span className="hero-text font-sans font-bold text-4xl md:text-6xl tracking-tight leading-none mb-2">
                            El diseño es la
                        </span>
                        <span className="hero-text font-serif italic font-medium text-7xl md:text-[8rem] tracking-tight leading-[0.85]">
                            naturaleza.
                        </span>
                    </h1>

                    <p className="hero-text mt-8 max-w-xl text-cream/90 font-outfit font-light text-lg md:text-xl leading-relaxed tracking-tight">
                        Jardines verticales modulares para proyectos que no pueden esperar. Entrega inmediata. Sin obra. Sin proveedores múltiples.
                    </p>

                    <div className="mt-10 flex flex-col md:flex-row gap-4 items-start md:items-center">
                        {/* Primary CTA */}
                        <a
                            href="#cotizar"
                            className="hero-cta group relative overflow-hidden bg-clay text-cream px-8 py-4 rounded-[2rem] font-sans font-semibold transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-[1px] w-full md:w-auto text-center"
                        >
                            <span className="relative z-10">Cotizá tu proyecto gratis</span>
                            <div className="absolute inset-0 bg-moss transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href={wppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-cta group relative overflow-hidden bg-moss border border-cream text-cream px-8 py-4 rounded-[2rem] font-sans font-semibold transition-transform duration-300 hover:scale-[1.03] hover:-translate-y-[1px] flex items-center justify-center gap-3 w-full md:w-auto"
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.471-1.761-1.643-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                Hablá con Seba
                            </span>
                            <div className="absolute inset-0 bg-cream transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
                            <span className="absolute inset-0 flex items-center justify-center gap-3 text-charcoal opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 z-10">
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.878-.788-1.471-1.761-1.643-2.059-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                                </svg>
                                Hablá con Seba
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
