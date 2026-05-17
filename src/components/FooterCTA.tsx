"use client";

import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <footer className="bg-[#050511] pt-24 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-white mb-6">Unisciti a Noi</h2>
            <p className="text-gray-400 mb-8 font-sans text-lg">
              Siamo pronti ad accoglierti e a camminare con te. Scrivici per informazioni sulla chiesa, sulla scuola biblica o per richieste di preghiera.
            </p>
            <div className="space-y-4 font-sans">
              <p className="text-gray-300">📍 Provincia di Bari, Italia</p>
              <p className="text-gray-300">📧 info@lorenzoandmarziaministries.com</p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <a href="https://www.facebook.com/LiberiPerDavveroChurch" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-accent-blue transition-colors">
                FB
              </a>
              <a href="https://www.instagram.com/liberiperdavverochurch/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-accent-blue transition-colors">
                IG
              </a>
            </div>
          </motion.div>

          {/* Contact Form & Donate */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B0C10] p-8 rounded-2xl border border-gray-800"
          >
            <h3 className="font-serif text-2xl text-white mb-6">Contattaci</h3>
            <form className="space-y-4 font-sans">
              <input type="text" placeholder="Il tuo nome" className="w-full bg-[#111218] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition-colors" />
              <input type="email" placeholder="La tua email" className="w-full bg-[#111218] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition-colors" />
              <textarea placeholder="Il tuo messaggio" rows={4} className="w-full bg-[#111218] border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-accent-blue transition-colors resize-none"></textarea>
              <button type="button" className="w-full py-4 bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold rounded-lg transition-colors">
                Invia Messaggio
              </button>
            </form>
            
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400 text-sm mb-4">Vuoi sostenere la nostra missione?</p>
              <button className="px-8 py-3 border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white rounded-lg transition-colors font-semibold">
                Sostieni il Ministero
              </button>
            </div>
          </motion.div>

        </div>

        <div className="text-center text-gray-600 text-sm border-t border-gray-900 pt-8">
          © {new Date().getFullYear()} Lorenzo and Marzia Ministries. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
