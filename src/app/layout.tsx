import type { Metadata } from "next";
import "./globals.css";
import { Fraunces } from "next/font/google"; // Import Fraunces
import { GeistSans } from "geist/font/sans";
import {
  defaultDescription,
  defaultKeywords,
  defaultTitle,
  getSiteUrlObject,
  siteName,
  siteUrl,
} from "@/lib/seo";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-canela", // We'll map this variable
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"], // Enable soft edges like Canela
});

export const metadata: Metadata = {
  metadataBase: getSiteUrlObject(),
  title: {
    default: defaultTitle,
    template: "%s | ReqFix",
  },
  description: defaultDescription,
  keywords: defaultKeywords,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ReqFix platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/reqFix.svg",
    shortcut: "/reqFix.svg",
    apple: "/reqFix_light.svg",
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${fraunces.variable} antialiased selection:bg-emerald-500/30 font-sans`}
      > 
        {children}
      </body>
    </html>
  );
}
