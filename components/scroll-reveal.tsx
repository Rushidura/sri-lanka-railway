"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) { nodes.forEach(node => node.classList.add("reveal-visible")); return }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("reveal-visible"); observer.unobserve(entry.target) }
    }), { rootMargin: "0px 0px -35px 0px", threshold: .08 });
    nodes.forEach(node => { node.classList.remove("reveal-visible"); node.classList.add("reveal-pending"); observer.observe(node) });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
