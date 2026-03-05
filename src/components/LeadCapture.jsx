import React from 'react';

export default function LeadCapture() {
    // The GHL iframe script causes an infinite resize loop with ScrollTrigger/Lenis on mobile.
    // By embedding the iframe directly with a reliable fixed height and removing the script,
    // we eliminate the page freezing/stuttering and control exactly the white space at the bottom.

    const iframeHTML = `
    <iframe
      src="https://api.leadconnectorhq.com/widget/form/F4sJNmQg99CMql1gxs3K"
      style="width:100%;height:100%;border:none;border-radius:0px"
      id="inline-F4sJNmQg99CMql1gxs3K"
      title="Form Mayorista WEB"
      scrolling="auto"
    >
    </iframe>
  `;

    return (
        <section id="cotizar" className="relative pt-20 pb-0 md:py-32 px-0 md:px-16 w-full bg-charcoal overflow-hidden">
            {/* Noise overlay specific to this section if global one is not enough, but global handles it */}

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start relative z-10 w-full mb-0 md:mb-16">
                {/* Left Column: Copy */}
                <div className="flex flex-col text-cream px-6 md:px-0 pt-8 pb-10">
                    <div className="inline-flex items-center gap-2 mb-8 opacity-80">
                        <span className="w-2 h-2 rounded-full bg-clay"></span>
                        <span className="font-mono text-sm tracking-wider uppercase">Proyecto Nuevo</span>
                    </div>

                    <h2 className="font-serif italic text-5xl md:text-7xl leading-tight mb-12">
                        Contanos tu proyecto.<br />
                        Te respondemos de inmediato.
                    </h2>

                    <ul className="space-y-6 font-outfit text-xl font-light opacity-90">
                        <li className="flex items-start gap-4">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-moss shrink-0"></span>
                            <span>Sin compromiso — es solo para entender tu necesidad</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-moss shrink-0"></span>
                            <span>Presupuesto con renders listo para presentar a tu cliente</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-moss shrink-0"></span>
                            <span>Respuesta inmediata de nuestro equipo</span>
                        </li>
                        <li className="flex items-start gap-4">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-moss shrink-0"></span>
                            <span>Si el proyecto no aplica, te lo decimos directo</span>
                        </li>
                    </ul>
                </div>

                {/* Right Column: GHL iframe Embed */}
                {/* Fixed height used to stop white spacing. The form natively scrolls inside if needed. */}
                <div className="w-full bg-white p-0 md:p-8 rounded-none md:rounded-[2.5rem] h-[1050px] md:h-[1150px] relative flex flex-col overflow-hidden w-full m-0">
                    <div
                        className="w-full h-full flex-1"
                        dangerouslySetInnerHTML={{ __html: iframeHTML }}
                    />
                </div>
            </div>
        </section>
    );
}
