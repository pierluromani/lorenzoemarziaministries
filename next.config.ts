/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/lorenzoemarziaministries', // Es. '/lorenzo-marzia-ministries'
    trailingSlash: true, // Genera cartelle fisiche per ogni rotta, risolvendo i 404
};

export default nextConfig;