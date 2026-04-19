import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { waLink } from "../lib/whatsapp";

const faqs = [
  {
    q: "Do I need prior fitness experience to join?",
    a: "Not at all. We welcome complete beginners to seasoned athletes. Our trainers assess your fitness level during the first session and create a plan that's right for you — zero judgment, full support.",
  },
  {
    q: "How do I book a session or trial?",
    a: "The easiest way is to tap any 'Book' button on this page — it opens WhatsApp with a pre-filled message. Our team responds within 5 minutes to confirm your slot. You can also call us directly at +91 8179299096.",
  },
  {
    q: "What should I bring for my first session?",
    a: "Just yourself and your motivation. Bring comfortable workout clothes and a water bottle. We provide towels, and you can use our lockers free of charge. Shoes are available to rent if needed.",
  },
  {
    q: "Can I freeze or pause my membership?",
    a: "Yes. Pro and Elite members can freeze their membership for up to 30 days per year — no questions asked. Starter members can pause for up to 15 days. Just let us know 3 days in advance via WhatsApp.",
  },
  {
    q: "Are personal training sessions included?",
    a: "Pro members get 2 personal trainer sessions per month. Elite members get dedicated trainer access with full programme design. Starter members can add PT sessions at ₹800/session.",
  },
  {
    q: "Do you offer diet and nutrition support?",
    a: "Yes. Pro and Elite memberships include personalized nutrition guidance from our in-house nutritionist. This covers macro tracking, meal structuring, and supplement advice aligned to your goals.",
  },
  {
    q: "What are your opening hours?",
    a: "We're open Monday–Saturday 5 AM–11 PM, and Sunday 7 AM–8 PM. Elite members enjoy 24/7 keycard access via our secure entry system.",
  },
  {
    q: "Is there a joining fee or lock-in contract?",
    a: "No joining fee, no lock-in contracts. All memberships are month-to-month. You can cancel anytime with 7 days' notice and get a prorated refund if applicable.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-28 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center"
          >
            <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-white leading-none mb-4">
              Got Questions?
            </h2>
            <p className="text-white/50 text-base">
              Everything you need to know about training at Forge Fitness.
            </p>
          </motion.div>

          <div className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  open === i ? "border-primary/30 bg-primary/4" : "border-white/8 bg-white/[0.02] hover:border-white/15"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-bold text-base transition-colors ${open === i ? "text-primary" : "text-white"}`}>
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
                    {open === i ? <Minus className="w-3 h-3 text-primary" /> : <Plus className="w-3 h-3 text-white/60" />}
                  </span>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-white/60 text-sm leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-white/40 text-sm mb-3">Still have questions?</p>
            <a
              href={waLink("Hi! I have a question about Forge Fitness that isn't in the FAQ. Can you help?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-sm"
            >
              Chat with us on WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
