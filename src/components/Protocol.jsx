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
            title: 'Consultá',
            description: 'Completás el formulario con los detalles del espacio.',
            bg: 'bg-moss',
            color: 'text-cream',
            icon: (
                <div className="absolute -right-8 -top-8 w-48 h-48 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="w-full h-full">
                        <circle cx="50" cy="50" r="20" className="anim-circle origin-center" strokeDasharray="4 4" />
                        <circle cx="50" cy="50" r="35" className="anim-circle origin-center" strokeDasharray="8 4" />
                        <circle cx="50" cy="50" r="50" className="anim-circle origin-center" />
                    </svg>
                </div>
            )
        },
        {
            step: '02',
            title: 'Diseñamos juntos',
            description: 'En 24hs recibís renders y presupuesto cerrado.',
            bg: 'bg-cream',
            color: 'text-charcoal',
            icon: (
                <div className="absolute -right-8 -top-8 w-48 h-48 opacity-10 pointer-events-none overflow-hidden rounded-full">
                    <div className="w-full h-full relative" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                        <div className="scan-line absolute top-0 left-0 w-full h-[2px] bg-charcoal shadow-[0_0_10px_currentColor]"></div>
                    </div>
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
                <div className="absolute -right-8 -top-8 w-48 h-48 opacity-20 pointer-events-none flex items-center justify-center">
                    <svg viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-auto">
                        <path className="ekg-path" strokeDasharray="200" strokeDashoffset="200" d="M0 25 L30 25 L40 5 L50 45 L60 25 L100 25" />
                    </svg>
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
