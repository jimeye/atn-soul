import type { Metadata } from "next";
import "./globals.css";
import { PersonStructuredData } from "./structured-data";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "ATN Soul | Music Producer, Composer & Lyricist from Paris",
    template: "%s | ATN Soul",
  },
  description: "ATN Soul (Ethan Fellous) - Music Producer, Composer & Lyricist from Paris. Discover his work on film scores, jazz compositions, and contemporary music production. Listen to Amarela LP, NYC Sessions, and La Serre aux Papillons soundtrack.",
  keywords: [
    "ATN Soul", 
    "Ethan Fellous", 
    "music producer", 
    "composer", 
    "lyricist", 
    "Paris", 
    "jazz", 
    "soul", 
    "film score", 
    "soundtrack", 
    "Amarela", 
    "NYC Sessions", 
    "La Serre aux Papillons", 
    "music production", 
    "contemporary music", 
    "French music producer",
    "ultra soul",
    "ultrasoul"
  ],
  authors: [{ name: "Ethan Fellous", url: "https://atnsoul.com" }],
  creator: "Ethan Fellous (ATN Soul)",
  publisher: "ATN Soul",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://atnsoul.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png", sizes: "any" },
    ],
    apple: "/atn-soul-website-typo-producer-paris-ultra-soul-ultrasoul.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://atnsoul.com",
    title: "ATN Soul | Music Producer, Composer & Lyricist from Paris",
    description: "ATN Soul (Ethan Fellous) - Music Producer, Composer & Lyricist from Paris. Discover his work on film scores, jazz compositions, and contemporary music production.",
    siteName: "ATN Soul",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ATN Soul - Music Producer from Paris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATN Soul | Music Producer, Composer & Lyricist from Paris",
    description: "ATN Soul (Ethan Fellous) - Music Producer, Composer & Lyricist from Paris. Discover his work on film scores, jazz compositions, and contemporary music production.",
    images: ["/images/og-image.jpg"],
    creator: "@atnsoul",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "music",
  classification: "music producer",
  referrer: "origin-when-cross-origin",
  themeColor: "#ed002a",
  colorScheme: "light",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "ATN Soul",
    "application-name": "ATN Soul",
    "msapplication-TileColor": "#ed002a",
    "msapplication-config": "/browserconfig.xml",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="antialiased" style={{ overflowX: 'hidden', minHeight: '100vh' }}>
        <PersonStructuredData />
        <div className="relative" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
          <main className="flex-1" style={{ minHeight: '100vh', overflowX: 'hidden' }}>
            {children}
          </main>
        </div>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
