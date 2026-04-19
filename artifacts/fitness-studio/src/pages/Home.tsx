import { StickyTopBar } from "../sections/StickyTopBar";
import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { Schedule } from "../sections/Schedule";
import { Trainers } from "../sections/Trainers";
import { Gallery } from "../sections/Gallery";
import { Pricing } from "../sections/Pricing";
import { Urgency } from "../sections/Urgency";
import { WhatsAppButton } from "../sections/WhatsAppButton";
import { Location } from "../sections/Location";
import { Footer } from "../sections/Footer";
import { ExitIntent } from "../sections/ExitIntent";

export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <StickyTopBar />
      <Navbar />
      <Hero />
      <Schedule />
      <Trainers />
      <Gallery />
      <Pricing />
      <Urgency />
      <Location />
      <Footer />
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
