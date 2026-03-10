"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SlidingRibbon } from "./SlidingRibbon";

/* ─────────────────────────────────────────────
   Step Configuration
   ───────────────────────────────────────────── */

const steps = [
  {
    title: "Tenant reports the issue",
    description:
      "Tenants simply message through WhatsApp, SMS, or any platform they already use — no app downloads, no portal logins.",
  },
  {
    title: "AI processes the request",
    description:
      "Our AI agent reads the message, analyzes images, classifies the problem type and determines urgency — all in seconds.",
  },
  {
    title: "Vendor dispatched instantly",
    description:
      "Based on the issue, ReqFix auto-matches and dispatches the right repair vendor from your network. Zero phone calls.",
  },
  {
    title: "Landlord stays informed",
    description:
      "You get real-time notifications at every stage — from initial report to vendor assignment and resolution confirmation.",
  },
];

/* ─────────────────────────────────────────────
   Animated Chat Scene (inside dark panel)
   ───────────────────────────────────────────── */

function ChatScene({ activeStep }: { activeStep: number }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <AnimatePresence mode="wait">
        {activeStep === 0 && <TenantMessageAnim key="step0" />}
        {activeStep === 1 && <AIProcessingAnim key="step1" />}
        {activeStep === 2 && <VendorDispatchAnim key="step2" />}
        {activeStep === 3 && <LandlordNotifyAnim key="step3" />}
      </AnimatePresence>
    </div>
  );
}

