/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Forza Next.js a generare file HTML/CSS/JS statici
    images: {
        unoptimized: true, // Disabilita l'ottimizzazione immagini server-side
    },
    // DECOMMENTA la riga sotto SOLO SE il tuo sito sarà ospitato su un URL del tipo: tuo-username.github.io/nome-repo
    // basePath: '/nome-della-tua-repo', 
};

export default nextConfig;