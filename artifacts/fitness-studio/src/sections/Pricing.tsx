import { motion } from "framer-motion";
import { Check, X, Zap, Shield, Clock } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 2999,
    tagline: "Begin the journey",
    perSession: "~₹250/session",
    features: [
      { text: "3 days / week access", included: true },
      { text: "1 group class per day", included: true },
      { text: "Locker & shower access", included: true },
      { text: "Forge Fitness app", included: true },
      { text: "Personal trainer sessions", included: false },
      { text: "Nutrition guidance", included: false },
      { text: "Priority booking", included: false },
      { text: "24/7 studio access", included: false },
    ],
    popular: false,
    cta: "Get Started",
    badge: null,
  },
  {
    name: "Pro",
    price: 4999,
    tagline: "The serious athlete's plan",
    perSession: "~₹167/session",
    features: [
      { text: "Unlimited classes", included: true },
      { text: "2x personal trainer/month", included: true },
      { text: "Nutrition guidance", included: true },
      { text: "Priority booking", included: true },
      { text: "Forge Fitness premium app", included: true },
      { text: "Body composition analysis", included: false },
      { text: "Spa & recovery access", included: false },
      { text: "24/7 studio access", included: false },
    ],
    popular: true,
    cta: "Join Pro",
    badge: "Most Popular",
  },
  {
    name: "Elite",
    price: 8999,
    tagline: "Zero limits. Maximum results.",
    perSession: "~₹150/session",
    features: [
      { text: "Unlimited classes", included: true },
      { text: "Dedicated personal trainer", included: true },
      { text: "Nutrition + diet planning", included: true },
      { text: "Priority booking", included: true },
      { text: "Forge Fitness premium app", included: true },
      { text: "Body composition analysis", included: true },
      { text: "Spa & recovery access", included: true },
      { text: "24/7 studio access", included: true },
    ],
    popular: false,
    cta: "Go Elite",
    badge: "All Access",
  },
];

const guarantees = [
  { icon: Zap, text: "No contract. Cancel anytime." },
  { icon: Shield, text: "7-day money-back guarantee." },
  { icon: Clock, text: "First session free, always." },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/4 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Membership</p>
          <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-5">
            Choose Your Path
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Invest in yourself. Every tier is designed to get you real results — pick the commitment that matches your goals.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch mb-12">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "border-primary/50 bg-primary/5 shadow-[0_0_60px_rgba(57,255,20,0.1)] md:scale-[1.03] z-10"
                  : "border-white/8 bg-white/[0.03] hover:border-white/15"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              )}

              {plan.badge && (
                <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 text-xs font-black uppercase tracking-wider rounded-full ${
                  plan.popular ? "bg-primary text-black" : "bg-white/10 text-white border border-white/20"
                }`}>
                  {plan.badge}
                </div>
              )}

              <div className="p-7 flex-1 flex flex-col">
                {/* Plan name & tagline */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">{plan.name}</h3>
                  <p className="text-white/70 text-sm">{plan.tagline}</p>
                </div>

                {/* Price */}
                <div className="mb-2">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl md:text-5xl font-black font-display text-white">
                      ₹{plan.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-white/40 mb-1.5 text-sm">/month</span>
                  </div>
                  <p className="text-primary/80 text-xs font-semibold mt-1">{plan.perSession}</p>
                </div>

                <div className="h-px bg-white/8 my-6" />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      {f.included ? (
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 text-white/20 shrink-0 mt-0.5" />
                      )}
                      <span className={`text-sm ${f.included ? "text-white/80" : "text-white/25"}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="https://wa.me/918179299096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-wider text-center transition-all duration-300 ${
                    plan.popular
                      ? "bg-primary text-black hover:bg-primary/90 shadow-[0_0_24px_rgba(57,255,20,0.3)] hover:shadow-[0_0_40px_rgba(57,255,20,0.5)]"
                      : "bg-white/8 text-white hover:bg-white/15 border border-white/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 border-t border-b border-white/5 mb-10"
        >
          {guarantees.map((g, i) => (
            <div key={i} className="flex items-center gap-3 text-white/50">
              <g.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="text-sm">{g.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Free trial nudge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/40 text-sm">
            Not sure yet?{" "}
            <a
              href="https://wa.me/918179299096"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Claim your free trial session &rarr;
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
