"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Globe3DHero from "@/components/ui/hero_globe"
import { AnimatedShinyButton } from "./ui/AnimatedButton"

export default function Hero() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // TODO: Connect to backend or analytics
      console.log("Joined waitlist:", email)
    }
  }

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col lg:flex-row items-center justify-between overflow-hidden bg-[#020808] text-white pt-28 pb-12 lg:pt-0 lg:pb-0">
      {/* 
        Background Effects 
        Usage of the brand color #034f46 for deep glows
      */}
      <div className="absolute top-0 left-0 w-[1000px] h-[500px] bg-[#034f46] opacity-20 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-900/10 opacity-30 blur-[100px] rounded-full pointer-events-none translate-x-1/2 translate-y-1/2" />

      {/* Main Content Container */}
      <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center h-full gap-12 lg:gap-0">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start lg:items-start text-left w-full lg:w-1/2 z-20 pl-0 lg:pl-16 pt-10 lg:pt-0">
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-emerald-200 tracking-wide uppercase">
              Accepting Early Access
            </span>
          </motion.div>


          <h1 className="text-5xl lg:text-7xl font-serif font-medium tracking-tight text-white leading-[1.1] mb-6">
            Maintenance <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 font-serif italic pr-2">
              Solved by AI.
            </span>
          </h1>
          
          <p className="text-lg text-neutral-400 max-w-lg leading-relaxed mb-8 font-sans font-light">
            We are building the operating system for modern property management.
            Zero phone calls. Zero paperwork. Total automation.
          </p>

          {/* Waitlist Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-start w-full max-w-md gap-4"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="relative flex w-full items-center">
                <input 
                  type="email" 
                  required
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 pl-6 pr-44 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#034f46] focus:bg-white/10 transition-all shadow-xl text-lg font-sans" 
                />
                <div className="absolute right-1 top-1.5 button-wrapper">
                  <AnimatedShinyButton className="!bg-[#034f46] !text-white !h-11 !px-6 !rounded-full text-sm">
                    Join Waitlist
                  </AnimatedShinyButton>
                </div>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-emerald-400 bg-emerald-400/10 px-6 py-3 rounded-full border border-emerald-400/20 animate-in fade-in zoom-in duration-300">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">You're on the list! We'll be in touch.</span>
              </div>
            )}
            
            <p className="text-xs text-neutral-500 mt-2 font-serif italic">
              Limited spots available for Q2 2026 pilot program.
            </p>
          </motion.div>
        </div>

        {/* Right Column: 3D Globe */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-[85vh] relative z-10 flex items-center justify-center">
           {/* 
              In split layout, we want the globe to be fully visible on the right.
              We adjust the mask to be softer or remove it.
           */}
           <div className="w-full h-full relative">
              <Globe3DHero />
           </div>
        </div>
      </div>

      {/* Bottom fade overlay to blend globe into next section if needed */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020808] to-transparent z-20 pointer-events-none" />
    </section>
  )
}
