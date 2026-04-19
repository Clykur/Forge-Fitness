import { motion } from "framer-motion";
import { Megaphone, Tag, CalendarCheck, Users, ArrowRight } from "lucide-react";
import { waLink } from "../lib/whatsapp";

const updates = [
  {
    icon: CalendarCheck,
    tag: "New Batch",
    tagColor: "text-primary bg-primary/10 border-primary/30",
    title: "May Batch Now Open — 12 Spots Left",
    body: "Our new morning batch (6 AM & 8 AM slots) kicks off May 1st. Early registrations get a complimentary nutrition consultation worth ₹2,000.",
    date: "Apr 19, 2026",
    cta: "Reserve a Spot",
    msg: "Hi! I'd like to register for the May batch at Forge Fitness. Can you share the details?",
  },
  {
    icon: Tag,
    tag: "Special Offer",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    title: "Refer a Friend — Get 1 Month Free",
    body: "Bring a friend to Forge Fitness and both of you get 1 month added to your membership. No limits — the more you refer, the more you earn.",
    date: "Valid through May 31",
    cta: "Claim Offer",
    msg: "Hi! I heard about the referral offer at Forge Fitness. I'd like to refer a friend and claim our free month.",
  },
  {
    icon: Users,
    tag: "Event",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
    title: "Weekend Warrior Program — Launching Soon",
    body: "Can't make it on weekdays? Our Saturday & Sunday only program gives you full gym access + 2 group classes with dedicated coaching. Perfect for busy professionals.",
    date: "Starts May 10",
    cta: "Join Waitlist",
    msg: "Hi! I'm interested in the Weekend Warrior program at Forge Fitness. Please add me to the waitlist.",
  },
];

export function Announcements() {
  return (
    <section className="py-28 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3 flex items-center gap-2">
              <Megaphone className="w-3.5 h-3.5" />
              Notice Board
            </p>
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-white leading-none mb-3">
              What's Happening
            </h2>
            <p className="text-white/50 text-base max-w-xl">
              Latest updates, offers, and events from Forge Fitness — fresh as of today.
            </p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full border-white/10 w-fit text-sm text-white/50">
            Updated April 2026
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {updates.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col gap-4 p-6 rounded-xl border border-white/8 bg-white/[0.03] hover:border-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold border rounded-full ${item.tagColor}`}>
                  <item.icon className="w-3 h-3" />
                  {item.tag}
                </span>
                <span className="text-white/30 text-xs">{item.date}</span>
              </div>

              <div className="flex-1">
                <h3 className="text-white font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.body}</p>
              </div>

              <a
                href={waLink(item.msg)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex items-center gap-1.5 text-primary font-bold text-sm hover:gap-3 transition-all"
              >
                {item.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
