"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function MissionParallax() {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      
      {/* Left Side: Image (Inverted layout) */}
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen overflow-hidden order-2 md:order-1">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/images/chiamata.jpg"
            alt="La Chiamata"
            fill
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* Right Side: Text with dark elegant blue background */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 order-1 md:order-2 bg-[#07132B] relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1A3A] to-[#040A15] z-0" />
        
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 max-w-2xl"
        >
          <p className="font-serif text-4xl md:text-5xl lg:text-7xl leading-tight text-white italic">
            “Nasce nel 2020 come risposta di Dio al grido di disperazione di questa generazione che non vuole farsi vincere dal male.”
          </p>
          <div className="mt-12 w-32 h-1 bg-accent-blue rounded-full" />
        </motion.div>
      </div>

    </section>
  );
}
