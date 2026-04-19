import { motion } from "framer-motion";

const classes = [
  { time: "6:00 AM", name: "HIIT Training", trainer: "Rahul S.", status: "Full", statusType: "full" },
  { time: "8:00 AM", name: "Strength & Conditioning", trainer: "Priya M.", status: "🔥 Starting Soon", statusType: "starting" },
  { time: "10:00 AM", name: "Power Yoga", trainer: "Arjun K.", status: "Few Spots Left", statusType: "few" },
  { time: "5:30 PM", name: "Functional Training", trainer: "Neha R.", status: "Available", statusType: "available" },
  { time: "7:00 PM", name: "Boxing Circuit", trainer: "Vikram D.", status: "Available", statusType: "available" },
];

export function Schedule() {
  return (
    <section id="classes" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            Today's Sessions
          </h2>
          <p className="text-white/60 text-lg max-w-2xl">
            Book your slot. Show up. Put in the work.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          {classes.map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-lg glass-card transition-all ${
                cls.statusType === "starting" ? "border-primary/50 neon-glow" : "hover:border-white/20"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto mb-6 md:mb-0">
                <div className="text-xl font-bold font-display text-white w-24 shrink-0">
                  {cls.time}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{cls.name}</h3>
                  <p className="text-white/60">Trainer: {cls.trainer}</p>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                <div
                  className={`px-3 py-1 text-sm font-bold rounded-full ${
                    cls.statusType === "full"
                      ? "bg-red-500/20 text-red-500 border border-red-500/50"
                      : cls.statusType === "starting"
                      ? "bg-primary/20 text-primary border border-primary animate-pulse"
                      : cls.statusType === "few"
                      ? "bg-amber-500/20 text-amber-500 border border-amber-500/50"
                      : "bg-green-500/20 text-green-500 border border-green-500/50"
                  }`}
                >
                  {cls.status}
                </div>
                
                <button
                  disabled={cls.statusType === "full"}
                  className={`px-6 py-2.5 font-bold rounded transition-all ${
                    cls.statusType === "full"
                      ? "bg-white/10 text-white/30 cursor-not-allowed"
                      : cls.statusType === "starting"
                      ? "bg-primary text-black hover:bg-primary/90 neon-glow"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Book Slot
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
