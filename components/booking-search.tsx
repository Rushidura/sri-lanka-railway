"use client";

import { useState } from "react";
import { ArrowRightLeft, ArrowUpRight, CalendarDays, ChevronDown, MapPin, Search, TrainFront, UsersRound } from "lucide-react";

const stations = ["Colombo Fort", "Kandy", "Ella", "Badulla", "Galle", "Matara", "Anuradhapura", "Jaffna", "Nanu Oya", "Trincomalee", "Batticaloa"];

export function BookingSearch() {
  const [tab,setTab]=useState("Train schedule");
  const [from,setFrom]=useState("Colombo Fort");
  const [to,setTo]=useState("Ella");
  const [date,setDate]=useState("");
  const [result,setResult]=useState(false);
  const tabs=["Train schedule","Seat reservation","Season tickets","Fares & charges"];
  const official=tab==="Train schedule"?"https://railway.gov.lk/web/index.php?Itemid=199&id=878&lang=en&option=com_content&view=article":tab==="Fares & charges"?"https://railway.gov.lk/web/index.php?Itemid=200&id=877&lang=en&option=com_content&view=article":tab==="Season tickets"?"https://railway.gov.lk/web/images/pdf/issuing_railway_seasons_tickets_sinhala.pdf":"https://seatreservation.railway.gov.lk/mtktwebslr/";
  return <div className="booking-card"><div className="booking-tabs" role="tablist">{tabs.map(t=><button role="tab" aria-selected={tab===t} className={tab===t?"active":""} onClick={()=>{setTab(t);setResult(false)}} key={t}>{t}</button>)}</div><div className="booking-fields"><label><span><MapPin size={14}/> FROM</span><select value={from} onChange={e=>setFrom(e.target.value)} aria-label="Departure station">{stations.map(s=><option key={s}>{s}</option>)}</select></label><button className="swap-button" aria-label="Swap stations" onClick={()=>{setFrom(to);setTo(from)}}><ArrowRightLeft size={15}/></button><label><span><MapPin size={14}/> TO</span><select value={to} onChange={e=>setTo(e.target.value)} aria-label="Arrival station">{stations.map(s=><option key={s}>{s}</option>)}</select></label><label className="date-label"><span><CalendarDays size={14}/> JOURNEY DATE</span><input type="date" value={date} min={new Date().toISOString().slice(0,10)} onChange={e=>setDate(e.target.value)} aria-label="Journey date"/></label>{tab==="Train schedule"&&<label className="passenger-label"><span><UsersRound size={14}/> PASSENGERS</span><select aria-label="Number of passengers"><option>1 passenger</option><option>2 passengers</option><option>3 passengers</option><option>4 passengers</option></select></label>}<button className="search-button" onClick={()=>setResult(true)}><Search size={16}/><span>{tab==="Train schedule"?"Find trains":"Continue"}</span></button></div>{result&&<div className="search-result" role="status"><span className="result-train"><TrainFront size={16}/></span><span><strong>{from} → {to}</strong><small>{date?new Date(date+"T00:00:00").toLocaleDateString("en-LK",{dateStyle:"long"}):"Choose a journey date on the official railway service."} · Official Sri Lanka Railways service</small></span><a href={official} target="_blank" rel="noopener noreferrer">Continue <ArrowUpRight size={14}/></a></div>}<p className="booking-footnote"><span className="footnote-dot"/> Live times, seat availability and ticket prices are provided by official railway services.</p></div>;
}
