import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '../lib/utils';
import { CheckCircle2, Package, Truck, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const words = ["Modulares.", "Escalables.", "Personalizables."];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [words.length]);

    return (
        <div className="bg-cream rounded-[2.5rem] p-10 flex flex-col justify-between h-auto min-h-[320px] md:min-h-[460px] border border-charcoal/5 feature-card">
            <h3 className="font-sans font-bold text-3xl text-charcoal leading-tight mb-8">Diseño de autor,<br />no genérico.</h3>
            <div className="flex-1 flex flex-col justify-end mt-auto">
                <div className="text-4xl md:text-5xl font-serif italic text-clay h-[70px] overflow-hidden relative w-full">
                    {words.map((word, i) => (
                        <div
                            key={word}
                            className={cn(
                                "absolute bottom-0 left-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                                index === i ? "translate-y-0 opacity-100" : index < i ? "translate-y-full opacity-0" : "-translate-y-full opacity-0"
                            )}
                        >
                            {word}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const TypewriterCard = () => {
    const messages = [
        { icon: <Clock className="w-4 h-4" />, text: "Consulta recibida..." },
        { icon: <Package className="w-4 h-4" />, text: "Módulos en stock confirmados..." },
        { icon: <Truck className="w-4 h-4" />, text: "Coordinando envío con Mile Logistic..." },
        { icon: <Clock className="w-4 h-4" />, text: "Tiempo de instalación: 10 min..." },
        { icon: <CheckCircle2 className="w-4 h-4 text-moss" />, text: "Proyecto entregado ✓", highlight: true }
    ];

    const [visibleMessages, setVisibleMessages] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 80%",
                onEnter: () => {
                    messages.forEach((_, i) => {
                        setTimeout(() => {
                            setVisibleMessages(prev => [...prev, i]);
                        }, i * 800);
                    });
                },
                once: true
            });
        }, containerRef);
        return () => ctx.revert();
    }, [messages.length]);

    return (
        <div ref={containerRef} className="bg-charcoal text-cream rounded-[2.5rem] p-10 h-auto min-h-[320px] md:min-h-[460px] flex flex-col feature-card">
            <h3 className="font-sans font-bold text-3xl leading-tight mb-8">Entrega inmediata,<br />sin complicaciones.</h3>
            <div className="flex-1 font-mono text-sm space-y-4 flex flex-col justify-end">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={cn(
                            "flex items-center gap-3 transition-all duration-500",
                            visibleMessages.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
                            msg.highlight ? "text-moss bg-moss/10 w-fit px-3 py-1.5 rounded-lg -ml-3 mt-2" : "text-cream/70"
                        )}
                    >
                        {msg.icon} {msg.text}
                    </div>
                ))}
            </div>
        </div>
    );
};

const SchedulerCard = () => {
    return (
        <div className="bg-moss text-cream rounded-[2.5rem] p-10 h-auto min-h-[320px] md:min-h-[460px] flex flex-col feature-card relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <svg className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
            </div>

            <h3 className="font-sans font-bold text-3xl leading-tight mb-8 relative z-10">Respuesta de<br />inmediato.</h3>

            <div className="flex-1 flex flex-col justify-end space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center font-serif italic text-xl shrink-0">1</div>
                    <div className="h-px flex-1 bg-cream/20"></div>
                    <div className="font-sans text-sm font-medium">Consulta</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-cream/10 flex items-center justify-center font-serif italic text-xl shrink-0">2</div>
                    <div className="h-px flex-1 bg-cream/20"></div>
                    <div className="font-sans text-sm font-medium">Diseño rápido</div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-clay flex items-center justify-center font-serif italic text-xl shrink-0 shadow-lg shadow-clay/30">3</div>
                    <div className="h-px flex-1 bg-clay/50"></div>
                    <div className="font-sans text-sm font-bold text-white">Presupuesto</div>
                </div>

                <a href="#cotizar" className="mt-4 w-full py-3 rounded-full bg-cream text-charcoal font-bold font-sans text-sm text-center hover:bg-white transition-colors">
                    Confirmar proyecto
                </a>
            </div>
        </div>
    );
};

export default function FeatureCards() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="como-funciona" className="py-24 px-6 md:px-16 max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ShufflerCard />
                <TypewriterCard />
                <SchedulerCard />
            </div>
        </section>
    );
}
