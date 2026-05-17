"use client";

import { motion } from "framer-motion";

const ministries = [
  {
    title: "Liberi per Davvero Church",
    desc: "Centro Cristiano e Scuola Biblica fondata nel 2023. Un luogo di discepolato e formazione per la nuova generazione.",
    icon: "⛪"
  },
  {
    title: "Liberi per Davvero Band",
    desc: "Il nostro gruppo Gospel, nato dal cuore di Marzia per la lode e l'adorazione, autore del brano 'Senza di te'.",
    icon: "🎸"
  },
  {
    title: "Discepolato e Supporto",
    desc: "Aiutiamo gli ultimi e sosteniamo chi si trova nel buio, usando le nostre testimonianze di redenzione per far risplendere la luce.",
    icon: "🌱"
  }
];

export default function Ministries() {
  return (
    <section className="py-32 px-6 bg-[#0B0C10]/80 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">I Nostri Ministeri</h2>
          <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ministries.map((min, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group bg-[#111218] border border-gray-800 hover:border-accent-blue rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(29,78,216,0.15)]"
            >
              <div className="text-4xl mb-6">{min.icon}</div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-4 group-hover:text-accent-blue transition-colors">{min.title}</h3>
              <p className="text-gray-400 leading-relaxed font-sans">{min.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
