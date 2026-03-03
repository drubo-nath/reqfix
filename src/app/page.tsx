import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Workflow from "@/components/Workflow";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-black selection:bg-[#034f46] selection:text-[#fbfbe7]">
      <Navbar />
      <Hero />
      <Workflow />
      <Features />
      <Footer />
    </main>
  );
}
