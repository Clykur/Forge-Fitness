import { motion } from "framer-motion";
import { Award, Clock, Star, Users, ArrowRight } from "lucide-react";
import { waLink } from "../lib/whatsapp";

const trainers = [
  {
    name: "Rahul Singh",
    role: "Strength & HIIT Coach",
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Iron doesn't lie. Neither do I.",
    experience: "8 years",
    clients: "300+",
    rating: 4.9,
    specialties: ["Olympic Lifting", "HIIT", "Powerlifting", "Fat Loss"],
    certifications: ["NSCA-CSCS", "ACE Personal Trainer", "Precision Nutrition L1"],
    bio: "Rahul brings 8 years of elite coaching experience. A former state-level powerlifter, he blends science-backed programming with relentless intensity. His clients average 12 kg fat loss in 3 months while building serious strength.",
    availability: ["Mon", "Wed", "Fri", "Sat"],
  },
  {
    name: "Priya Mehta",
    role: "HIIT & Conditioning Specialist",
    image: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Every rep counts. Every second matters.",
    experience: "6 years",
    clients: "250+",
    rating: 4.8,
    specialties: ["HIIT", "Metabolic Conditioning", "Core Training", "Women's Fitness"],
    certifications: ["ACSM-CPT", "TRX Certified", "Precision Nutrition L2"],
    bio: "Priya is known for transforming beginners into athletes in 90 days. Her high-energy sessions are designed for maximum calorie burn without sacrificing form. She specializes in body recomposition for working professionals.",
    availability: ["Tue", "Thu", "Sat", "Sun"],
  },
  {
    name: "Arjun Kumar",
    role: "Yoga & Mobility Coach",
    image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Strength without flexibility is fragility.",
    experience: "10 years",
    clients: "400+",
    rating: 5.0,
    specialties: ["Power Yoga", "Mobility Training", "Injury Rehab", "Mindfulness"],
    certifications: ["RYT-500 Yoga Alliance", "NASM-CES", "FRC Mobility Specialist"],
    bio: "With a decade of practice and 500 hours of yoga certification, Arjun bridges the gap between ancient technique and modern performance science. His sessions improve flexibility, posture, and mental focus — helping members recover faster and train harder.",
    availability: ["Mon", "Wed", "Thu", "Sun"],
  },
  {
    name: "Neha Rawat",
    role: "Functional Fitness Coach",
    image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Train for life, not just the gym.",
    experience: "5 years",
    clients: "200+",
    rating: 4.9,
    specialties: ["Functional Training", "Kettlebell", "Sports Conditioning", "Post-natal Fitness"],
    certifications: ["StrongFirst SFG", "FMS Level 2", "Pre & Post-natal Fitness"],
    bio: "Neha's approach is built around real-world strength — how your body performs in daily life, not just under a barbell. Her functional movement programming has helped sedentary professionals build lasting fitness habits that actually stick.",
    availability: ["Mon", "Tue", "Fri", "Sat"],
  },
  {
    name: "Vikram D.",
    role: "Boxing & Combat Coach",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Boxing is chess at 200 BPM.",
    experience: "7 years",
    clients: "180+",
    rating: 4.8,
    specialties: ["Boxing", "Kickboxing", "Cardio Combat", "Agility Training"],
    certifications: ["AIBA Level 2 Coach", "ACE-CPT", "First Aid & CPR Certified"],
    bio: "Vikram was a national-level amateur boxer before shifting to coaching. His Boxing Circuit classes are the most in-demand sessions at Forge — equal parts brutal workout and technical skill-building. No pads experience needed.",
    availability: ["Tue", "Thu", "Fri", "Sat"],
  },
];

export function TrainersPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
            <Users className="w-3.5 h-3.5" />
            Our Coaches
          </p>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-4">
            Meet Your Coaches
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Every trainer at Forge Fitness is certified, experienced, and obsessed with getting you results.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8">
          {trainers.map((trainer, i) => {
            const bookMsg = waLink(
              `Hi! I'd like to book a personal training session with ${trainer.name} (${trainer.role}) at Forge Fitness. Please share availability and pricing.`
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="grid md:grid-cols-[280px_1fr] gap-0 rounded-2xl overflow-hidden border border-white/8 bg-white/[0.02] hover:border-white/14 transition-all group"
              >
                {/* Image */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover brightness-75 group-hover:brightness-85 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/30" />
                  <div className="absolute bottom-4 left-4 md:hidden">
                    <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{trainer.role}</p>
                    <h3 className="text-2xl font-black font-display text-white">{trainer.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between gap-5">
                  <div>
                    <div className="hidden md:block mb-4">
                      <p className="text-primary text-xs font-bold uppercase tracking-wider mb-1">{trainer.role}</p>
                      <h3 className="text-2xl font-black font-display text-white">{trainer.name}</h3>
                    </div>

                    {/* Stats row */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      {[
                        { icon: Clock, label: trainer.experience + " exp." },
                        { icon: Users, label: trainer.clients + " clients" },
                        { icon: Star, label: trainer.rating + " rating" },
                      ].map((stat, j) => (
                        <div key={j} className="flex items-center gap-1.5 text-sm text-white/60">
                          <stat.icon className="w-3.5 h-3.5 text-primary" />
                          {stat.label}
                        </div>
                      ))}
                    </div>

                    <p className="text-white/60 text-sm leading-relaxed mb-5 border-l-2 border-primary/40 pl-3 italic">
                      &ldquo;{trainer.quote}&rdquo;
                    </p>

                    <p className="text-white/70 text-sm leading-relaxed mb-5">{trainer.bio}</p>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trainer.specialties.map((s) => (
                        <span key={s} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs">
                          {s}
                        </span>
                      ))}
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2 mb-1">
                      {trainer.certifications.map((c) => (
                        <span key={c} className="flex items-center gap-1 px-2.5 py-1 bg-primary/8 border border-primary/20 rounded-full text-primary/80 text-xs">
                          <Award className="w-3 h-3" />
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t border-white/8">
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-white/30 text-xs uppercase tracking-wider">Available:</span>
                      <div className="flex gap-1.5">
                        {trainer.availability.map((d) => (
                          <span key={d} className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-bold rounded">{d}</span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={bookMsg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 px-5 py-2.5 bg-primary text-black font-bold text-sm rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_16px_rgba(57,255,20,0.2)] hover:shadow-[0_0_24px_rgba(57,255,20,0.4)] whitespace-nowrap"
                    >
                      Book a Session
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
