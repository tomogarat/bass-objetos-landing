import { useEffect, useRef, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { cn } from '../lib/utils';

export default function FloatingWhatsApp() {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animation: fade-in with bounce after 2 seconds
            gsap.from(containerRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                delay: 2,
                ease: "elastic.out(1, 0.5)",
            });

            // Pulse ring animation
            gsap.to('.pulse-ring', {
                scale: 1.5,
                opacity: 0,
                duration: 2,
                repeat: -1,
                ease: "power2.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const message = "Hola Seba, tengo un proyecto y me gustaría saber";
    const wppUrl = `https://wa.me/5491130612030?text=${encodeURIComponent(message)}`;

    return (
        <a
            ref={containerRef}
            href={wppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-[60] flex items-center group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Tooltip */}
            <div
                className={cn(
                    "mr-4 px-4 py-2 bg-cream text-charcoal font-sans text-sm font-medium rounded-full shadow-lg border border-moss/10",
                    "transition-all duration-300 transform origin-right",
                    isHovered ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4 pointer-events-none"
                )}
            >
                Tengo un proyecto y me gustaría saber
            </div>

            {/* Button with Pulse */}
            <div className="relative">
                <div className="pulse-ring absolute inset-0 bg-clay rounded-full opacity-60 z-0"></div>
                <div
                    className={cn(
                        "relative z-10 w-14 h-14 bg-clay text-white rounded-full flex items-center justify-center shadow-xl",
                        "transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]",
                        "group-hover:scale-105 group-hover:-translate-y-1"
                    )}
                >
                    <MessageCircle className="w-7 h-7" />
                </div>
            </div>
        </a>
    );
}
