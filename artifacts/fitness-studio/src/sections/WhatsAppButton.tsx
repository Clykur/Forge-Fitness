import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/80 backdrop-blur text-white text-sm font-bold rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat to Join Now
      </div>
      <a
        href="https://wa.me/918179299096"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
      >
        <FaWhatsapp className="w-8 h-8" />
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping" />
      </a>
    </motion.div>
  );
}
