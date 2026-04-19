import { motion } from "framer-motion";

const trainers = [
  {
    name: "Rahul Singh",
    role: "Strength Coach",
    quote: '"Iron doesn\'t lie. Neither do I."',
    image: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg"
  },
  {
    name: "Priya Mehta",
    role: "HIIT Specialist",
    quote: '"Every rep counts. Every second matters."',
    image: "https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg"
  },
  {
    name: "Arjun Kumar",
    role: "Yoga & Mobility",
    quote: '"Strength without flexibility is fragility."',
    image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg"
  },
  {
    name: "Neha Rawat",
    role: "Functional Coach",
    quote: '"Train for life, not just the gym."',
    image: "https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg"
  }
];

export function Trainers() {
  return (
    <section id="trainers" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            Meet Your Coaches
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Elite professionals. No excuses. Real results.
          </p>
        </motion.div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 -mx-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory hide-scrollbar">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="min-w-[280px] md:min-w-0 snap-center relative group rounded-xl overflow-hidden glass-card transition-all duration-300 hover:border-primary/50 hover:neon-glow"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <p className="text-primary text-sm font-bold mb-1 uppercase tracking-wider">{trainer.role}</p>
                <h3 className="text-2xl font-bold font-display text-white mb-3">{trainer.name}</h3>
                <p className="text-white/70 italic text-sm border-l-2 border-primary pl-3">
                  {trainer.quote}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
