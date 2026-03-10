import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { EmailTemplate } from "@/components/EmailTemplate";



export default async function Home() {

    const session = await auth.api.getSession({
      headers: await headers(),
    });
  
  return (
    <main className="min-h-screen text-black selection:bg-[#034f46] selection:text-[#fbfbe7]">
      <Navbar />
      <Hero session={session} />
      <Workflow />
      <Features />
      <Footer />
    </main>
  );
}
