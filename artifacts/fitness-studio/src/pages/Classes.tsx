import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, ChevronRight, Lock, Flame, CalendarDays } from "lucide-react";
import { waLink } from "../lib/whatsapp";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const schedule: Record<string, Array<{
  time: string; duration: string; name: string; trainer: string;
  spots: number; totalSpots: number; intensity: number; status: string; statusType: string;
}>> = {
  Monday: [
    { time: "6:00 AM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 0, totalSpots: 12, intensity: 5, status: "Full", statusType: "full" },
    { time: "8:00 AM", duration: "60 min", name: "Strength & Conditioning", trainer: "Priya Mehta", spots: 2, totalSpots: 10, intensity: 4, status: "Starting Soon", statusType: "starting" },
    { time: "10:00 AM", duration: "75 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 4, totalSpots: 15, intensity: 2, status: "Few Spots Left", statusType: "few" },
    { time: "5:30 PM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 8, totalSpots: 12, intensity: 3, status: "Available", statusType: "available" },
    { time: "7:00 PM", duration: "45 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 10, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
  ],
  Tuesday: [
    { time: "6:00 AM", duration: "60 min", name: "Strength & Conditioning", trainer: "Priya Mehta", spots: 3, totalSpots: 10, intensity: 4, status: "Few Spots Left", statusType: "few" },
    { time: "8:00 AM", duration: "60 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 5, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
    { time: "10:00 AM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 6, totalSpots: 12, intensity: 5, status: "Available", statusType: "available" },
    { time: "6:00 PM", duration: "75 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 10, totalSpots: 15, intensity: 2, status: "Available", statusType: "available" },
    { time: "7:30 PM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 7, totalSpots: 12, intensity: 3, status: "Available", statusType: "available" },
  ],
  Wednesday: [
    { time: "6:00 AM", duration: "60 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 0, totalSpots: 15, intensity: 2, status: "Full", statusType: "full" },
    { time: "8:00 AM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 4, totalSpots: 12, intensity: 5, status: "Few Spots Left", statusType: "few" },
    { time: "5:30 PM", duration: "60 min", name: "Strength & Conditioning", trainer: "Priya Mehta", spots: 8, totalSpots: 10, intensity: 4, status: "Available", statusType: "available" },
    { time: "7:00 PM", duration: "45 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 12, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
  ],
  Thursday: [
    { time: "6:00 AM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 2, totalSpots: 12, intensity: 3, status: "Few Spots Left", statusType: "few" },
    { time: "8:00 AM", duration: "75 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 9, totalSpots: 15, intensity: 2, status: "Available", statusType: "available" },
    { time: "10:00 AM", duration: "60 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 6, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
    { time: "6:00 PM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 5, totalSpots: 12, intensity: 5, status: "Available", statusType: "available" },
    { time: "7:30 PM", duration: "60 min", name: "Strength & Conditioning", trainer: "Priya Mehta", spots: 4, totalSpots: 10, intensity: 4, status: "Few Spots Left", statusType: "few" },
  ],
  Friday: [
    { time: "6:00 AM", duration: "60 min", name: "HIIT Training", trainer: "Rahul Singh", spots: 1, totalSpots: 12, intensity: 5, status: "Few Spots Left", statusType: "few" },
    { time: "8:00 AM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 7, totalSpots: 12, intensity: 3, status: "Available", statusType: "available" },
    { time: "5:30 PM", duration: "60 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 11, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
    { time: "7:00 PM", duration: "75 min", name: "Power Yoga", trainer: "Arjun Kumar", spots: 8, totalSpots: 15, intensity: 2, status: "Available", statusType: "available" },
  ],
  Saturday: [
    { time: "7:00 AM", duration: "90 min", name: "Weekend Warrior HIIT", trainer: "Rahul Singh", spots: 3, totalSpots: 20, intensity: 5, status: "Few Spots Left", statusType: "few" },
    { time: "9:00 AM", duration: "75 min", name: "Power Yoga (Weekend)", trainer: "Arjun Kumar", spots: 12, totalSpots: 20, intensity: 2, status: "Available", statusType: "available" },
    { time: "11:00 AM", duration: "60 min", name: "Strength Session", trainer: "Priya Mehta", spots: 8, totalSpots: 15, intensity: 4, status: "Available", statusType: "available" },
    { time: "5:00 PM", duration: "60 min", name: "Boxing Circuit", trainer: "Vikram D.", spots: 10, totalSpots: 14, intensity: 5, status: "Available", statusType: "available" },
  ],
  Sunday: [
    { time: "8:00 AM", duration: "90 min", name: "Weekend Warrior Strength", trainer: "Rahul Singh", spots: 6, totalSpots: 20, intensity: 4, status: "Available", statusType: "available" },
    { time: "10:00 AM", duration: "75 min", name: "Recovery Yoga", trainer: "Arjun Kumar", spots: 15, totalSpots: 20, intensity: 1, status: "Available", statusType: "available" },
    { time: "4:00 PM", duration: "60 min", name: "Functional Training", trainer: "Neha Rawat", spots: 9, totalSpots: 12, intensity: 3, status: "Available", statusType: "available" },
  ],
};

const statusConfig: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  full: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30", dot: "bg-red-500" },
  starting: { bg: "bg-primary/15", text: "text-primary", border: "border-primary/50", dot: "bg-primary" },
  few: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30", dot: "bg-amber-500" },
  available: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30", dot: "bg-emerald-500" },
};

function IntensityBar({ level }: { level: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className={`h-2 w-1 rounded-full ${i < level ? "bg-primary" : "bg-white/10"}`} />
      ))}
    </div>
  );
}

const today = new Date().toLocaleDateString("en-US", { weekday: "long" }) as keyof typeof schedule;

export function Classes() {
  const [selectedDay, setSelectedDay] = useState<string>(
    days.includes(today) ? today : "Monday"
  );

  const classes = schedule[selectedDay] ?? [];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
            <CalendarDays className="w-3.5 h-3.5" />
            Class Schedule
          </p>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-4">
            Weekly Schedule
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Pick your day, pick your class, book your spot — it's that simple.
          </p>
        </motion.div>

        {/* Day selector */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 hide-scrollbar">
          {days.map((day) => {
            const isToday = day === today;
            const isSelected = day === selectedDay;
            return (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2.5 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? "bg-primary text-black shadow-[0_0_16px_rgba(57,255,20,0.3)]"
                    : "bg-white/5 text-white/60 border border-white/8 hover:border-white/20 hover:text-white"
                }`}
              >
                {day.slice(0, 3)}
                {isToday && (
                  <span className={`ml-1.5 text-xs font-black ${isSelected ? "text-black/60" : "text-primary"}`}>
                    •
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Classes list */}
        <div className="flex flex-col gap-3">
          {classes.map((cls, i) => {
            const sc = statusConfig[cls.statusType];
            const isStarting = cls.statusType === "starting";
            const isFull = cls.statusType === "full";
            const occupancyPct = Math.round(((cls.totalSpots - cls.spots) / cls.totalSpots) * 100);
            const bookMsg = waLink(
              `Hi! I'd like to book the ${cls.time} ${cls.name} class on ${selectedDay} with ${cls.trainer} at Forge Fitness. Please confirm my spot.`
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`group relative rounded-xl overflow-hidden border transition-all duration-300 ${
                  isStarting
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_24px_rgba(57,255,20,0.06)]"
                    : "border-white/8 bg-white/[0.03] hover:border-white/15"
                }`}
              >
                {isStarting && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                )}
                <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-[130px_1fr_auto_auto] gap-4 md:gap-6 items-center">
                  <div className="flex items-center gap-3 md:block">
                    <div className="text-2xl font-black font-display text-white tabular-nums">{cls.time}</div>
                    <div className="flex items-center gap-1 text-white/40 text-xs mt-0.5">
                      <Clock className="w-3 h-3" />
                      {cls.duration}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-white">{cls.name}</h3>
                      {isStarting && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-primary/20 border border-primary/40 rounded-full text-primary text-xs font-bold animate-pulse">
                          <Flame className="w-3 h-3 fill-primary" />
                          Starting Soon
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-white/50">
                      <span>with {cls.trainer}</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {isFull ? "Class full" : `${cls.spots} of ${cls.totalSpots} spots left`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex-1 max-w-[140px] h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${isFull ? "bg-red-500" : isStarting ? "bg-primary" : "bg-white/30"}`}
                          style={{ width: `${occupancyPct}%` }}
                        />
                      </div>
                      <span className="text-white/30 text-xs">{occupancyPct}% booked</span>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center gap-1.5">
                    <span className="text-white/30 text-xs uppercase tracking-wider">Intensity</span>
                    <IntensityBar level={cls.intensity} />
                  </div>

                  <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${sc.bg} ${sc.text} ${sc.border}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${sc.dot} ${isStarting ? "animate-pulse" : ""}`} />
                      {cls.status}
                    </span>
                    {isFull ? (
                      <button disabled className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-bold text-sm bg-white/5 text-white/20 cursor-not-allowed">
                        <Lock className="w-3.5 h-3.5" />
                        Full
                      </button>
                    ) : (
                      <a
                        href={bookMsg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-bold text-sm transition-all ${
                          isStarting
                            ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_16px_rgba(57,255,20,0.3)]"
                            : "bg-white/10 text-white hover:bg-white/18 border border-white/10"
                        }`}
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

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-white/30 text-sm"
        >
          Schedule subject to change. Contact us at +91 81792 99096 for the latest updates.
        </motion.p>
      </div>
    </div>
  );
}
