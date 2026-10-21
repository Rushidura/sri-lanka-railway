import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

const nav = [["Home", "/"], ["About", "/about"], ["Services", "/services"], ["Passenger info", "/passenger-info"], ["Stations", "/stations"], ["Notices", "/notices"], ["Contact", "/passenger-info#help"]];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return <><header className="site-header"><div className="nav-wrap"><Link className="brand" href="/" aria-label="Sri Lanka Railways home"><span className="brand-mark"><Image src="/images/railway-logo.png" alt="" width={34} height={40}/></span><span className="brand-text">SRI LANKA<span>RAILWAYS</span></span></Link><nav className="main-nav" aria-label="Main navigation">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><details className="language-menu"><summary aria-label="Choose language">EN <ChevronDown size={14}/></summary><div className="language-options"><a href="https://railway.gov.lk/web/index.php?lang=en" target="_blank" rel="noreferrer">English <span>EN</span></a><a href="https://railway.gov.lk/web/index.php?lang=si" target="_blank" rel="noreferrer">සිංහල <span>SI</span></a><a href="https://railway.gov.lk/web/index.php?lang=ta" target="_blank" rel="noreferrer">தமிழ் <span>TA</span></a></div></details><details className="mobile-menu"><summary aria-label="Open navigation"><span/><span/><span/></summary><nav className="mobile-nav" aria-label="Mobile navigation">{nav.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav></details></div></header>{children}<SiteFooter/></>;
}
