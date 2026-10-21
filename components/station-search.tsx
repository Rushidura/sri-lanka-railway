"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, MapPin, Search } from "lucide-react";

type Station={name:string;line:string;phone:string|null;distanceKm:number|null};
export function StationSearch({stations,lines,officialUrl}:{stations:Station[];lines:string[];officialUrl:string}){
 const [query,setQuery]=useState("");const [line,setLine]=useState("All lines");useEffect(()=>{const initialQuery=new URLSearchParams(window.location.search).get("q");if(initialQuery)setQuery(initialQuery)},[]);const visible=useMemo(()=>stations.filter(s=>(line==="All lines"||s.line===line)&&s.name.toLowerCase().includes(query.toLowerCase())).slice(0,60),[stations,line,query]);
 return <><div className="station-controls"><label><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search for a station" aria-label="Search for a station"/></label><select value={line} onChange={e=>setLine(e.target.value)} aria-label="Filter by railway line"><option>All lines</option>{lines.map(l=><option key={l}>{l}</option>)}</select><span>{visible.length}{query||line!=="All lines"?" shown":" stations"}</span></div><div className="station-table"><div className="station-table-head"><span>STATION</span><span>RAILWAY LINE</span><span>DISTANCE</span><span>CONTACT</span></div>{visible.map((s,i)=><div className="station-row" key={`${s.name}-${i}`}><strong><MapPin size={14}/>{s.name}</strong><span>{s.line}</span><span>{s.distanceKm==null?"—":`${s.distanceKm.toFixed(1)} km`}</span><span>{s.phone??"—"}</span></div>)}</div>{visible.length===60&&<p className="directory-limit">Showing the first 60 matches. Narrow the search to find a specific station.</p>}<p className="source-note">Station details are from the official directory (last updated 2 January 2025). Confirm contacts with the railway before travel. <a href={officialUrl} target="_blank" rel="noreferrer">Official station directory <ArrowUpRight size={13}/></a></p></>;
}
