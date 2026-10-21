import type { Metadata } from "next";
import "./globals.css";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: { default: "Sri Lanka Railways — The Island by Rail", template: "%s · Sri Lanka Railways" },
  description: "Plan a journey, explore railway services, discover Sri Lanka by rail and find official passenger information.",
  icons: { icon: "/images/railway-logo.png" },
  openGraph: { title: "Sri Lanka Railways — The Island by Rail", description: "Connecting people, places and possibilities across the island since 1864.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><ScrollReveal />{children}</body></html>;
}
