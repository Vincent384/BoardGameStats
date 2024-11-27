import withPWA from "next-pwa";

const pwaConfig = withPWA({
  dest: "public", // Anger destinationen för PWA-relaterade filer
});

const nextConfig = pwaConfig({
  // Andra Next.js-konfigurationer
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/firestore\.googleapis\.com\/.*/,
      handler: "NetworkOnly", // Skippa caching för Firestore
    },
    // Lägg till andra caching-strategier här om behövs
  ],
});

export default nextConfig;
