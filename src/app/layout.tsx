import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import { Fraunces } from "next/font/google"; // Import Fraunces
import { GeistSans } from "geist/font/sans";

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-canela", // We'll map this variable
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"], // Enable soft edges like Canela
});

export const metadata: Metadata = {
  title: "ReqFix | Maintenance. Handled by AI.",
  description: "AI-powered maintenance assistant for landlords. Tenants message. AI classifies. Vendors dispatched.",
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
