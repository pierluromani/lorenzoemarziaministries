"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import galleria1 from '../../public/images/galleria-1.jpg';
import galleria2 from '../../public/images/galleria-2.jpg';
import galleria3 from '../../public/images/galleria-3.jpg';
import galleria4 from '../../public/images/galleria-4.jpg';

const images = [
  { src: galleria1, caption: "Culto Domenicale", span: "md:col-span-2 md:row-span-2" },
  { src: galleria2, caption: "Lode e Adorazione", span: "md:col-span-1 md:row-span-1" },
  { src: galleria3, caption: "Incontri di Preghiera", span: "md:col-span-1 md:row-span-1" },
  { src: galleria4, caption: "Momenti di Fellowship", span: "md:col-span-3 md:row-span-2" }
];

export default function MasonryGallery() {
  return (
    <section className="py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Momenti di Grazia</h2>
          <p className="text-gray-400 font-sans max-w-2xl mx-auto">Una testimonianza visiva del lavoro di Dio attraverso le nostre comunità.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className={`relative rounded-xl overflow-hidden group ${img.span}`}
            >
              <Image 
                src={img.src} 
                alt={img.caption} 
                fill
                placeholder="blur"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-6 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full p-4 rounded-lg backdrop-blur-md bg-black/30 border-l-4 border-accent-blue">
                  <p className="font-serif text-xl text-white italic">{img.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
