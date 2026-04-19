import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "1,200+", label: "Members Transformed" },
  { icon: TrendingUp, value: "18 kg", label: "Avg. Weight Loss (6 mo)" },
  { icon: Award, value: "4.9 / 5", label: "Average Member Rating" },
];

const transformations = [
  {
    before: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=600",
    after: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Kiran P.",
    role: "Software Engineer",
    duration: "4 months",
    result: "-18 kg",
    quote: "Lost 18 kg and gained a confidence I never thought I had. Forge Fitness changed everything.",
    rating: 5,
  },
  {
    before: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600",
    after: "https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Sneha T.",
    role: "Marketing Manager",
    duration: "6 months",
    result: "+8 kg muscle",
    quote: "I went from dreading the gym to craving it. The trainers here are unlike anyone I've worked with.",
    rating: 5,
  },
  {
    before: "https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=600",
    after: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Aditya R.",
    role: "Startup Founder",
    duration: "5 months",
    result: "-14 kg",
    quote: "From couch to 5K in five months. Forge Fitness gave me accountability, structure, and results.",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function Gallery() {
  return (
    <section className="py-28 bg-background relative border-y border-white/5 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Member Results</p>
          <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-5">
            Real Results.<br />
            <span className="text-white/30">Real People.</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            No filters. No actors. Just members who showed up and put in the work.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 p-5 glass-card rounded-xl border-white/8 text-center"
            >
              <stat.icon className="w-5 h-5 text-primary" />
              <div className="text-2xl md:text-3xl font-black font-display text-white">{stat.value}</div>
              <div className="text-white/40 text-xs leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Transformation Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/8 bg-white/[0.03] hover:border-white/15 transition-all duration-300"
            >
              {/* Before / After Images */}
              <div className="relative h-60 overflow-hidden">
                <div className="flex h-full">
                  <div className="relative w-1/2 overflow-hidden">
                    <img
                      src={item.before}
                      alt="Before"
                      className="w-full h-full object-cover filter grayscale brightness-75 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-white/70 text-xs font-bold uppercase tracking-widest">Before</span>
                    </div>
                  </div>
                  <div className="relative w-1/2 overflow-hidden">
                    <img
                      src={item.after}
                      alt="After"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-3 py-1.5 bg-gradient-to-t from-black/80 to-transparent">
                      <span className="text-primary text-xs font-bold uppercase tracking-widest">After</span>
                    </div>
                  </div>
                </div>

                {/* Result badge */}
                <div className="absolute top-3 right-3 px-2.5 py-1 bg-primary text-black text-xs font-black rounded-full">
                  {item.result}
                </div>

                {/* Center divider line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center z-10">
                  <div className="w-0.5 h-3 bg-black/60" />
                </div>
              </div>

              {/* Testimonial */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <StarRating count={item.rating} />
                <p className="text-white/80 text-sm leading-relaxed italic flex-1">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-white/8">
                  <div>
                    <div className="text-white font-bold text-sm">{item.name}</div>
                    <div className="text-white/40 text-xs">{item.role}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold text-xs uppercase tracking-wider">{item.duration}</div>
                    <div className="text-white/40 text-xs">journey</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-white/40 text-sm mb-4">Your transformation story starts with one session.</p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_24px_rgba(57,255,20,0.25)] hover:shadow-[0_0_36px_rgba(57,255,20,0.4)] text-sm"
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}
