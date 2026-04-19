import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function ExitIntent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("exit_intent_seen");
    
    if (!hasSeenPopup) {
      const handleMouseOut = (e: MouseEvent) => {
        if (e.clientY <= 0) {
          setIsOpen(true);
          sessionStorage.setItem("exit_intent_seen", "true");
          document.removeEventListener("mouseout", handleMouseOut);
        }
      };

      document.addEventListener("mouseout", handleMouseOut);
      return () => document.removeEventListener("mouseout", handleMouseOut);
    }
  }, []);

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
            className="relative w-full max-w-md glass-card border border-white/20 p-8 rounded-2xl text-center shadow-2xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-3xl font-black font-display uppercase text-white mb-2">Wait!</h3>
            <p className="text-xl text-primary font-bold mb-4">Get 1 Free Trial Session</p>
            <p className="text-white/70 mb-8">
              Experience the Forge difference before you commit. No credit card required.
            </p>

            <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(false); }}>
              <input 
                type="email" 
                placeholder="Enter your email address" 
                required
                className="w-full bg-white/5 border border-white/20 rounded px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
              />
              <button 
                type="submit"
                className="w-full py-4 bg-primary text-black font-bold uppercase tracking-wider rounded hover:bg-primary/90 transition-all neon-glow"
              >
                Claim Your Free Session
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
