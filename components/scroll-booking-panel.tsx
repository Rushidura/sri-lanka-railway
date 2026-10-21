"use client";

import { useEffect, useState } from "react";

export function ScrollBookingPanel({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const revealAfter = 64;
    setVisible(window.scrollY > revealAfter);

    const handleScroll = () => {
      setVisible(window.scrollY > revealAfter);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`hero-booking-panel${visible ? " is-visible" : ""}`}
      aria-hidden={!visible}
      aria-label="Search your train journey"
    >
      <div className="wrap">{children}</div>
    </section>
  );
}
