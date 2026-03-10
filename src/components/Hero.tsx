"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, Sparkles, Wifi, Battery, Signal } from "lucide-react"
import Image from "next/image"
import { AnimatedShinyButton } from "./ui/AnimatedButton"
import { joinWaitlist } from "@/app/actions/waitlist"

/* ─────────────────────────────────────────────
   Chat message definitions
───────────────────────────────────────────── */
type MsgType = "tenant" | "ai" | "typing" | "badge" | "dispatch" | "image"

interface ChatMsg {
  id: number
  type: MsgType
  text?: string
  delay: number // ms after previous message appeared
}

const CHAT_SCRIPT: ChatMsg[] = [
  { id: 0, type: "tenant", text: "The bathroom pipe is leaking, water is everywhere 🚨", delay: 400 },
  { id: 1, type: "image", delay: 700 },
  { id: 2, type: "typing", delay: 1000 },
  { id: 3, type: "ai", text: "Got it! I've received your report and I'm analyzing the issue now.", delay: 2000 },
  { id: 4, type: "badge", text: "🔧 Plumbing  ·  High Urgency", delay: 900 },
  { id: 5, type: "ai", text: "Dispatching a plumber from your landlord's network right now.", delay: 1000 },
  { id: 6, type: "dispatch", text: "Mike's Plumbing  ·  Confirmed  ·  ETA 25 min", delay: 1100 },
]

