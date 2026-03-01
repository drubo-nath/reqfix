"use client";

import { motion } from "framer-motion";
import { PhoneOff, Clock, AlertTriangle } from "lucide-react";

export default function Problem() {
  return (
    <section id="benefits" className="py-32 px-6 bg-[#034f46] text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16 leading-tight">
            Manual calls.<br />
            Delays.<br />
            Chaos.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <ProblemItem icon={<PhoneOff className="w-10 h-10" />} text="Endless back-and-forth" delay={0.2} />
          <ProblemItem icon={<Clock className="w-10 h-10" />} text="Delayed response times" delay={0.4} />
          <ProblemItem icon={<AlertTriangle className="w-10 h-10" />} text="Missed emergencies" delay={0.6} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block border-t border-white/20 pt-16"
        >
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight">
            ReqFix automates everything.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemItem({ icon, text, delay }: { icon: React.ReactNode, text: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center gap-6"
    >
      <div className="p-4 rounded-full bg-white/10 text-white">
        {icon}
      </div>
      <p className="text-xl font-medium text-white/80">{text}</p>
    </motion.div>
  );
}
