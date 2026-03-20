import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Maintenance Assistant for Landlords",
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/reqFix.svg`,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
      inLanguage: "en-US",
      potentialAction: {
        "@type": "ViewAction",
        target: siteUrl,
      },
    },
    {
      "@type": "SoftwareApplication",
      name: "ReqFix",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description: defaultDescription,
      url: siteUrl,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};



export default async function Home() {

    const session = await auth.api.getSession({
      headers: await headers(),
    });
  
  return (
    <main className="min-h-screen text-black selection:bg-[#034f46] selection:text-[#fbfbe7]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero session={session} />
      <Workflow />
      <Features />
      <Footer />
    </main>
  );
}
