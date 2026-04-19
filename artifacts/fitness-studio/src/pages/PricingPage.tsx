import { Pricing } from "../sections/Pricing";
import { FAQ } from "../sections/FAQ";
import { motion } from "framer-motion";

export function PricingPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <p className="text-primary font-bold tracking-widest text-xs uppercase">Membership Plans</p>
        </motion.div>
      </div>
      <Pricing />
      <FAQ />
    </div>
  );
}
