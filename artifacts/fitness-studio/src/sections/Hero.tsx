import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";
import { waLink } from "../lib/whatsapp";
import { Link } from "wouter";

const JOIN_MSG = waLink(
  "Hi! I'd like to book my spot in the next available session at Forge Fitness. Please share the batch details."
);

export function Hero() {
  const [timeLeft, setTimeLeft] = useState(2 * 3600 + 15 * 60 + 30);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
          alt="Forge Fitness Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center md:items-start text-center md:text-left mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border-primary/30 text-primary text-sm font-bold mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Next batch starts in: {hours.toString().padStart(2, "0")}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white leading-[1.1] tracking-tight uppercase"
        >
          Transform Your Body.<br />
          Own Your Discipline.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl font-light"
        >
          Premium fitness studio in Bangalore with expert trainers and real results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >

          <Link
            href="/pricing"
            className="px-8 py-4 bg-primary text-black font-bold text-lg rounded hover:bg-primary/90 transition-all neon-glow flex items-center justify-center gap-2"
          >
            Join Next Session
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/classes"
            className="px-8 py-4 bg-transparent border-2 border-primary text-primary font-bold text-lg rounded hover:bg-primary/10 transition-all flex items-center justify-center gap-2"
          >
            <CalendarDays className="w-5 h-5" />
            View Classes
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
