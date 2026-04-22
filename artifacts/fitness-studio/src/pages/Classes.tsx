import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Users, ChevronRight, Flame, CalendarDays } from "lucide-react";
import { Link } from "wouter";
import { useScheduleStore, ClassItem, ScheduleState } from "@/lib/store";
import { generateDays } from "@/lib/generate-days";

const days = generateDays();

type StatusType = "full" | "few" | "available";

function getStatus(spots: number): { label: string; type: StatusType } {
  if (spots <= 0) return { label: "Full", type: "full" };
  if (spots <= 3) return { label: "Few Spots Left", type: "few" };
  return { label: "Available", type: "available" };
}

const statusConfig: Record<
  StatusType,
  { bg: string; text: string; border: string; dot: string }
> = {
  full: { bg: "bg-red-500/10", text: "text-red-400", border: "border-red-500/30", dot: "bg-red-500" },
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

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export function Classes() {
  const [selectedDay, setSelectedDay] = useState<string>(
    days.includes(today) ? today : "Monday"
  );
  const schedule = useScheduleStore((state: ScheduleState) => state.schedule);

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
          {days.map((day: string) => {
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
                  <span
                    className={`ml-1.5 text-xs font-black ${
                      isSelected ? "text-black/60" : "text-primary"
                    }`}
                  >
                    •
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Classes list */}
        <div className="flex flex-col gap-3">
          {classes.map((cls: ClassItem, i: number) => {
            const occupancyPct = Math.round(
              ((cls.totalSpots - cls.spots) / cls.totalSpots) * 100
            );
           const { label, type } = getStatus(cls.spots);
const sc = statusConfig[type];
const isFull = type === "full";

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`group relative rounded-xl overflow-hidden border transition-all duration-300 ${
                  isFull
                    ? "border-primary/40 bg-primary/5 shadow-[0_0_24px_rgba(57,255,20,0.06)]"
                    : "border-white/8 bg-white/[0.03] hover:border-white/15"
                }`}
              >
                {isFull && (
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                )}
                <div className="p-5 md:p-6 grid grid-cols-1 md:grid-cols-[130px_1fr_auto_auto] gap-4 md:gap-6 items-center">
                  <div className="flex items-center gap-3 md:block">
                    <div className="text-2xl font-black font-display text-white tabular-nums">
                      {cls.time}
                    </div>
                    <div className="flex items-center gap-1 text-white/40 text-xs mt-0.5">
                      <Clock className="w-3 h-3" />
                      {cls.duration}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-white">
                        {cls.name}
                      </h3>
                      {isFull && (
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
                        {isFull
                          ? "Class full"
                          : `${cls.spots} of ${cls.totalSpots} spots left`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div className="flex-1 max-w-[140px] h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            isFull
                              ? "bg-red-500"
                              : type === "few"
                              ? "bg-amber-500"
                              : "bg-white/30"
                          }`}
                          style={{ width: `${occupancyPct}%` }}
                        />
                      </div>
                      <span className="text-white/30 text-xs">
                        {occupancyPct}% booked
                      </span>
                    </div>
                  </div>

                  <div className="hidden md:flex flex-col items-center gap-1.5">
                    <span className="text-white/30 text-xs uppercase tracking-wider">
                      Intensity
                    </span>
                    <IntensityBar level={cls.intensity} />
                  </div>

                  <div className="flex items-center gap-3 md:flex-col md:items-end md:gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${sc.bg} ${sc.text} ${sc.border}`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          sc.dot
                        } ${isFull ? "animate-pulse" : ""}`}
                      />
                      {label}
                    </span>
                    <Link
                      href={
                        isFull ? "#" : `/book/${selectedDay.toLowerCase()}-${i}`
                      }
                      className={`w-full md:w-auto text-center px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                        isFull
                          ? "bg-white/5 text-white/40 cursor-not-allowed"
                          : "bg-primary text-black hover:bg-primary/90"
                      }`}
                    >
                      {isFull ? "Full" : "Book Slot"}
                      {!isFull && (
                        <ChevronRight className="w-4 h-4 inline-block ml-1" />
                      )}
                    </Link>
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