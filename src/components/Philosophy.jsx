import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect for the background image
            gsap.to(imageRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
                y: 100, // Move image down slightly as we scroll down
                ease: 'none',
            });

            // Text reveal effect
            gsap.from('.phil-text', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            id="nosotros"
            className="relative min-h-[80vh] bg-charcoal text-cream flex items-center justify-center overflow-hidden py-32"
        >
            <div
                ref={imageRef}
                className="absolute inset-0 -top-[100px] -bottom-[100px] z-0 opacity-20"
            >
                <img
                    src="/philosophy-bg.jpg"
                    alt="Jardín Vertical Bass Objetos"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center md:text-left">
                <p className="phil-text font-outfit font-light text-2xl md:text-4xl leading-relaxed text-cream/80 mb-8">
                    "La mayoría de los proveedores te obliga a: coordinar obra, esperar semanas y resignar diseño."
                </p>
                <p className="phil-text font-serif italic text-4xl md:text-6xl leading-tight">
                    "Nosotros te entregamos: el proyecto terminado, con <span className="text-clay relative inline-block">identidad única<svg className="absolute -bottom-2 left-0 w-full h-2 text-clay" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 0" fill="none" stroke="currentColor" strokeWidth="2" /></svg></span>, listo en días."
                </p>
            </div>
        </section>
    );
}
