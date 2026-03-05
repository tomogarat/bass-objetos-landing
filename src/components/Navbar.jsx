import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef(null);

    useEffect(() => {
        // Initial entrance animation
        gsap.from(navRef.current, {
            y: -50,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.5
        });
    }, []);

    return (
        <nav
            ref={navRef}
            className={cn(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between",
                "px-6 py-3 rounded-[2rem] w-[90%] md:w-auto md:min-w-[700px] transition-all duration-500",
                "bg-[#F2F0E9]/60 backdrop-blur-xl border border-moss/10 shadow-lg"
            )}
        >
            <div className="hidden md:flex items-center gap-8 font-sans text-moss/80 font-medium text-sm">
                <a href="#nosotros" className="hover:text-moss transition-colors">Nosotros</a>
                <a href="#como-funciona" className="hover:text-moss transition-colors">Cómo funciona</a>
                <a href="#proyectos" className="hover:text-moss transition-colors">Proyectos</a>
            </div>

            <div className="shrink-0 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
                <img src="/logo.jpg" alt="Bass Objetos" className="h-10 md:h-12 w-auto object-contain rounded-lg" />
            </div>

            <a
                href="#cotizar"
                className={cn(
                    "ml-auto px-5 py-2.5 bg-clay text-cream rounded-[2rem] font-sans font-medium text-sm",
                    "overflow-hidden relative group transition-transform duration-300 hover:scale-[1.03]"
                )}
            >
                <span className="relative z-10 flex items-center gap-2">
                    Cotizá ahora
                </span>
                <div className="absolute inset-0 bg-moss transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
            </a>
        </nav>
    );
}