/* ─────────────────────────────────────────────
   Phone Mockup Component
───────────────────────────────────────────── */
function PhoneMockup() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping, setShowTyping] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([])

  function getFormattedTime() {
    const date = new Date();
    const hours = ("0" + date.getHours()).slice(-2);   
    const minutes = ("0" + date.getMinutes()).slice(-2); 

    return `${hours}:${minutes}`;
  }


  
  const clearTimers = () => { timerRef.current.forEach(clearTimeout); timerRef.current = [] }

  useEffect(() => {
    let cumulative = 800

    CHAT_SCRIPT.forEach((msg, idx) => {
      cumulative += msg.delay

      if (msg.type === "typing") {
        // show typing bubble then hide it when next message reveals
        const showAt = cumulative
        const hideAt = cumulative + CHAT_SCRIPT[idx + 1]?.delay - 100 || cumulative + 1500
        const t1 = setTimeout(() => setShowTyping(true), showAt)
        const t2 = setTimeout(() => setShowTyping(false), hideAt)
        timerRef.current.push(t1, t2)
      } else {
        const t = setTimeout(() => setVisibleCount((c) => c + 1), cumulative)
        timerRef.current.push(t)
      }
    })

    // Loop: reset after everything shown + 3s pause
    const total = cumulative + 3000
    const loop = setTimeout(() => { setVisibleCount(0); setShowTyping(false) }, total)
    timerRef.current.push(loop)

    return clearTimers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCount === 0 ? 0 : undefined])

  // Non-typing messages only
  const renderMsgs = CHAT_SCRIPT.filter((m) => m.type !== "typing")
  const visible = renderMsgs.slice(0, visibleCount)

  return (
    <div className="relative flex items-center justify-center w-full h-full select-none">

      {/* ── Floating stat card — top left ── */}
      <motion.div
        initial={{ opacity: 0, x: -24, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-0 top-16 lg:top-24 z-20"
      >
        <div className="flex items-center gap-2 bg-[#0c1a16] border border-[#034f46]/40 rounded-2xl px-3.5 py-2.5 shadow-lg shadow-black/40 backdrop-blur-xl">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[11px] font-medium text-white/70 whitespace-nowrap">⚡ Vendor dispatched in <span className="text-emerald-400 font-semibold">8s</span></span>
        </div>
      </motion.div>

      {/* ── Floating stat card — bottom right ── */}
      <motion.div
        initial={{ opacity: 0, x: 24, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 bottom-20 lg:bottom-28 z-20"
      >
        <div className="flex items-center gap-2.5 bg-[#0c1a16] border border-[#034f46]/40 rounded-2xl px-3.5 py-2.5 shadow-lg shadow-black/40 backdrop-blur-xl">
          <div className="w-7 h-7 rounded-full bg-[#034f46] flex items-center justify-center text-xs">✓</div>
          <div>
            <p className="text-[10px] text-white/40 leading-none mb-0.5">Zero phone calls</p>
            <p className="text-[11px] font-semibold text-white/80 leading-none">100% automated</p>
          </div>
        </div>
      </motion.div>

      {/* ── Glow behind phone ── */}
      <div className="absolute w-64 h-96 bg-[#034f46] opacity-20 blur-[80px] rounded-full pointer-events-none" />

      {/* ── Phone slide-in wrapper ── */}
      <motion.div
        initial={{ opacity: 0, x: 100, rotate: 3 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        {/* Phone outer frame */}
        <div
          className="relative rounded-[44px] p-[3px]"
          style={{
            background: "linear-gradient(145deg, #2a2a2a 0%, #111 50%, #1e1e1e 100%)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(3,79,70,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
            width: "310px",
          }}
        >
          {/* Side buttons */}
          <div className="absolute -left-[3px] top-[88px] w-[3px] h-7 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[126px] w-[3px] h-10 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute -left-[3px] top-[174px] w-[3px] h-10 bg-[#2a2a2a] rounded-l-sm" />
          <div className="absolute -right-[3px] top-[120px] w-[3px] h-14 bg-[#2a2a2a] rounded-r-sm" />


          {/* Phone inner screen */}
          <div
            className="rounded-[42px] overflow-hidden flex flex-col"
            style={{
              background: "#0d0d0d",
              height: "610px",
            }}
          >
            {/* Status bar */}
            <div className="flex items-center justify-between px-6 pt-4 pb-1 flex-shrink-0">
              <span className="text-white text-[12px] font-semibold tracking-tight">{getFormattedTime()}</span>
              <div className="absolute left-1/2 -translate-x-1/2 top-2.5">
                <div className="w-[90px] h-[26px] bg-black rounded-full flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a1a1a] border border-white/10" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-white">
                <Signal className="w-3.5 h-3.5" />
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-4 h-4" />
              </div>
            </div>

            {/* Chat header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.05] flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#034f46] flex items-center justify-center overflow-hidden">
                  <Image src="/reqFix.svg" width={26} height={26} alt="ReqFix" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#0d0d0d]" />
              </div>
              <div>
                <p className="text-white text-[14px] font-semibold leading-tight">ReqFix</p>
                <p className="text-emerald-400 text-[11px] leading-tight">Online</p>
              </div>
            </div>

            {/* Messages area */}
            <div className="flex-1 overflow-hidden flex flex-col justify-end px-3.5 py-3 gap-2.5">
              <AnimatePresence>
                {visible.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 14, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {msg.type === "tenant" && (
                      <div className="flex justify-end">
                        <div
                          className="text-white/85 text-[13px] leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[82%]"
                          style={{ background: "rgba(255,255,255,0.08)" }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    )}

                    {msg.type === "image" && (
                      <div className="flex justify-end">
                        <div className="rounded-2xl rounded-br-sm overflow-hidden" style={{ width: "165px", background: "rgba(255,255,255,0.05)" }}>
                          <Image src='/leak.png' alt="Leak detected" width={165} height={120} className="object-cover" />
                        </div>
                      </div>
                    )}

                    {msg.type === "ai" && (
                      <div className="flex justify-start">
                        <div
                          className="text-white/90 text-[13px] leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-bl-sm max-w-[82%]"
                          style={{ background: "rgba(3,79,70,0.45)", border: "1px solid rgba(3,79,70,0.5)" }}
                        >
                          {msg.text}
                        </div>
                      </div>
                    )}

                    {msg.type === "badge" && (
                      <div className="flex justify-start">
                        <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[12px] font-semibold text-emerald-300 border border-emerald-500/30 bg-emerald-500/10">
                          {msg.text}
                        </div>
                      </div>
                    )}

                    {msg.type === "dispatch" && (
                      <div className="flex justify-start">
                        <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-[#034f46]/60 border border-[#034f46]/70 max-w-[88%]">
                          <span className="text-emerald-400 text-base leading-none">✓</span>
                          <span className="text-[12px] text-white/85 leading-snug font-medium">{msg.text}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing bubble */}
              <AnimatePresence>
                {showTyping && (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.25 }}
                    className="flex justify-start"
                  >
                    <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-sm bg-white/[0.06]">
                      <div className="flex gap-1 items-center">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            animate={{ y: [0, -4, 0] }}
                            transition={{ repeat: Infinity, duration: 0.75, delay: i * 0.15, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-white/30"
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input bar */}
            <div className="flex items-center gap-2 px-3 pb-6 pt-2.5 border-t border-white/[0.05] flex-shrink-0">
              <div className="flex-1 bg-white/[0.04] border border-white/[0.07] rounded-full px-4 py-2.5">
                <span className="text-[12px] text-white/20">Message…</span>
              </div>
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                className="w-8 h-8 rounded-full bg-[#034f46] flex items-center justify-center flex-shrink-0"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Hero({ session }: { session: any }) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    setMessage("")

    const result = await joinWaitlist(email)

    if (result.success) {
      setSubmitted(true)
      setMessage(result.message || "Success!")
    } else {
      setMessage(result.error || "Something went wrong.")
    }

    setLoading(false)
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


          <h1 className="text-5xl lg:text-7xl font-serif font-bold tracking-tight text-white leading-[1.1] mb-6">
            Maintenance <br />
            <span className="text-[#5edfb0] font-canela pr-2">
              Solved by AI.
            </span>
          </h1>

          <p className="text-lg text-neutral-400 max-w-lg leading-relaxed mb-8 font-sans font-light">
            We are building the operating system for modern property management.
            Zero phone calls. Zero paperwork. Total automation.
          </p>

          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-start w-full max-w-md gap-4"
            >
              {session?.user?.email ? (
                <div className="flex items-center gap-3 text-emerald-400 bg-[rgba(3,79,70,0.2)] px-4 py-2 rounded-full border border-emerald-400/20 animate-in fade-in zoom-in duration-300">
                  <Sparkles className="w-5 h-5 flex-shrink-0" />
                  <p className="text-sm font-sans text-emerald-50">
                    You're on the list as <span className="font-medium text-emerald-400">{session.user.email}</span>
                  </p>
                </div>
              ) : !submitted ? (
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
                      {loading ? "Joining..." : submitted ? "Joined!" : "Join Waitlist"}
                      {!loading && !submitted && <ChevronRight className="ml-1 size-4 shrink-0 transition-all duration-300 ease-out group-hover:translate-x-1" />}
                    </AnimatedShinyButton>
                  </div>
                </form>
              ) : (
                <div className="flex items-center gap-2 text-emerald-400 bg-[rgba(3,79,70,0.2)] px-6 py-3 rounded-full border border-emerald-400/20 animate-in fade-in zoom-in duration-300">
                  <Sparkles className="w-5 h-5" />
                  {message && (
                    <p className={`text-sm font-sans ${submitted ? "text-emerald-400" : "text-red-400"}`}>
                      {message}
                    </p>
                  )}
                </div>
              )}

            </motion.div>
          </div>
        </div>

        {/* Right Column: Phone Mockup */}
        <div className="w-full lg:w-1/2 h-[520px] lg:h-[85vh] relative z-10 flex items-center justify-center mt-5">
          <PhoneMockup />
        </div>
      </div>

      {/* Bottom fade overlay to blend globe into next section if needed */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020808] to-transparent z-20 pointer-events-none" />
    </section>
  )
}
