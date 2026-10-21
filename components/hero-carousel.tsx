"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Pause, Play } from "lucide-react";

const slides=[
 {image:"/images/nine-arch-train.png",alt:"Sri Lankan train crossing the Nine Arch Bridge in the hill country",place:"NINE ARCH BRIDGE, ELLA",route:"Ella → Kandy",region:"SRI LANKA · HILL COUNTRY LINE"},
 {image:"/images/tea-country-ai.png",alt:"Tea gardens across Sri Lanka’s central highlands",place:"TEA COUNTRY, HILL COUNTRY",route:"Kandy → Badulla",region:"SRI LANKA · MOUNTAIN LINE"},
 {image:"/images/coast-ai.png",alt:"Sri Lanka’s southern coastline beside the railway",place:"SOUTHERN COAST, SRI LANKA",route:"Colombo → Matara",region:"SRI LANKA · COAST LINE"},
];
export function HeroCarousel(){const [index,setIndex]=useState(0);const [paused,setPaused]=useState(false);useEffect(()=>{if(paused)return;const timer=window.setInterval(()=>setIndex(i=>(i+1)%slides.length),15000);return()=>window.clearInterval(timer)},[paused]);const slide=slides[index];return <div className="hero-art"><Image key={slide.image} src={slide.image} alt={slide.alt} fill priority sizes="(max-width: 760px) 100vw, 57vw"/><div className="hero-overlay"/><div className="hero-badge"><span>THE ISLAND</span><span>BY RAIL · 0{index+1}</span></div><div className="hero-caption"><span className="caption-script">The journey is the destination.</span><span className="caption-title">{slide.route}</span><span className="caption-sub">{slide.region}</span></div><div className="hero-credit">IMAGE · {slide.place}</div><div className="hero-controls"><button aria-label="Previous landscape" onClick={()=>setIndex(i=>(i+slides.length-1)%slides.length)}><ArrowLeft size={14}/></button><span>{String(index+1).padStart(2,"0")} <i/> {String(slides.length).padStart(2,"0")}</span><button aria-label={paused?"Resume automatic images":"Pause automatic images"} onClick={()=>setPaused(!paused)}>{paused?<Play size={13}/>:<Pause size={13}/>}</button><button aria-label="Next landscape" onClick={()=>setIndex(i=>(i+1)%slides.length)}><ArrowRight size={14}/></button></div></div>}
