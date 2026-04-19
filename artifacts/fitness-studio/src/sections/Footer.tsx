import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-2xl font-bold font-display text-white mb-2">FORGE FITNESS</h2>
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} Forge Fitness. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="#classes" className="text-white/60 hover:text-primary text-sm transition-colors">Classes</a>
          <a href="#trainers" className="text-white/60 hover:text-primary text-sm transition-colors">Trainers</a>
          <a href="#pricing" className="text-white/60 hover:text-primary text-sm transition-colors">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-primary hover:bg-white/10 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-primary hover:bg-white/10 transition-colors">
            <FaYoutube />
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-primary hover:bg-white/10 transition-colors">
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}
