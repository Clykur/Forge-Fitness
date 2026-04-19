import { useEffect } from "react";
import { useLocation } from "wouter";
import { StickyTopBar } from "../sections/StickyTopBar";
import { Navbar } from "../sections/Navbar";
import { Footer } from "../sections/Footer";
import { WhatsAppButton } from "../sections/WhatsAppButton";
import { ExitIntent } from "../sections/ExitIntent";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location]);
  return null;
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <ScrollToTop />
      <StickyTopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
      <ExitIntent />
    </div>
  );
}
