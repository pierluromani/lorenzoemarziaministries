"use client";

import { motion } from "framer-motion";
import { Play, Camera, Users, Music, Heart } from "lucide-react"; 

const socials = [
  { name: "YouTube", link: "#", iconColor: "group-hover:text-[#FF0000]", Icon: Play },
  { name: "Instagram", link: "https://www.instagram.com/liberiperdavverochurch/", iconColor: "group-hover:text-[#E1306C]", Icon: Camera },
  { name: "Facebook", link: "https://www.facebook.com/LiberiPerDavveroChurch", iconColor: "group-hover:text-[#1877F2]", Icon: Users },
  { name: "TikTok", link: "#", iconColor: "group-hover:text-[#00f2fe]", Icon: Music },
];

export default function FooterCTA() {
  return (
    <footer className="bg-[#0B0C10] pt-24 md:pt-32 pb-12 relative overflow-hidden">
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Rimaniamo in Contatto
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-gray-400 font-sans text-lg max-w-xl mb-16"
        >
          Unisciti alla nostra community online per non perderti i prossimi messaggi, eventi e aggiornamenti del ministero.
        </motion.p>

        {/* Social Pills */}
        <div className="grid grid-cols-2 md:flex md:flex-row flex-wrap justify-center gap-4 w-full md:w-auto mb-20">
          {socials.map((social, i) => {
            const Icon = social.Icon;
            return (
              <motion.a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + (i * 0.1), duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex flex-col md:flex-row items-center justify-center gap-3 px-6 py-5 md:py-4 rounded-[1.5rem] md:rounded-full bg-white/5 border border-white/10 hover:border-accent-blue hover:bg-white/10 transition-all duration-300 w-full md:w-auto"
              >
                <Icon size={20} strokeWidth={1.5} className={`text-white/60 transition-colors duration-300 ${social.iconColor}`} />
                <span className="font-sans font-medium text-white/90 group-hover:text-white transition-colors duration-300">
                  {social.name}
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Primary CTA - Sostegno */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full max-w-md p-8 md:p-10 rounded-[2rem] bg-gradient-to-br from-[#111218] to-[#0a0b0f] border border-gray-800 shadow-2xl flex flex-col items-center mb-24"
        >
          <div className="w-14 h-14 rounded-full bg-accent-blue/10 flex items-center justify-center mb-6">
            <Heart className="text-accent-blue" size={26} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-2xl text-white mb-3 text-center">Vuoi sostenere la missione?</h3>
          <p className="text-gray-400 font-sans text-center text-sm md:text-base mb-8 leading-relaxed">
            Aiutaci a portare la luce in questa generazione e a raggiungere più vite.
          </p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-accent-blue hover:bg-blue-600 text-white rounded-full font-sans font-semibold transition-colors duration-300 shadow-[0_0_30px_rgba(29,78,216,0.4)]"
          >
            Supporta il Ministero
          </motion.button>
        </motion.div>
      </div>

      {/* Minimal Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-sans text-gray-600 border-t border-gray-900 pt-8">
          <p>© {new Date().getFullYear()} Lorenzo and Marzia Ministries. Tutti i diritti riservati.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Termini e Condizioni</a>
          </div>
        </div>
      </div>
      
    </footer>
  );
}
