import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/db";
import { waitlist } from "@/db/schema";
import { eq } from "drizzle-orm";
import { Home } from "lucide-react";
import Link from "next/link";
import { AnimatedShinyButton } from "@/components/ui/AnimatedButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Verification",
  description: "Email verification status page for ReqFix waitlist members.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default async function VerifyEmailPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/");
  }

  if (session.user?.email) {
    await db
      .update(waitlist)
      .set({ verified: true })
      .where(eq(waitlist.email, session.user.email));
  }

  return (
    <div className="relative min-h-[100dvh] w-full bg-[#020808] text-white flex flex-col items-center justify-center p-4 overflow-hidden">
      {/* Background glow effects matching Hero */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[500px] bg-[#034f46] opacity-20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-emerald-900/10 opacity-30 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      <div className="z-10 relative flex flex-col items-center max-w-2xl text-center">
        {/* Animated Badge style matching Hero */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-emerald-200 tracking-wide uppercase">
            Verification Complete
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-6">
          You&apos;re on the <span className="text-[#034f46] from-emerald-400 to-emerald-600 font-canela pr-2">list.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 max-w-lg leading-relaxed mb-10 font-sans font-light">
          Thanks for verifying your email (<span className="text-emerald-400 font-medium">{session.user?.email}</span>). 
          We&apos;ll be in touch as soon as we&apos;re ready to onboard you to ReqFix.
        </p>

        <Link href="/">
          <AnimatedShinyButton className="!bg-[#034f46] !text-white !h-12 !px-8 !rounded-full text-base flex justify-center items-center gap-2 hover:scale-105 transition-transform duration-300">
            <Home className="w-4 h-4 mx-2" />
            Return Home
          </AnimatedShinyButton>
        </Link>
      </div>
    </div>
  );
}
