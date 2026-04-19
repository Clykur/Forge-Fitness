import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    period: "/month",
    features: [
      "3 days/week access",
      "1 group class/day",
      "Locker access",
      "Basic app access"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "₹4,999",
    period: "/month",
    features: [
      "Unlimited classes",
      "Personal trainer session (2x/month)",
      "Nutrition guidance",
      "Priority booking",
      "Premium app access"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "₹8,999",
    period: "/month",
    features: [
      "All Pro benefits",
      "Dedicated trainer",
      "Body composition analysis",
      "Spa access",
      "24/7 studio access"
    ],
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background relative">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase tracking-tight text-white mb-4">
            Choose Your Path
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Invest in yourself. Select the tier that matches your commitment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative glass-card rounded-2xl p-8 flex flex-col ${
                plan.popular 
                  ? "border-primary/50 neon-glow md:scale-105 bg-black/60 md:py-12 z-10" 
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-black text-sm font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{plan.name}</h3>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-5xl font-black font-display text-white">{plan.price}</span>
                  <span className="text-white/50 mb-2">{plan.period}</span>
                </div>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded font-bold uppercase tracking-wider transition-all ${
                  plan.popular
                    ? "bg-primary text-black hover:bg-primary/90 neon-glow"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
