import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
    output: 'export', // Dice a Next.js di generare la cartella "out" per GitHub Pages
    images: {
        unoptimized: true, // Disabilita l'ottimizzazione lato server delle immagini
    },
    // ATTENZIONE: Sostituisci '/lorenzo-marzia-ministries' con il nome esatto della tua repository su GitHub
    basePath: isProd ? '/lorenzoemarziaministries' : '',
    trailingSlash: true, // Risolve i problemi di 404 quando si aggiorna la pagina su GitHub
};

export default nextConfig;