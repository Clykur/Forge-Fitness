import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, Youtube, Facebook, CheckCircle, Send } from "lucide-react";

const hours = [
  { days: "Monday – Friday", time: "5:00 AM – 11:00 PM" },
  { days: "Saturday", time: "6:00 AM – 10:00 PM" },
  { days: "Sunday", time: "7:00 AM – 8:00 PM" },
  { days: "Elite members", time: "24/7 keycard access" },
];

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:join@forgefitness.com?subject=Enquiry from ${encodeURIComponent(name)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14"
        >
          <p className="text-primary font-bold tracking-widest text-xs uppercase mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight text-white leading-none mb-4">
            Visit Our Studio
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Drop by, call us, or send a message. Our team responds within the hour.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left — Info */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-8">
            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Forge Fitness, Koramangala 5th Block\nBangalore, Karnataka 560095",
                  link: "https://maps.google.com/?q=Koramangala+5th+Block+Bangalore",
                  linkLabel: "Get Directions",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 8179299096",
                  link: "tel:+918179299096",
                  linkLabel: "Call Now",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "join@forgefitness.com",
                  link: "mailto:join@forgefitness.com",
                  linkLabel: "Send Email",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-xl border border-white/8 bg-white/[0.02] hover:border-white/15 transition-all">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                    <p className="text-white/55 text-sm whitespace-pre-line leading-relaxed mb-2">{item.content}</p>
                    <a
                      href={item.link}
                      target={item.link.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-primary text-xs font-bold hover:underline"
                    >
                      {item.linkLabel} &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours */}
            <div className="p-5 rounded-xl border border-white/8 bg-white/[0.02]">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <h4 className="text-white font-bold">Studio Hours</h4>
              </div>
              <div className="flex flex-col gap-2.5">
                {hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <span className="text-white/60 text-sm">{h.days}</span>
                    <span className={`text-sm font-bold ${i === hours.length - 1 ? "text-primary" : "text-white"}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white/40 text-xs uppercase tracking-wider mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Youtube, href: "#", label: "YouTube" },
                  { icon: Facebook, href: "#", label: "Facebook" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary/30 hover:bg-primary/8 transition-all"
                  >
                    <s.icon className="w-4.5 h-4.5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Map + Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col gap-6">
            {/* Map */}
            <div className="h-56 rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5995!2d77.6309!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA2LjciTiA3N8KwMzcnNTEuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                title="Forge Fitness Location"
                className="filter invert opacity-80"
              />
            </div>

            {/* Contact form */}
            <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-white font-black text-xl mb-1">Send Us a Message</h3>
              <p className="text-white/40 text-sm mb-5">For non-booking questions — we'll reply via email within a few hours.</p>

              {sent ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                  <CheckCircle className="w-10 h-10 text-primary" />
                  <h4 className="text-white font-bold">Message Sent!</h4>
                  <p className="text-white/50 text-sm">Your email client opened with your message. We'll reply soon.</p>
                  <button onClick={() => setSent(false)} className="text-primary text-sm underline mt-1">Send another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                  <textarea
                    placeholder="Your message..."
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/5 border border-white/12 rounded-lg px-4 py-3 text-white placeholder:text-white/25 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-white/10 border border-white/15 text-white font-bold text-sm rounded-lg hover:bg-white/18 hover:border-white/25 transition-all mt-1"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                  <p className="text-white/25 text-xs text-center">For bookings, use the WhatsApp button or Book Slot buttons on the Classes page.</p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
