import { useEffect, useRef } from 'react';
import { cn } from '../lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Rotate concentric circles
            gsap.to('.anim-circle', {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'none',
                stagger: {
                    each: 0,
                    amount: 5,
                }
            });

            // Scanning line
            gsap.to('.scan-line', {
                y: '100%',
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

            // EKG waveform
            gsap.to('.ekg-path', {
                strokeDashoffset: 0,
                duration: 2,
                repeat: -1,
                ease: 'power2.inOut',
                yoyo: true
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const cards = [
        {
            step: '01',
            title: 'Consulta',
            description: 'Entendemos lo que necesitás (no solo las macetas sino también asesoramiento de qué plantas poner según el lugar).',
            bg: 'bg-moss',
            color: 'text-cream',
            icon: (
                <div className="absolute -right-8 -top-8 w-48 h-48 opacity-80 pointer-events-none rounded-full overflow-hidden border-4 border-moss/20 shadow-lg">
                    <img src="/consulta-bass.jpg" alt="Consulta proyecto" className="w-full h-full object-cover" />
                </div>
            )
        },
        {
            step: '02',
            title: 'Diseñamos juntos',
            description: 'En 24hs recibís renders y presupuesto ajustado.',
            bg: 'bg-cream',
            color: 'text-charcoal',
            icon: (
                <div className="absolute -right-8 -top-8 w-48 h-48 opacity-80 pointer-events-none rounded-full overflow-hidden border-4 border-cream/50 shadow-lg">
                    <img src="/disenamos-juntos-bass.jpg" alt="Diseño y presupuesto" className="w-full h-full object-cover" />
                </div>
            )
        },
        {
            step: '03',
            title: 'Entregamos',
            description: 'Stock disponible, logística resuelta, instalación en minutos.',
            bg: 'bg-clay',
            color: 'text-cream',
            icon: (
                <div className="absolute -right-8 -top-8 w-48 h-48 opacity-80 pointer-events-none rounded-full overflow-hidden border-4 border-clay/20 shadow-lg">
                    <img src="/entregamos-bass.jpg" alt="Entrega e instalación" className="w-full h-full object-cover" />
                </div>
            )
        }
    ];

    return (
        <section ref={containerRef} className="py-24 px-6 md:px-16 w-full relative">
            <div className="max-w-2xl mx-auto space-y-8">
                {cards.map((card, idx) => (
                    <div
                        key={card.step}
                        className={cn(
                            "sticky top-24 rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden transition-all duration-500",
                            card.bg,
                            card.color
                        )}
                        style={{
                            zIndex: idx + 10,
                            top: `calc(10vh + ${idx * 40}px)`
                        }}
                    >
                        {card.icon}
                        <div className="relative z-10">
                            <span className="font-mono text-xl opacity-70 mb-4 block">{card.step}</span>
                            <h3 className="font-serif italic text-5xl md:text-6xl mb-6 tracking-tight">{card.title}</h3>
                            <p className="font-outfit font-light text-xl md:text-2xl leading-relaxed max-w-md opacity-90">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
