import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { StationSearch } from "@/components/station-search";
import data from "@/data/content-data.json";
export const metadata={title:"Railway Stations",description:"Search the Sri Lanka Railways station directory by station name and line."};
export default function Stations(){const directory=data.stationDirectory;return <SiteShell><main><section className="simple-hero wrap"><div className="eyebrow"><span className="gold-dot"/> STATIONS, NEAR AND FAR</div><h1>Find your<br/><em>station.</em></h1><p>Explore the official station directory and nine rail lines serving communities across Sri Lanka.</p></section><section className="wrap stations-section"><div className="station-top"><span className="eyebrow">ISLAND-WIDE DIRECTORY · {directory.stations.length} STATIONS</span><a href={directory.url} target="_blank" rel="noreferrer">Open official directory <ArrowUpRight size={14}/></a></div><StationSearch stations={directory.stations} lines={directory.lines} officialUrl={directory.url}/></section></main></SiteShell>}

