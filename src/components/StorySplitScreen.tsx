"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const storyBlocks = [
    {
        title: "La Chiamata di Lorenzo",
        content: "Lorenzo Montanaro ha iniziato il suo percorso di fede cristiana nel 2007, mentre prestava servizio come volontario nell’esercito italiano. In un incontro sovrannaturale “cambia vita”, per le strade di Bologna, attraverso la testimonianza di alcuni adolescenti, il Signore si è rivelato potentemente al suo cuore. Poco dopo infatti parte per la Norvegia per un’esperienza di scuola biblica nei “Jesus Revolution” durata circa un anno. Al termine, rientra  in Italia e comincia una chiamata evangelistica come Pastore dei giovani presso una chiesa di Bari. L’esperienza che lo terrà impegnato con dedizione e amore per il Vangelo per circa 5 anni dove sarà testimone di centinaia di vite trasformate, e dopo Lorenzo si ritroverà a fondare quattro comunità sul territorio italiano. ",
        image: "/images/storia-1.jpg"
    },
    {
        title: "",
        content: "Ma… dopo un po’, Lorenzo realizza che la sua vita non era come si aspettava e si ritrova a smarrire completamente se stesso e la via intrapresa con tanto zelo anni prima. Ma Dio non aveva finito con lui… e cresce dentro di sé un grido di disperazione, un bisogno di cominciare a vivere secondo i principii biblici per riscattare la sua vita e quella dei sinceri che erano rimasti aggrappati solo a Dio e al suo fianco, e che così come lui non avevano compromesso il loro cuore al male! Desidera quindi tornare radicalmente a Dio, come mai prima, ma aveva perso apparentemente tutto ed era diventato preda e bersaglio di tanti!",
        image: "/images/storia-2.jpg"
    },
    {
        title: "",
        content: "Ed è proprio in risposta a questo grido di disperazione che la grazia del Signore lo ha raggiunto proprio attraverso degli uomini di Dio che hanno ascoltato la voce del Signore, dei fratelli sinceri e sua moglie Marzia, che lo ha accolto con sé e sostenuto proprio nel momento più buio della sua vita, quando non aveva più nulla da offrire, addossandosi insieme a lui ogni peso ed ogni attacco, resistendo al suo fianco e in tutto il suo processo continuo di redenzione interiore per assomigliare davvero al cuore di Gesù sino ad oggi.",
        image: "/images/storia-2.jpg"
    },
    {
        title: "Il Cuore di Marzia",
        content: "Sua moglie Marzia Vergari, convertita nel 2012 attraverso un’esperienza travolgente con il Signore Gesù ed in seguito alla guarigione sovrannaturale di suo figlio, decide di vivere al servizio di Dio e degli altri. Da lei la sua famiglia e decine e decine di famiglie si convertono e avvicinano alla fede come mai prima...",
        image: "/images/storia-3.jpg"
    },
    {
        title: "",
        content: "...mentre lei serve Dio con umiltà nella comunità locale con integrità e dedizione, aiutando sempre “gli ultimi” e portando frutto, inizialmente con i bambini nella Scuola Domenicale, con le donne, e oggi ancora con la lode, fondando il gruppo Gospel “Liberi per davvero Band” e incidendo il primo brano/testimonianza “Senza di te”, mantenendo come unico scopo ancora e sempre la salvezza delle anime!",
        image: "/images/storia-3.jpg"
    },
    {
        title: "Insieme per una Nuova Generazione",
        content: "Uniti, non si sono lasciati abbattere. Nel Gennaio 2023 fondano il Centro Cristiano 'Liberi per Davvero Church' a Bari. Oggi, fianco a fianco, si dedicano al discepolato e alla formazione, usando la loro storia radicale per aiutare gli altri a splendere anche nelle tenebre più buie.",
        image: "/images/insieme.jpg"
    }
];

function StickyImageDisplay() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.getAttribute('data-index'));
                        setActiveIndex(index);
                    }
                });
            },
            { rootMargin: '-40% 0px -40% 0px' }
        );

        document.querySelectorAll('.story-block').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {storyBlocks.map((block, i) => (
                <motion.div
                    key={i}
                    className="absolute inset-0 w-full h-full"
                    animate={{ opacity: activeIndex === i ? 1 : 0, scale: activeIndex === i ? 1 : 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                >
                    <div className="absolute inset-0 bg-black/20 z-10" />
                    <Image src={block.image} alt={block.title} fill className="object-cover" />
                </motion.div>
            ))}
        </>
    );
}

export default function StorySplitScreen() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section id="storia" className="relative w-full" ref={containerRef}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row">

                {/* Left Side: Sticky Images */}
                <div className="w-full md:w-1/2 md:h-screen md:sticky md:top-0 hidden md:flex items-center justify-center py-8 pr-8">
                    <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <StickyImageDisplay />
                    </div>
                </div>

                {/* Right Side: Scrolling Text */}
                <div className="w-full md:w-1/2 py-20 md:py-[30vh]">
                    {storyBlocks.map((block, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20% 0px -20% 0px", once: false }}
                            className="mb-[20vh] md:mb-[40vh] last:mb-0 story-block"
                            data-index={i}
                        >
                            <div className="relative w-full h-64 mb-6 md:hidden rounded-xl overflow-hidden">
                                <Image src={block.image} alt={block.title} fill className="object-cover" />
                            </div>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">{block.title}</h2>
                            <p className="text-lg text-gray-300 leading-relaxed font-sans">{block.content}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
