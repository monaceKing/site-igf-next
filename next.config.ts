import type { NextConfig } from "next";

// PWA activé via next-pwa. Pour l'installer :
//   npm install next-pwa
// puis décommenter le wrapper ci-dessous.
//
// import withPWA from "next-pwa";
// const pwaConfig = withPWA({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === "development",
// });

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 90],
  },
};

export default nextConfig; // remplacer par pwaConfig(nextConfig) une fois next-pwa installé
