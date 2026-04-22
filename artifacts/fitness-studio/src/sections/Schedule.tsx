import { motion } from "framer-motion";
import { Clock, Users, ChevronRight, Lock } from "lucide-react";
import { waLink } from "../lib/whatsapp";

/* -------------------- TYPES -------------------- */

type StatusType = "full" | "few" | "available";

type ClassItem = {
  time: string;
  duration: string;
  name: string;
  trainer: string;
  spots: number;
  totalSpots: number;
  intensity: number;
};

/* -------------------- DATA -------------------- */

const classes: ClassItem[] = [
  {
    time: "6:00 AM",
    duration: "60 min",
    name: "HIIT Training",
    trainer: "Rahul Singh",
    spots: 0,
    totalSpots: 12,
    intensity: 5,
  },
  {
    time: "8:00 AM",
    duration: "60 min",
    name: "Strength & Conditioning",
    trainer: "Priya Mehta",
    spots: 2,
    totalSpots: 10,
    intensity: 4,
  },
  {
    time: "10:00 AM",
    duration: "75 min",
    name: "Power Yoga",
    trainer: "Arjun Kumar",
    spots: 4,
    totalSpots: 15,
    intensity: 2,
  },
  {
    time: "5:30 PM",
    duration: "60 min",
    name: "Functional Training",
    trainer: "Neha Rawat",
    spots: 8,
    totalSpots: 12,
    intensity: 3,
  },
  {
    time: "7:00 PM",
    duration: "45 min",
    name: "Boxing Circuit",
    trainer: "Vikram D.",
    spots: 10,
    totalSpots: 14,
    intensity: 5,
  },
];

/* -------------------- STATUS -------------------- */

const statusConfig: Record<
  StatusType,
  { bg: string; text: string; border: string; dot: string }
> = {
  full: {
    bg: "bg-red-500/10",
    text: "text-red-400",
    border: "border-red-500/30",
    dot: "bg-red-500",
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

function getStatus(spots: number): { label: string; type: StatusType } {
  if (spots <= 0) return { label: "Full", type: "full" };
  if (spots <= 3) return { label: "Few Spots Left", type: "few" };
  return { label: "Available", type: "available" };
}

/* -------------------- COMPONENTS -------------------- */

function IntensityBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className={`h-2.5 w-1 rounded-full ${
            i < level ? "bg-primary" : "bg-white/10"
          }`}
        />
      ))}
    </div>
  );
}

/* -------------------- MAIN -------------------- */

export function Schedule() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-3">
          {classes.map((cls, i) => {
            const { label, type } = getStatus(cls.spots);
            const sc = statusConfig[type];
            const isFull = type === "full";

            const booked = cls.totalSpots - cls.spots;
            const occupancyPct = Math.round(
              (booked / cls.totalSpots) * 100
            );

            const bookMsg = waLink(
              `Hi! I'd like to book the ${cls.time} ${cls.name} class with ${cls.trainer} at Forge Fitness today.`
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-[140px_1fr_auto_auto] gap-4 items-center">
                  
                  {/* TIME */}
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {cls.time}
                    </div>
                    <div className="text-xs text-white/40 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {cls.duration}
                    </div>
                  </div>

                  {/* INFO */}
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cls.name}
                    </h3>

                    <div className="text-sm text-white/50 flex gap-4 mt-1">
                      <span>with {cls.trainer}</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {isFull
                          ? "Class full"
                          : `${cls.spots} of ${cls.totalSpots} spots left`}
                      </span>
                    </div>

                    {/* PROGRESS */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="h-1 bg-white/10 rounded w-40 overflow-hidden">
                        <div
                          className={`h-full ${
                            isFull ? "bg-red-500" : "bg-white/30"
                          }`}
                          style={{ width: `${occupancyPct}%` }}
                        />
                      </div>
                      <span className="text-xs text-white/30">
                        {occupancyPct}% booked
                      </span>
                    </div>
                  </div>

                  {/* INTENSITY */}
                  <div className="hidden md:flex flex-col items-center gap-1">
                    <span className="text-xs text-white/30">
                      Intensity
                    </span>
                    <IntensityBar level={cls.intensity} />
                  </div>

                  {/* ACTION */}
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`px-3 py-1 text-xs rounded-full border ${sc.bg} ${sc.text} ${sc.border}`}
                    >
                      {label}
                    </span>

                    {isFull ? (
                      <button
                        disabled
                        className="px-5 py-2 text-sm bg-white/5 text-white/20 rounded-lg flex items-center gap-1"
                      >
                        <Lock className="w-3.5 h-3.5" />
                        Full
                      </button>
                    ) : (
                      <a
                        href={bookMsg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 text-sm bg-primary text-black rounded-lg flex items-center gap-1"
                      >
                        Book Slot
                        <ChevronRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}