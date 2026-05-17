"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: "easeOut" as const // <-- IL SEGRETO È QUESTO "as const"
            }
        }
    };

    return (
        <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden bg-[#0B0C10]">
            {/* Left Side: Text */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-2xl"
                >
                    <h1 className="mb-8 flex flex-col text-left">
                        <span className="font-serif font-bold text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[1.1] flex flex-col">
                            {/* Prima riga */}
                            <motion.span variants={itemVariants} className="block">
                                <span className="bg-gradient-to-r from-[#1c426e] to-[#3ca2ef] bg-clip-text text-transparent block">Lorenzo</span>
                            </motion.span>

                            {/* Seconda riga */}
                            <motion.span variants={itemVariants} className="flex items-center gap-4 md:gap-6">
                                <span className="text-gray-200 block">&</span>
                                <span className="bg-gradient-to-r from-[#dfa6b9] to-[#eb94d9] bg-clip-text text-transparent block">Marzia</span>
                            </motion.span>
                        </span>

                        {/* Terza riga */}
                        <motion.span variants={itemVariants} className="block mt-2 md:mt-4 text-2xl md:text-3xl tracking-[0.2em] font-sans font-light text-gray-300 uppercase">
                            MINISTRIES
                        </motion.span>
                    </h1>

                    <motion.p
                        variants={itemVariants}
                        className="text-xl md:text-3xl text-gray-300 mb-12 font-sans tracking-wide leading-relaxed"
                    >
                        United from God with unconditional love ❤️‍🔥 to serve in a time like this.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <a
                            href="#storia"
                            className="inline-block px-10 py-5 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-full font-semibold transition-colors duration-300 shadow-[0_0_30px_rgba(29,78,216,0.4)] text-lg"
                        >
                            Scopri la nostra storia
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Right Side: Image */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 min-h-[60vh] md:min-h-screen">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full aspect-[4/5] md:aspect-auto md:h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-950/40"
                >
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Lorenzo & Marzia Ministries"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </motion.div>
            </div>
        </section>
    );
}
