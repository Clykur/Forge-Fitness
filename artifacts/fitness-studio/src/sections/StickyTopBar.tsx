import { useEffect, useState } from "react";

export function StickyTopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground font-medium text-sm py-2 px-4 text-center">
      ⚡ 3 slots left for today's session — <a href="#pricing" className="underline font-bold">Reserve Now →</a>
    </div>
  );
}
