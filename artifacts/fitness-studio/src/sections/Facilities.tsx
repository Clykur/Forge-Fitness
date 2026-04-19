import { motion } from "framer-motion";
import { Dumbbell, Heart, Zap, ShowerHead, Wifi, UtensilsCrossed, Lock, Clock } from "lucide-react";

const amenities = [
  { icon: Dumbbell, title: "Olympic Lifting Zone", desc: "Full Olympic platforms, bumper plates, squat racks, and barbells from Eleiko." },
  { icon: Zap, title: "Functional Training Floor", desc: "Kettlebells, battle ropes, TRX, sled tracks, and plyometric boxes across 2,000 sq ft." },
  { icon: Heart, title: "Cardio Center", desc: "30+ treadmills, rowers, assault bikes, and stair climbers with individual screens." },
  { icon: ShowerHead, title: "Premium Changing Rooms", desc: "Hot showers, digital lockers, grooming stations with essentials — towels provided." },
  { icon: UtensilsCrossed, title: "Nutrition Counter", desc: "In-house protein shakes, pre-workouts, and healthy snacks. Meal plans on request." },
  { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Blazing-fast internet throughout the gym. Work, stream, or track your lifts without interruption." },
  { icon: Lock, title: "Secure Locker System", desc: "Biometric and code-based personal lockers available for daily and monthly rentals." },
  { icon: Clock, title: "Extended Hours", desc: "Open 5 AM – 11 PM weekdays. Elite members enjoy 24/7 keycard access." },
];

const photos = [
  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/4162484/pexels-photo-4162484.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3766211/pexels-photo-3766211.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1117493/pexels-photo-1117493.jpeg?auto=compress&cs=tinysrgb&w=800",
];

export function Facilities() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Our Facility</p>
          <h2 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-5">
            Built to Perform
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            10,000 sq ft of world-class equipment, premium amenities, and zero excuses — right in the heart of Koramangala.
          </p>
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16 h-56 md:h-72">
          {photos.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                src={src}
                alt="Forge Fitness facility"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90"
              />
            </motion.div>
          ))}
        </div>

        {/* Amenities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {amenities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col gap-3 p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-primary/30 hover:bg-primary/4 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
