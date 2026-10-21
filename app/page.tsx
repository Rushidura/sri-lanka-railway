import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Bell, MapPin, Ticket, TrainFront } from "lucide-react";
import { BookingSearch } from "@/components/booking-search";
import { HeroCarousel } from "@/components/hero-carousel";
import { SiteShell } from "@/components/site-shell";

const routes = [
  { name: "The Hill Country Line", from: "Colombo Fort", to: "Ella", image: "/images/nine-arch-train.png", tag: "MOUNTAIN · SCENIC" },
  { name: "Along the Southern Coast", from: "Colombo Fort", to: "Matara", image: "/images/coast-ai.png", tag: "COASTAL · SCENIC" },
  { name: "Into the Tea Country", from: "Kandy", to: "Badulla", image: "/images/tea-country-ai.png", tag: "HIGHLANDS · SCENIC" },
];

export default function Home() {
  return <SiteShell><main>
    <section className="hero wrap">
      <div className="hero-copy"><div className="eyebrow"><span className="gold-dot"/> SRI LANKA RAILWAYS <span className="eyebrow-rule"/> CONNECTING THE ISLAND SINCE 1864</div><h1>Take the scenic<br/>route <em>home.</em></h1><p>Across green hills, salt air and familiar stations,<br className="wide-only"/> every journey brings Sri Lanka a little closer.</p><div className="hero-actions"><Link className="button button-dark" href="#journey">Plan your journey <ArrowRight size={16}/></Link><Link className="text-link" href="/about">Meet the railway <ArrowUpRight size={15}/></Link></div><div className="hero-note"><span className="note-icon"><TrainFront size={16}/></span><span><strong>One island. Countless journeys.</strong><small>Find your way by rail.</small></span><ArrowDown size={15}/></div></div>
      <HeroCarousel/>
    </section>
    <section className="booking-wrap wrap" id="journey"><div className="booking-head"><span className="eyebrow">MAKE YOUR WAY</span><a href="https://seatreservation.railway.gov.lk/mtktwebslr/" target="_blank" rel="noopener noreferrer">Seat reservations <ArrowUpRight size={14}/></a></div><BookingSearch/></section>
    <section className="popular-section section-pad"><div className="wrap"><div className="section-heading"><div><div className="eyebrow"><span className="gold-dot"/> FAMILIAR LINES, NEW VIEWS</div><h2>Journeys worth<br/><em>taking your time for.</em></h2></div><Link className="text-link" href="/schedule">Explore train schedules <ArrowRight size={16}/></Link></div><div className="route-grid">{routes.map((route,index)=><Link className="route-card" href="/schedule" key={route.name}><div className="route-image"><Image src={route.image} alt={route.name} fill sizes="(max-width: 700px) 100vw, 33vw"/><span className="route-index">0{index+1}</span><span className="route-open"><ArrowUpRight size={17}/></span></div><div className="route-info"><span className="eyebrow">{route.tag}</span><h3>{route.name}</h3><p><MapPin size={14}/> {route.from} <span className="route-dash"/> {route.to}</p></div></Link>)}</div></div></section>
    <section className="story-strip wrap"><div className="story-image"><Image src="/images/train-bridge-wide.png" alt="Train winding across Sri Lanka's green mountain landscape" fill sizes="(max-width: 760px) 100vw, 50vw"/></div><div className="story-copy"><div className="eyebrow"><span className="gold-dot"/> A RAILWAY FOR EVERY DAY</div><h2>More than a way<br/>to get <em>there.</em></h2><p>For generations, the railway has carried people to work, brought families together and opened new corners of our island. Find the services and information that make your own journey easier.</p><Link className="button button-outline" href="/services">Explore railway services <ArrowRight size={15}/></Link><div className="story-stats"><div><strong>1864</strong><span>OUR FIRST JOURNEY</span></div><div><strong>One island</strong><span>CONNECTED BY RAIL</span></div></div></div></section>
    <section className="updates section-pad"><div className="wrap updates-inner"><div><div className="eyebrow"><span className="gold-dot"/> BEFORE YOU BOARD</div><h2>The latest<br/><em>from the railway.</em></h2><p>Travel advisories, service updates and public notices from Sri Lanka Railways.</p><Link className="text-link" href="/notices">All railway notices <ArrowRight size={15}/></Link></div><div className="update-card"><div className="update-meta"><span><Bell size={14}/> OFFICIAL UPDATES</span><span>SLR · NOTICE BOARD</span></div><h3>Check official travel updates before you go.</h3><p>Schedules, service changes and reservation information are maintained by Sri Lanka Railways. Visit the official notice board for the latest notices.</p><a className="button button-light" href="https://railway.gov.lk/web/index.php?Itemid=204&id=908&lang=en&option=com_content&view=article" target="_blank" rel="noopener noreferrer">Visit the official notice board <ArrowUpRight size={15}/></a><div className="update-watermark"><TrainFront size={130} strokeWidth={.65}/></div></div></div></section>
    <section className="last-call wrap"><div className="last-icon"><Ticket size={19}/></div><div><div className="eyebrow">YOUR NEXT JOURNEY STARTS HERE</div><h2>Reserve your seat by the window.</h2></div><a className="button button-dark" href="https://seatreservation.railway.gov.lk/mtktwebslr/" target="_blank" rel="noopener noreferrer">Find seat reservations <ArrowRight size={16}/></a></section>
  </main></SiteShell>;
}

