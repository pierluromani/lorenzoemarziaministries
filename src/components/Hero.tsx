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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
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
          <motion.h1 
            variants={itemVariants}
            className="mb-8 flex flex-col"
          >
            <div className="font-serif font-bold text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[8.5rem] leading-[1.1] flex flex-col md:flex-row md:items-center md:gap-5">
              <span className="bg-gradient-to-r from-[#1c426e] to-[#3ca2ef] bg-clip-text text-transparent">Lorenzo</span>
              <span className="text-gray-200">&</span>
              <span className="bg-gradient-to-r from-[#dfa6b9] to-[#eb94d9] bg-clip-text text-transparent">Marzia</span>
            </div>
            <div className="mt-2 md:mt-4 text-2xl md:text-3xl tracking-[0.2em] font-sans font-light text-gray-300">
              MINISTRIES
            </div>
          </motion.h1>
          
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
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
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
