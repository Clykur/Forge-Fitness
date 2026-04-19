import { Link } from "wouter";
import { Hero } from "../sections/Hero";
import { Announcements } from "../sections/Announcements";
import { Facilities } from "../sections/Facilities";
import { Gallery } from "../sections/Gallery";
import { BookTrial } from "../sections/BookTrial";
import { Urgency } from "../sections/Urgency";
import { motion } from "framer-motion";
import { CalendarDays, Users, ArrowRight, Flame, Clock } from "lucide-react";
import { waLink } from "../lib/whatsapp";

const featuredClasses = [
  {
    time: "8:00 AM",
    duration: "60 min",
    name: "Strength & Conditioning",
    trainer: "Priya Mehta",
    spots: 2,
    statusType: "starting",
    status: "Starting Soon",
  },
  {
    time: "5:30 PM",
    duration: "60 min",
    name: "Functional Training",
    trainer: "Neha Rawat",
    spots: 8,
    statusType: "available",
    status: "Available",
  },
];

const statusStyles: Record<string, string> = {
  starting: "text-primary border-primary/40 bg-primary/10",
  available: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
};

function SchedulePreview() {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
              <CalendarDays className="w-3.5 h-3.5" />
              Today's Highlights
            </p>
            <h2 className="text-3xl md:text-4xl font-black font-display uppercase tracking-tight text-white leading-none">
              Classes Running Now
            </h2>
          </div>
          <Link
            href="/classes"
            className="flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-3 transition-all"
          >
            View full schedule
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="flex flex-col gap-3">
          {featuredClasses.map((cls, i) => {
            const isStarting = cls.statusType === "starting";
            const bookMsg = waLink(
              `Hi! I'd like to book the ${cls.time} ${cls.name} class with ${cls.trainer} today. Please confirm my spot.`
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-xl border transition-all ${
                  isStarting
                    ? "border-primary/40 bg-primary/5"
                    : "border-white/8 bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div>
                    <div className="text-xl font-black font-display text-white">{cls.time}</div>
                    <div className="flex items-center gap-1 text-white/40 text-xs mt-0.5">
                      <Clock className="w-3 h-3" />
                      {cls.duration}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-bold">{cls.name}</h3>
                      {isStarting && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold text-primary bg-primary/10 border border-primary/30 rounded-full animate-pulse">
                          <Flame className="w-3 h-3 fill-primary" />
                          Starting Soon
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/50 mt-0.5">
                      <span>with {cls.trainer}</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {cls.spots} spots left
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href={bookMsg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-lg font-bold text-sm transition-all whitespace-nowrap ${
                    isStarting
                      ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_rgba(57,255,20,0.3)]"
                      : "bg-white/10 text-white hover:bg-white/18 border border-white/10"
                  }`}
                >
                  Book Slot
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <Announcements />
      <SchedulePreview />
      <Facilities />
      <Gallery />
      <BookTrial />
      <Urgency />
    </>
  );
}
