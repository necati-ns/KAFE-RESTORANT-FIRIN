import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { generateRestaurantJsonLd } from "@/lib/seo/schema";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.meta.tr.title,
  description: siteConfig.meta.tr.description,
  keywords: siteConfig.meta.tr.keywords,
  authors: [{ name: "NSCODING", url: "https://nscoding.com.tr" }],
  creator: "NSCODING",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.meta.tr.title,
    description: siteConfig.meta.tr.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateRestaurantJsonLd("tr");

  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-[#A85B3F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
