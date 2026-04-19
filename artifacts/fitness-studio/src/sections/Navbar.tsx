import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { waLink } from "../lib/whatsapp";

const JOIN_MSG = waLink(
  "Hi! I'd like to join Forge Fitness. Can you help me pick the right membership plan?"
);

const links = [
  { name: "Home", href: "/" },
  { name: "Classes", href: "/classes" },
  { name: "Trainers", href: "/trainers" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header
      className={`fixed top-9 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-background/85 backdrop-blur-md border-b border-white/10 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold font-display tracking-tighter text-white hover:text-primary transition-colors">
          FORGE FITNESS
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-primary" : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href={JOIN_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-all neon-glow"
          >
            Join Now
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 p-4 md:hidden flex flex-col gap-2"
        >
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-lg font-medium p-3 rounded-lg transition-colors ${
                  isActive ? "text-primary bg-primary/10" : "text-white/80 hover:bg-white/5"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <a
            href={JOIN_MSG}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full text-center px-5 py-3 bg-primary text-black font-bold rounded hover:bg-primary/90 transition-all neon-glow"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join Now
          </a>
        </motion.div>
      )}
    </header>
  );
}
