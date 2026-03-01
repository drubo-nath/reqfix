"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Zap, Truck, BarChart3 } from "lucide-react";

const features = [
  {
    title: "AI Classification",
    description: "Automatically categorizes maintenance requests based on tenant descriptions and images.",
    icon: BrainCircuit,
  },
  {
    title: "Urgency Detection",
    description: "Instantly flags critical issues like leaks or power outages for immediate attention.",
    icon: Zap,
  },
  {
    title: "Vendor Dispatch",
    description: "Routes approved requests directly to the right contractor without manual intervention.",
    icon: Truck,
  },
  {
    title: "Dashboard Analytics",
    description: "Track resolution times, vendor performance, and maintenance costs in one place.",
    icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-[#020808]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Built for scale.
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Everything you need to manage properties efficiently, powered by intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any, index: number }) {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group p-10 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-emerald-500/30 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7 text-emerald-400 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
      <p className="text-lg text-neutral-400 leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}
