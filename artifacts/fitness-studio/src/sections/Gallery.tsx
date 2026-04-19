import { motion } from "framer-motion";

const transformations = [
  {
    before: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg",
    after: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
    quote: '"Lost 18kg in 4 months. Best decision of my life."',
    name: "Kiran P."
  },
  {
    before: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg",
    after: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
    quote: '"Gained confidence I never thought I had."',
    name: "Sneha T."
  },
  {
    before: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg",
    after: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg",
    quote: '"From couch to 5K, Forge Fitness made it happen."',
    name: "Aditya R."
  }
];

export function Gallery() {
  return (
    <section className="py-24 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            Real Results. Real People.
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            The work speaks for itself.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {transformations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex gap-1 h-64 rounded-lg overflow-hidden group">
                <div className="relative w-1/2 h-full overflow-hidden">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover filter grayscale transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur text-xs font-bold text-white rounded">BEFORE</div>
                </div>
                <div className="relative w-1/2 h-full overflow-hidden">
                  <img src={item.after} alt="After" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-2 right-2 px-2 py-1 bg-primary text-black text-xs font-bold rounded">AFTER</div>
                </div>
              </div>
              <div className="glass-card p-4 rounded-lg text-center">
                <p className="text-white/90 italic mb-2">"{item.quote}"</p>
                <p className="text-primary font-bold text-sm uppercase">— {item.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
