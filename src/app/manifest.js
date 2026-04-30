export default function manifest() {
  return {
    name: "To-Do List",
    short_name: "To-Do",
    description: "A calmer task board with clear priorities, motion, and installable offline-ready shortcuts.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#111827",
    icons: [
      {
        src: "/icons/pwa-192",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/pwa-512",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/icons/maskable-192",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icons/maskable-512",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      }
    ]
  };
}
