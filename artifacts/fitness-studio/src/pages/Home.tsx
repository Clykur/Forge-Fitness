import { StickyTopBar } from "../sections/StickyTopBar";
import { Navbar } from "../sections/Navbar";
import { Hero } from "../sections/Hero";
import { Announcements } from "../sections/Announcements";
import { Schedule } from "../sections/Schedule";
import { Facilities } from "../sections/Facilities";
import { Trainers } from "../sections/Trainers";
import { BookTrial } from "../sections/BookTrial";
import { Gallery } from "../sections/Gallery";
import { Pricing } from "../sections/Pricing";
import { Urgency } from "../sections/Urgency";
import { FAQ } from "../sections/FAQ";
import { Location } from "../sections/Location";
import { Footer } from "../sections/Footer";
import { WhatsAppButton } from "../sections/WhatsAppButton";
import { ExitIntent } from "../sections/ExitIntent";

export function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <StickyTopBar />
      <Navbar />
      <Hero />
      <Announcements />
      <Schedule />
      <Facilities />
      <Trainers />
      <BookTrial />
      <Gallery />
      <Pricing />
      <Urgency />
      <FAQ />
      <Location />
      <Footer />
      <WhatsAppButton />
      <ExitIntent />
    </main>
  );
}
