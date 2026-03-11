import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenis } from 'lenis/react';

gsap.registerPlugin(ScrollTrigger);

function DesktopNavbar({ onScroll }) {
    return (
        <div className="hidden md:flex items-center gap-8 font-sans text-moss/80 font-medium text-sm">
            <a
                href="#nosotros"
                onClick={(e) => onScroll(e, 'nosotros')}
                className="hover:text-moss transition-colors"
            >
                Nosotros
            </a>
            <a
                href="#como-funciona"
                onClick={(e) => onScroll(e, 'como-funciona')}
                className="hover:text-moss transition-colors"
            >
                Cómo funciona
            </a>
            <a
                href="#proyectos"
                onClick={(e) => onScroll(e, 'proyectos')}
                className="hover:text-moss transition-colors"
            >
                Proyectos
            </a>
        </div>
    );
}

function MobileNavbar({ onScroll }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleMobileClick = (e, id) => {
        setIsOpen(false);
        onScroll(e, id);
    };

    const drawerContent = (
        <div className="md:hidden">
            {/* Backdrop */}
            <div
                className={cn(
                    "fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-[100] transition-opacity duration-300",
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <div
                className={cn(
                    "fixed top-0 left-0 h-[100dvh] w-[80%] max-w-sm bg-[#F2F0E9] z-[101] p-6 flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl overflow-y-auto",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex justify-between items-center mb-12">
                    <img src="/logo.jpg" alt="Bass Objetos" className="h-8 w-auto mix-blend-multiply rounded-md" />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 -mr-2 text-moss/80 hover:text-moss bg-black/5 rounded-full transition-colors"
                        aria-label="Cerrar Menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>

                <div className="flex flex-col gap-6 text-2xl font-outfit text-charcoal tracking-tight mt-4">
                    <a
                        href="#nosotros"
                        onClick={(e) => handleMobileClick(e, 'nosotros')}
                        className="hover:text-clay transition-colors hover:translate-x-2 transform duration-300 border-b border-black/5 pb-6"
                    >
                        Nosotros
                    </a>
                    <a
                        href="#como-funciona"
                        onClick={(e) => handleMobileClick(e, 'como-funciona')}
                        className="hover:text-clay transition-colors hover:translate-x-2 transform duration-300 border-b border-black/5 pb-6"
                    >
                        Cómo funciona
                    </a>
                    <a
                        href="#proyectos"
                        onClick={(e) => handleMobileClick(e, 'proyectos')}
                        className="hover:text-clay transition-colors hover:translate-x-2 transform duration-300 border-b border-black/5 pb-6"
                    >
                        Proyectos
                    </a>
                </div>

                <div className="mt-auto pt-8">
                    <a
                        href="#cotizar"
                        onClick={(e) => handleMobileClick(e, 'cotizar')}
                        className="flex justify-center items-center w-full px-5 py-4 bg-clay text-cream rounded-[2rem] font-sans font-medium text-lg transition-transform hover:scale-[1.02]"
                    >
                        Cotizá ahora
                    </a>
                </div>
            </div>
        </div>
    );

    return (
        <div className="md:hidden flex items-center shrink-0">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 -ml-2 text-moss/80 hover:text-moss transition-colors"
                aria-label="Abrir Menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
            </button>
            {createPortal(drawerContent, document.body)}
        </div>
    );
}

export default function Navbar() {
    const navRef = useRef(null);
    const logoRef = useRef(null);
    const lenis = useLenis();

    const handleScroll = (e, id) => {
        if (e) e.preventDefault();
        const element = document.getElementById(id);
        if (element && lenis) {
            lenis.scrollTo(element, {
                offset: -100, // Account for fixed navbar
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Power4 easeOut
            });
            // Update URL hash without jumping
            window.history.pushState(null, null, `#${id}`);
        }
    };

    const scrollToTop = (e) => {
        if (e) e.preventDefault();
        if (lenis) {
            lenis.scrollTo(0, {
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
            window.history.pushState(null, null, ' ');
        }
    };

    useEffect(() => {
        // Initial entrance animation applies to the entire header wrapper (or pill specifically)
        gsap.from(navRef.current, {
            y: 20,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.5
        });

        // Initial entrance animation for desktop logo
        gsap.from(logoRef.current, {
            y: 20,
            duration: 1.5,
            ease: 'power3.out',
            delay: 0.4
        });
    }, []);

    return (
        <>
            {/* Desktop Logo (Completely outside and Fixed to viewport) */}
            <div ref={logoRef} className="hidden md:flex fixed left-8 lg:left-12 top-8 lg:top-10 z-[60] h-8 lg:h-10 items-center">
                <a
                    href="#"
                    onClick={scrollToTop}
                    className="h-full flex hover:opacity-80 transition-opacity"
                    aria-label="Inicio"
                >
                    <img src="/logo.jpg" alt="Bass Objetos" className="h-[120%] lg:h-[130%] w-auto mix-blend-multiply opacity-90 rounded-sm -mt-2" />
                </a>
            </div>

            <nav
                ref={navRef}
                className={cn(
                    "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between",
                    "px-4 md:px-6 py-2 md:py-3 rounded-[2rem] w-[90%] md:w-auto md:min-w-[700px] transition-all duration-500",
                    "bg-[#F2F0E9]/80 md:bg-[#F2F0E9]/60 backdrop-blur-xl border border-moss/10 shadow-lg"
                )}
            >
                <MobileNavbar onScroll={handleScroll} />
                <DesktopNavbar onScroll={handleScroll} />

                {/* Mobile center logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden pointer-events-none">
                    <img src="/logo.jpg" alt="Bass Objetos" className="h-5 w-auto mix-blend-multiply opacity-90 rounded-sm" />
                </div>

                <a
                    href="#cotizar"
                    onClick={(e) => handleScroll(e, 'cotizar')}
                    className={cn(
                        "ml-auto px-5 py-2 md:py-2.5 bg-clay text-cream rounded-[2rem] font-sans font-medium text-[13px] md:text-sm",
                        "overflow-hidden relative group transition-transform duration-300 hover:scale-[1.03] shrink-0 whitespace-nowrap"
                    )}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Cotizá ahora
                    </span>
                    <div className="absolute inset-0 bg-moss transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
                </a>
            </nav>
        </>
    );
}
