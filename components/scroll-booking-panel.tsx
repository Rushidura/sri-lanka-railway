"use client";

import { useEffect, useRef, useState } from "react";

export function ScrollBookingPanel({ children }: { children: React.ReactNode }) {
  const panelRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const panel = panelRef.current;
      if (!panel) return;

      const panelBottom = panel.getBoundingClientRect().bottom + currentY;
      const scrollingDown = currentY > lastScrollY.current + 2;
      const scrollingUp = currentY < lastScrollY.current - 2;

      if (currentY < panelBottom || scrollingUp) {
        setDocked(false);
      } else if (scrollingDown) {
        setDocked(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={panelRef}
      className={`hero-booking-panel${docked ? " is-docked" : ""}`}
      aria-label="Search your train journey"
    >
      <div className="wrap">{children}</div>
    </section>
  );
}
