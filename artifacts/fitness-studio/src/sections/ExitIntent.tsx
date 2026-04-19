import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import { waLink } from "../lib/whatsapp";

export function ExitIntent() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("exit_intent_seen")) {
      return;
    }
    const handleMouseOut = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsOpen(true);
        sessionStorage.setItem("exit_intent_seen", "true");
        document.removeEventListener("mouseout", handleMouseOut);
      }
    };
    document.addEventListener("mouseout", handleMouseOut);
    return () => document.removeEventListener("mouseout", handleMouseOut);
  }, []);

  const handleClaim = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = waLink(
      `Hi! My name is ${name} and my number is ${phone}. I'd like to claim my FREE trial session at Forge Fitness. Please help me get started!`
    );
    window.open(msg, "_blank");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md glass-card border border-white/20 p-8 rounded-2xl shadow-2xl"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors">
              <X size={20} />
            </button>

            <div className="text-center mb-6">
              <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-bold uppercase tracking-widest mb-4">
                Limited Offer
              </div>
              <h3 className="text-3xl font-black font-display uppercase text-white mb-2">Don't Leave Yet!</h3>
              <p className="text-xl text-primary font-bold mb-3">Get 1 Free Trial Session</p>
              <p className="text-white/60 text-sm">
                Experience Forge Fitness before you commit — zero cost, zero pressure. Just show up.
              </p>
            </div>

            <form onSubmit={handleClaim} className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Your name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <input
                type="tel"
                placeholder="WhatsApp number (e.g. 9876543210)"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white/5 border border-white/15 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <button
                type="submit"
                className="w-full py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-all neon-glow flex items-center justify-center gap-2 mt-1"
              >
                Claim via WhatsApp
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-center text-white/30 text-xs">
                We'll reach out on WhatsApp to confirm your free session.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
