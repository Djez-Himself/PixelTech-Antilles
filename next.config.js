/** @type {import('next').NextConfig} */
const nextConfig = {
  // En développement, on n'utilise pas output: 'export' pour permettre le serveur de dev
  ...(process.env.NODE_ENV === 'production' ? {
    output: 'export',
    basePath: '/PixelTech-Antilles',
    images: {
      unoptimized: true
    },
    trailingSlash: true
  } : {
    // Configuration pour le développement
    images: {
      unoptimized: true
    }
  })
}

module.exports = nextConfig

