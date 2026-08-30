import type { Metadata } from "next";

export const metadata: Metadata = {
  // Title yang muncul di tab browser & pencarian Google
  title: "TelorIjo Server - Minecraft Indonesia",
  description: "Server Minecraft Bedrock & Java TelorIjo! Join sekarang dan main survival seru bareng!",
  
  // URL utama website (tanpa www)
  metadataBase: new URL("https://telorijo.web.id"),

  // Icon kecil di tab browser (Favicon)
  icons: {
    icon: "/favicon.ico", 
  },

  // 1. Khusus WhatsApp, Telegram, Facebook (OpenGraph)
  openGraph: {
    title: "TelorIjo Server - Minecraft Indonesia",
    description: "Server Minecraft Bedrock & Java TelorIjo! Join sekarang dan main survival seru bareng!",
    url: "https://telorijo.web.id",
    siteName: "TelorIjo Minecraft",
    images: [
      {
        url: "/og-image.png", // Mengambil foto dari folder public/og-image.png
        width: 1200,
        height: 630,
        alt: "TelorIjo Minecraft Server Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  // 2. Khusus Discord & Twitter/X (Twitter Card Format Besar)
  twitter: {
    card: "summary_large_image", // Bikin gambarnya besar di Discord
    title: "TelorIjo Server - Minecraft Indonesia",
    description: "Server Minecraft Bedrock & Java TelorIjo! Join sekarang dan main survival seru bareng!",
    images: ["/og-image.png"],
  },
};
