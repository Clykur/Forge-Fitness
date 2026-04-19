import { motion } from "framer-motion";
import { Flame, Clock, Users, ChevronRight, Lock } from "lucide-react";

const classes = [
  {
    time: "6:00 AM",
    duration: "60 min",
    name: "HIIT Training",
    trainer: "Rahul Singh",
    spots: 0,
    totalSpots: 12,
    intensity: 5,
    status: "Full",
    statusType: "full",
  },
  {
    time: "8:00 AM",
    duration: "60 min",
    name: "Strength & Conditioning",
    trainer: "Priya Mehta",
    spots: 2,
    totalSpots: 10,
    intensity: 4,
    status: "Starting Soon",
    statusType: "starting",
  },
  {
    time: "10:00 AM",
    duration: "75 min",
    name: "Power Yoga",
    trainer: "Arjun Kumar",
    spots: 4,
    totalSpots: 15,
    intensity: 2,
    status: "Few Spots Left",
    statusType: "few",
  },
  {
    time: "5:30 PM",
    duration: "60 min",
    name: "Functional Training",
    trainer: "Neha Rawat",
    spots: 8,
    totalSpots: 12,
    intensity: 3,
    status: "Available",
    statusType: "available",
  },
  {
    time: "7:00 PM",
    duration: "45 min",
    name: "Boxing Circuit",
    trainer: "Vikram D.",
    spots: 10,
    totalSpots: 14,
    intensity: 5,
    status: "Available",
    statusType: "available",
  },
];

const statusConfig: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  full: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/30",
    dot: "bg-red-500",
  },
  starting: {
    bg: "bg-primary/15",
    text: "text-primary",
    border: "border-primary/50",
    dot: "bg-primary",
  },
  few: {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    border: "border-amber-500/30",
    dot: "bg-amber-500",
  },
  available: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    dot: "bg-emerald-500",
  },
};

function IntensityBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-2.5 w-1 rounded-full transition-all ${
            i < level ? "bg-primary" : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

export function Schedule() {
  return (
    <section id="classes" className="py-28 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-primary/3 to-black/0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Live Schedule</p>
            <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-4">
              Today's Sessions
            </h2>
            <p className="text-white/50 text-lg max-w-xl">
              Book your slot. Show up. Put in the work.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full border-white/10 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white/70 text-sm font-medium">Live updates</span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {classes.map((cls, i) => {
            const sc = statusConfig[cls.statusType];
            const isStarting = cls.statusType === "starting";
            const isFull = cls.statusType === "full";
            const occupancyPct = Math.round(((cls.totalSpots - cls.spots) / cls.totalSpots) * 100);

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`group relative rounded-xl overflow-hidden border transition-all duration-300 ${
                  isStarting
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_30px_rgba(57,255,20,0.08)]"
                    : "border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.05]"
                }`}
              >
                {isStarting && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                )}

                <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-[140px_1fr_auto_auto] gap-4 md:gap-6 items-center">
                  {/* Time */}
                  <div className="flex items-center gap-3 md:block">
                    <div className="text-2xl font-black font-display text-white tabular-nums">
                      {cls.time}
                    </div>
                    <div className="flex items-center gap-1.5 text-white/40 text-xs mt-0.5">
                      <Clock className="w-3 h-3" />
                      {cls.duration}
                    </div>
                  </div>

                  {/* Name + Meta */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg md:text-xl font-bold text-white">{cls.name}</h3>
                      {isStarting && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-bold animate-pulse">
                          <Flame className="w-3 h-3 fill-primary" />
                          Starting Soon
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/50">
                      <span>with {cls.trainer}</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {cls.spots === 0 ? "Full" : `${cls.spots} spots left`}
                      </span>
                    </div>
                    {/* Occupancy bar */}
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 max-w-[160px] h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            isFull ? "bg-red-500" : isStarting ? "bg-primary" : "bg-white/30"
                          }`}
                          style={{ width: `${occupancyPct}%` }}
                        />
                      </div>
                      <span className="text-white/30 text-xs">{occupancyPct}% booked</span>
                    </div>
                  </div>

                  {/* Intensity */}
                  <div className="hidden md:flex flex-col items-center gap-1.5">
                    <span className="text-white/30 text-xs uppercase tracking-wider">Intensity</span>
                    <IntensityBar level={cls.intensity} />
                  </div>

                  {/* Status + CTA */}
                  <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${sc.bg} ${sc.text} ${sc.border}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} ${isStarting ? "animate-pulse" : ""}`} />
                      {cls.status}
                    </span>

                    <button
                      disabled={isFull}
                      className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${
                        isFull
                          ? "bg-white/5 text-white/20 cursor-not-allowed"
                          : isStarting
                          ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(57,255,20,0.3)] hover:shadow-[0_0_30px_rgba(57,255,20,0.5)]"
                          : "bg-white/10 text-white hover:bg-white/18 border border-white/10"
                      }`}
                    >
                      {isFull ? (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          Full
                        </>
                      ) : (
                        <>
                          Book Slot
                          <ChevronRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <a
            href="#pricing"
            className="text-white/40 hover:text-primary text-sm font-medium transition-colors underline underline-offset-4"
          >
            View full weekly schedule &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
