import { useState } from "react";
import { motion } from "framer-motion";
import { waLink } from "../lib/whatsapp";

const RESERVE_MSG = waLink(
  "Hi! I want to reserve my spot at Forge Fitness before they're gone. Can you help me get started?"
);

export function Urgency() {
  const [spots] = useState(4);

  return (
    <section className="py-24 bg-black border-y border-white/5 overflow-hidden relative flex items-center justify-center min-h-[50vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-black to-black" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter text-white leading-none mb-2">
            Limited Slots.
          </h2>
          <h2 className="text-5xl md:text-8xl font-black font-display uppercase tracking-tighter text-white/30 leading-none mb-8">
            No Excuses.
          </h2>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full mb-10"
          >
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-red-400 font-bold text-lg md:text-xl">
              Only {spots} spots remaining this week
            </span>
          </motion.div>

          <a
            href={RESERVE_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-primary text-black font-black text-xl md:text-2xl rounded hover:bg-primary/90 transition-all neon-glow uppercase tracking-wider"
          >
            Reserve Your Spot Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
