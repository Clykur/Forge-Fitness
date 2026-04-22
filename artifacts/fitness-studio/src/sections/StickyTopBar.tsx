import { Zap } from "lucide-react";

export function StickyTopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-black font-semibold text-sm py-2 px-4 text-center flex items-center justify-center gap-2">
      <Zap className="w-4 h-4 fill-black shrink-0" />
      <span>3 slots left for today's session —</span>
      <a href="classes" className="underline font-black hover:opacity-80 transition-opacity">
        Reserve Now &rarr;
      </a>
    </div>
  );
}
