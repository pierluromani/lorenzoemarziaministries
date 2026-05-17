"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionParallax() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      
      {/* Left Side: Image (Inverted layout) */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 min-h-[60vh] md:min-h-screen order-2 md:order-1 bg-[#0B0C10]">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative w-full aspect-[4/5] md:aspect-auto md:h-[80vh] rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-950/40"
        >
          <Image 
            src="/images/chiamata.jpg"
            alt="La Chiamata"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 order-1 md:order-2 bg-[#0B0C10] relative">
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative z-10 max-w-xl flex flex-col items-center text-center"
        >
          <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-white italic">
            “Nasce nel 2020 come risposta di Dio al grido di disperazione di questa generazione che non vuole farsi vincere dal male.”
          </p>
          <div className="mt-8 md:mt-12 w-16 md:w-24 h-[2px] bg-accent-blue rounded-full" />
        </motion.div>
      </div>

    </section>
  );
}
