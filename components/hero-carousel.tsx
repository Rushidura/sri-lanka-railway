"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";

const slides = [
    { image: "/images/nine-arch-train.png", alt: "A train crossing the Nine Arch Bridge in Ella", place: "NINE ARCH BRIDGE, ELLA", route: "Ella to Kandy", eyebrow: "THE HILL COUNTRY", title: "Sri Lanka, seen from the window.", copy: "Mist-covered mountains, tea gardens and the legendary Nine Arch Bridge. Take the slow road through the heart of the island." },
    { image: "/images/Blue%20Train%20Over%20Misty%20Mountain%20Viaduct.png", alt: "Blue train passing over a misty mountain viaduct", place: "HILL COUNTRY LINE", route: "Kandy to Ella", eyebrow: "ABOVE THE CLOUDS", title: "A journey worth taking slowly.", copy: "Follow the railway through cool highlands and green valleys, where every bend brings another island view." },
    { image: "/images/Tropical%20Coastal%20Train%20Journey.png", alt: "Coastal railway journey along the Sri Lankan shore", place: "SOUTHERN COAST", route: "Colombo to Galle", eyebrow: "THE COAST LINE", title: "Let the ocean set the pace.", copy: "Ride beside the Indian Ocean, past fishing towns and palm-lined shores on Sri Lanka’s southern coast." },
    { image: "/images/Misty%20Blue%20Train%20Through%20the%20Rainforest.png", alt: "Train travelling through lush Sri Lankan rainforest", place: "RAINFOREST ROUTE", route: "Colombo to Badulla", eyebrow: "GREEN COUNTRY", title: "Find a greener way across the island.", copy: "From city stations to quiet hill-country towns, the railway connects landscapes and the people who call them home." },
    { image: "/images/Sri%20Lanka%20Railway%20Sunset%20Panorama.png", alt: "Sri Lankan railway landscape in warm evening light", place: "SRI LANKA, BY RAIL", route: "Journeys across Sri Lanka", eyebrow: "ONE ISLAND, COUNTLESS JOURNEYS", title: "Make the journey part of the story.", copy: "Discover familiar places from a new perspective, with Sri Lanka Railways as your guide." },
];

export function HeroCarousel() {
    const [index, setIndex] = useState(0); const [paused, setPaused] = useState(false); useEffect(() => {
        if (paused) return; const timer = window.setInterval(() => setIndex(i => (i + 1) % slides.length), 15000);

        return () => window.clearInterval(timer)
    }, [paused]);
    const slide = slides[index];
    return  <section className="home-hero" aria-label="Discover Sri Lanka by rail">
                <div className="hero-stage">
                    <Image key={slide.image} src={slide.image} alt={slide.alt} fill priority sizes="100vw" style={{ objectPosition: index === 2 ? "center 57%" : "center 55%" }} />
                    <div className="hero-overlay" />
                    <div className="hero-copy">
                        <div className="eyebrow">
                            <span className="gold-dot" />
                            {slide.eyebrow}
                            <span className="eyebrow-rule" /> SRI LANKA RAILWAYS</div>
                        <h1>{slide.title}</h1>
                        <p>{slide.copy}</p>
                        <div className="hero-actions">
                            <Link className="button button-light" href="#journey">Plan your journey <ArrowRight size={16} /></Link>
                            <Link className="hero-text-link" href="/about">Meet the railway <ArrowUpRight size={15} /></Link>
                        </div>
                    </div>
                    
                    <div className="hero-caption">
                        <span>{slide.route}</span>
                        <small>{slide.place}</small>
                    </div>
                    
                    <div className="hero-controls">
                        <button aria-label="Previous landscape" onClick={() => setIndex(i => (i + slides.length - 1) % slides.length)}><ArrowLeft size={14} /></button>
                        {/* <span>{String(index + 1).padStart(2, "0")} <i /> {String(slides.length).padStart(2, "0")}</span> */}
                        <button aria-label={paused ? "Resume automatic images" : "Pause automatic images"} onClick={() => setPaused(!paused)}>{paused ? <Play size={13} /> : <Pause size={13} />}</button>
                        <button aria-label="Next landscape" onClick={() => setIndex(i => (i + 1) % slides.length)}><ArrowRight size={14} /></button>
                    </div>
                    <div className="hero-bottom-note">
                        <span>CONNECTING SRI LANKA SINCE 1864</span>
                        <span>SCROLL TO EXPLORE ↓</span>
                    </div>
                </div>
            </section>
}
