export default function Footer() {
    const message = "Hola Seba, tengo un proyecto y me gustaría saber";
    const wppUrl = `https://wa.me/5491130612030?text=${encodeURIComponent(message)}`;

    return (
        <footer className="bg-charcoal text-cream pt-20 pb-10 px-6 md:px-16 rounded-t-[4rem] md:rounded-t-none relative overflow-hidden z-20 border-t border-[rgba(255,255,255,0.05)]">
            <div className="max-w-7xl mx-auto flex flex-col">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
                    <div>
                        <img src="/logo.jpg" alt="Bass Objetos" className="h-16 w-auto object-contain rounded-lg mb-6" />
                        <p className="font-outfit font-light text-xl text-cream/70">
                            Diseño que transforma espacios.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 font-mono text-sm">
                        <a href="https://bassobjetos.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors hover:translate-x-1 inline-block transform duration-300">
                            Tienda → bassobjetos.com.ar
                        </a>
                        <a href={wppUrl} target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors hover:translate-x-1 inline-block transform duration-300">
                            WhatsApp → wa.me/5491130612030
                        </a>
                        <a href="https://instagram.com/bassobjetos" target="_blank" rel="noopener noreferrer" className="hover:text-clay transition-colors hover:translate-x-1 inline-block transform duration-300">
                            Instagram → @bassobjetos
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-cream/10">
                    <p className="font-sans text-sm text-cream/50">
                        &copy; {new Date().getFullYear()} Bass Objetos. Todos los derechos reservados.
                    </p>

                    <div className="flex items-center gap-3 font-mono text-xs uppercase text-cream/70 bg-black/20 px-4 py-2 rounded-full border border-cream/5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        armando proyectos
                    </div>
                </div>

            </div>
        </footer>
    );
}
