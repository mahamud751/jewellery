import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cormorant_Infant, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GRAIR — Immersive Luxury Jewelry Experience",
  description:
    "GRAIR is a cinematic luxury jewelry experience. A minimal journey through diamonds, restraint, and modern light.",
  keywords: [
    "luxury jewelry",
    "GRAIR",
    "diamond",
    "immersive website",
    "cinematic 3d",
  ],
  authors: [{ name: "Undream Studio", url: "https://undreamstudio.com/" }],
  applicationName: "GRAIR",
  openGraph: {
    title: "GRAIR — Immersive Luxury Jewelry Experience",
    description: "Power without noise. A cinematic diamond experience.",
    type: "website",
    siteName: "GRAIR",
  },
};

export const viewport: Viewport = {
  themeColor: "#140A1F",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: "GRAIR",
  description:
    "A cinematic luxury jewelry experience exploring diamonds, identity, and modern restraint.",
  genre: "Luxury Fashion",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${serif.variable} ${sans.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
