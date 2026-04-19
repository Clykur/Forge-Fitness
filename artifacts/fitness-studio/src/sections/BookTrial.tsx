import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { waLink } from "../lib/whatsapp";

const goals = [
  "Weight Loss",
  "Muscle Gain",
  "General Fitness",
  "Sports Performance",
  "Stress & Recovery",
  "I'm Not Sure Yet",
];

const perks = [
  "Full 60-minute group session",
  "Tour of the facility",
  "Meet your potential trainer",
  "No credit card required",
];

export function BookTrial() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = waLink(
      `Hi! I'd like to book a FREE trial session at Forge Fitness.\n\nName: ${name}\nPhone: ${phone}\nGoal: ${goal || "Not specified"}\n\nPlease confirm my slot!`
    );
    window.open(msg, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="trial" className="py-28 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(57,255,20,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(57,255,20,0.04),transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left — pitch */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-4">Zero Risk. Real Results.</p>
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-white leading-none mb-6">
              Book Your<br />
              <span className="text-primary">Free Trial</span><br />
              Session
            </h2>
            <p className="text-white/60 text-base mb-8 leading-relaxed">
              Show up, train hard, and see why 1,200+ people chose Forge Fitness. No pressure, no commitment — just your best workout yet.
            </p>

            <ul className="flex flex-col gap-3">
              {perks.map((perk, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card border border-white/12 rounded-2xl p-7 md:p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-black text-white">You're All Set!</h3>
                <p className="text-white/60 text-sm">
                  Your WhatsApp just opened with a pre-filled message. Hit send and we'll confirm your session within minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-primary text-sm underline"
                >
                  Book another session
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-black text-white mb-1">Claim Your Free Session</h3>
                <p className="text-white/40 text-sm mb-6">Fills up fast — book now to secure your slot.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      placeholder="Arjun Kumar"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">WhatsApp Number</label>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-white/50 text-xs font-semibold uppercase tracking-wider">Your Primary Goal</label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors text-sm appearance-none"
                    >
                      <option value="" className="bg-zinc-900">Select your goal...</option>
                      {goals.map((g) => (
                        <option key={g} value={g} className="bg-zinc-900">{g}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-black font-black uppercase tracking-wider rounded-lg hover:bg-primary/90 transition-all neon-glow flex items-center justify-center gap-2 mt-2"
                  >
                    Book via WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-white/25 text-xs">
                    We'll confirm your slot within 5 minutes on WhatsApp.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