/* ── Step 0: Tenant sends a message ── */
function TenantMessageAnim() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xs mx-auto"
    >
      {/* Phone bezel */}
      <div className="bg-[#1a1a1a] rounded-[24px] border border-white/[0.06] p-4 shadow-[0_0_80px_rgba(3,79,70,0.08)]">
        {/* Contact */}
        <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/[0.06]">
          <Image src="/reqFix.svg" width={32} height={32} alt="Reqfix Logo" />
          <div>
            <p className="text-[11px] text-white/80 font-medium">Reqfix</p>
            <p className="text-[9px] text-white/30">Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-3 min-h-[180px]">
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex justify-end"
          >
            <div className="bg-white/[0.07] text-white/70 text-[11px] leading-relaxed px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[85%]">
              The water pipe is leaking, there&apos;s no water in the sink
            </div>
          </motion.div>

          {/* Typing indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.3 }}
            className="flex justify-start"
          >
            <div className="bg-white/[0.07] px-4 py-3 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                    className="w-1.5 h-1.5 rounded-full bg-white/30"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image hint */}
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex justify-end"
          >
            <div className="bg-white/[0.05] rounded-2xl rounded-br-sm overflow-hidden w-[120px]">
              <div className="aspect-[4/3] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="3" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <circle cx="8.5" cy="8.5" r="1.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <path d="M3 16l5-5 4 4 3-3 6 6" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/[0.06]">
          <div className="flex-1 bg-white/[0.04] border border-white/[0.06] rounded-full px-3 py-2">
            <span className="text-[10px] text-white/15">Message…</span>
          </div>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full bg-[#034f46] flex items-center justify-center"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Step 1: AI processing ── */
function AIProcessingAnim() {
  const lines = [
    { label: "Reading tenant message…", delay: 0.3 },
    { label: "Analyzing attached image…", delay: 0.8 },
    { label: "Classifying: Plumbing", delay: 1.3 },
    { label: "Urgency: High", delay: 1.8 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xs mx-auto"
    >
      <div className="bg-[#1a1a1a] rounded-[24px] border border-white/[0.06] p-5 shadow-[0_0_80px_rgba(3,79,70,0.08)]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(3,79,70,0.4)",
                "0 0 0 10px rgba(3,79,70,0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-10 h-10 rounded-xl bg-[#034f46] flex items-center justify-center"
          >
            <Image src="/reqFix.svg" width={30} height={30} alt="Reqfix Logo" />
          </motion.div>
          <div>
            <p className="text-sm text-white/80 font-medium">ReqFix Agent</p>
            <div className="flex items-center gap-1.5">
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-400"
              />
              <p className="text-[10px] text-white/30">Processing…</p>
            </div>
          </div>
        </div>

        {/* Processing lines */}
        <div className="space-y-3.5 mb-5">
          {lines.map((line, i) => (
            <motion.div
              key={line.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: line.delay, duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: line.delay + 0.3, duration: 0.25, type: "spring" }}
              >
                {i < 2 ? (
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : (
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ repeat: Infinity, duration: 1.2, delay: i * 0.2 }}
                    className="w-5 h-5 rounded-full bg-[#034f46] flex items-center justify-center"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </motion.div>
                )}
              </motion.div>
              <span className={`text-[12px] ${i < 2 ? "text-white/40" : "text-white/70 font-medium"}`}>
                {line.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Result badge */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2.3, duration: 0.4 }}
          className="p-3 rounded-xl bg-[#034f46]/20 border border-[#034f46]/30"
        >
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-emerald-400 font-semibold">● Detected</span>
            <span className="text-[11px] text-white/60">Plumbing — High Urgency</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Step 2: Vendor dispatched ── */
function VendorDispatchAnim() {
  const vendors = [
    { name: "QuickFix Plumbing", emoji: "🔧", active: true, delay: 0.6 },
    { name: "SparkPro Electric", emoji: "⚡", active: false, delay: 0.8 },
    { name: "CoolAir HVAC", emoji: "❄️", active: false, delay: 1.0 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xs mx-auto"
    >
      <div className="bg-[#1a1a1a] rounded-[24px] border border-white/[0.06] p-5 shadow-[0_0_80px_rgba(3,79,70,0.08)]">
        {/* AI Agent hub */}
        <div className="flex justify-center mb-4">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(3,79,70,0.3)",
                "0 0 0 14px rgba(3,79,70,0)",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2.5 }}
            className="w-12 h-12 rounded-xl bg-[#034f46] flex items-center justify-center"
          >
            <Image src="/reqFix.svg" width={40} height={40} alt="Reqfix Logo" />
          </motion.div>
        </div>

        {/* Connection lines */}
        <div className="flex justify-center gap-[52px] mb-1">
          {vendors.map((v, i) => (
            <motion.div
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.3 }}
              className={`w-px h-6 origin-top ${v.active ? "bg-emerald-400/50" : "bg-white/10"}`}
            />
          ))}
        </div>

        {/* Vendor cards */}
        <div className="flex gap-2 justify-center">
          {vendors.map((v) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: v.delay, duration: 0.4 }}
              className={`flex flex-col items-center gap-2 p-3 rounded-xl border flex-1 ${v.active
                ? "bg-[#034f46]/15 border-[#034f46]/30"
                : "bg-white/[0.02] border-white/[0.06]"
                }`}
            >
              <span className="text-lg">{v.emoji}</span>
              <span className={`text-[9px] font-medium text-center leading-tight ${v.active ? "text-white/80" : "text-white/25"}`}>
                {v.name}
              </span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: v.delay + 0.3, type: "spring" }}
                className={`text-[8px] px-2 py-0.5 rounded-full ${v.active ? "bg-emerald-400 text-black font-semibold" : "bg-white/[0.05] text-white/20"
                  }`}
              >
                {v.active ? "Dispatched" : "Standby"}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Dispatch confirmation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-4 p-2.5 rounded-lg bg-emerald-400/10 border border-emerald-400/20 text-center"
        >
          <p className="text-[10px] text-emerald-400/80">✓ QuickFix Plumbing dispatched — ETA 2h</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ── Step 3: Landlord notified ── */
function LandlordNotifyAnim() {
  const notifications = [
    {
      icon: "🔔",
      title: "New Request",
      subtitle: "Unit 4B — Plumbing issue. Vendor dispatched.",
      fresh: true,
      delay: 0.3,
    },
    {
      icon: "🔧",
      title: "In Progress",
      subtitle: "Unit 2A — HVAC repair underway.",
      fresh: false,
      delay: 0.7,
    },
    {
      icon: "✅",
      title: "Resolved",
      subtitle: "Unit 7C — Electrical fixed. Tenant confirmed.",
      fresh: false,
      delay: 1.1,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-xs mx-auto"
    >
      <div className="bg-[#1a1a1a] rounded-[24px] border border-white/[0.06] p-5 shadow-[0_0_80px_rgba(3,79,70,0.08)]">
        {/* Header */}
        <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/[0.06]">
          <div>
            <p className="text-sm text-white/80 font-medium">Notifications</p>
            <p className="text-[10px] text-white/30">3 updates</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#034f46]/20 flex items-center justify-center">
            <span className="text-xs">🏠</span>
          </div>
        </div>

        {/* Notification list */}
        <div className="space-y-2.5">
          {notifications.map((n) => (
            <motion.div
              key={n.title}
              initial={{ opacity: 0, x: -16, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: n.delay, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`flex items-start gap-3 p-3 rounded-xl ${n.fresh
                ? "bg-[#034f46]/15 border border-[#034f46]/25"
                : "bg-white/[0.03] border border-white/[0.04]"
                } ${!n.fresh && n.title === "Resolved" ? "opacity-50" : ""}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.fresh ? "bg-[#034f46]/30" : "bg-white/[0.05]"
                }`}>
                <span className="text-sm">{n.icon}</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className={`text-[11px] font-medium ${n.fresh ? "text-white/80" : "text-white/40"}`}>
                    {n.title}
                  </p>
                  {n.fresh && (
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-[8px] bg-[#034f46] text-white px-1.5 py-0.5 rounded-full"
                    >
                      Now
                    </motion.span>
                  )}
                </div>
                <p className={`text-[10px] mt-0.5 leading-relaxed ${n.fresh ? "text-white/40" : "text-white/20"}`}>
                  {n.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Workflow Section
   ───────────────────────────────────────────── */

export default function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const stepElements = stepRefs.current;
      if (!stepElements || stepElements.length === 0) return;

      // We'll calculate which step's center is closest to the middle of the screen
      const windowCenter = window.innerHeight / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      stepElements.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // Shift the element center logic up slightly to trigger earlier for longer texts
        const elementCenter = rect.top + (rect.height * 0.35);
        const distance = Math.abs(windowCenter - elementCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
    };

    // Listen to scroll events for more reliable activation compared to IntersectionObserver
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative bg-black pb-20 md:pb-40 pt-0 z-0">
      {/* 
        Ensure seamless transition into black by bleeding the exact same gradient
      */}
      <div
        className="absolute top-0 left-0 w-full h-[300px] pointer-events-none z-0"
        style={{
          background: 'linear-gradient(to bottom, #034f46 100%, transparent 0%)',
          marginTop: '-1px' // Pull up just slightly to remove any sub-pixel border gaps
        }}
      />

      <div
        className="relative z-10 w-full h-[440px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 150% 50% at 50% 1%,  rgb(49, 170, 154) 38%, rgb(39, 162, 146) 50%, #187266 68%, #0a6256 75%, #022e28 86%, #000000 100%)',
        }}
      />

      <div className="relative z-10 w-full overflow-hidden">
        <SlidingRibbon />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 md:mb-32 flex flex-col items-center text-center sm:mt-16"
        >
          {/* <span className="text-[#056058] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Workflow
          </span> */}
           <h3 className="text-5xl font-bold tracking-tighter sm:text-6xl text-white mx-5">
            How it <span className=" text-[#034f46]" id="workflow" >Works</span>
          </h3>
        </motion.div>

        {/* Two-column scroll area */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 relative items-start">

          {/* LEFT: Sticky animated visual panel */}
          <div className="md:w-[55%] w-full sticky top-24 md:top-32 z-10 h-[45vh] md:h-auto mb-10 md:mb-0">
            <div className="bg-[#0a0a0a] rounded-3xl border border-white/[0.1] overflow-hidden shadow-2xl ring-1 ring-white/5 h-full md:h-auto">
              <div className="p-4 md:p-10 h-full md:min-h-[460px] flex items-center justify-center relative bg-[url('/noise.png')] opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
                <div className="relative z-10 w-full overflow-hidden scale-[0.85] md:scale-100 origin-center">
                  <ChatScene activeStep={activeStep} />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Scrollable step descriptions */}
          <div className="md:w-[45%] w-full flex flex-col relative z-20 pb-[20vh] md:pb-[40vh]">
            {steps.map((step, i) => (
              <div
                key={i}
                ref={(el) => {
                  if (el) stepRefs.current[i] = el;
                }}
                className="flex items-end md:items-center w-full min-h-[60vh] md:min-h-[75vh] pb-16 md:pb-0"
              >
                <div className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform w-full max-w-lg p-6 md:p-0 rounded-2xl md:rounded-none ${activeStep === i
                  ? "opacity-100 scale-100 translate-y-0 bg-black/60 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border border-white/10 md:border-none"
                  : "opacity-0 scale-[0.98] translate-y-8"
                  }`}>
                  <span className={`text-xs font-serif italic tracking-widest uppercase mb-4 block transition-colors duration-500 ${activeStep === i ? "text-white font-bold" : "text-white/20"
                    }`}>
                    Step {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className={`text-3xl font-bold tracking-tight mb-4 leading-tight transition-colors duration-500 ${activeStep === i ? "text-white" : "text-white/40"
                    }`}>
                    {step.title}
                  </h3>

                  <p className={`text-lg leading-relaxed transition-colors duration-500 ${activeStep === i ? "text-white/70" : "text-white/20"
                    }`}>
                    {step.description}
                  </p>

                  <motion.div
                    className="mt-6 h-[2px] bg-[#056058] rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: activeStep === i ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: 60 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(125% 125% at 50% 80%, transparent 50%, rgb(49, 170, 154) 70%, rgb(var(--primary)) 100%)',
          opacity: 0.6
        }}
      />

      <div
        className="absolute inset-0 z-0 pointer-events-none pb-10"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, transparent 40%, rgb(49, 170, 154) 70%, var(--primary) 100%)",
        }}
      />

    </section>
  );
}
