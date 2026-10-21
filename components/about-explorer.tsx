"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, TrainFront } from "lucide-react";
import { useState } from "react";

const sections = [
  { title: "Overview", kicker: "A SERVICE FOR THE WHOLE ISLAND", heading: "A railway that belongs to everyone." },
  { title: "History", kicker: "A JOURNEY THROUGH TIME", heading: "From coffee cargo to a shared journey." },
  { title: "Vision & Mission", kicker: "OUR PURPOSE", heading: "Safe journeys. A reliable connection." },
  { title: "Key Positions", kicker: "PEOPLE WHO KEEP THE RAILWAY MOVING", heading: "Leadership and public service." },
  { title: "Organization Structure", kicker: "HOW THE DEPARTMENT WORKS", heading: "Many teams. One railway." },
  { title: "Railway Network", kicker: "LINES THAT BRING US TOGETHER", heading: "Follow the tracks across the island." },
];

const history = [
  {
    title: "Early Railway",
    image: "https://railway.gov.lk/web/images/stories/img-0.jpg",
    alt: "An early Sri Lankan railway locomotive",
    paragraphs: [
      "Rail was introduced in Sri Lanka in 1864 to transport coffee from plantations in the hill country district of Kandy to the port city of Colombo for export to Europe and world markets. The coffee blight of 1871 devastated plantations, leading to the rise of tea cultivation.",
      "With the expansion of tea plantations in the 1880s, corporate ownership replaced individual proprietorship. The production process became more advanced, requiring extensive railway construction in the Kandyan highlands. Railways were essential for transporting tea to Colombo and moving labour, machinery, fertilizer, and food supplies to plantation areas.",
    ],
  },
  {
    title: "Railway Expansion",
    image: "https://railway.gov.lk/web/images/stories/img-1.jpg",
    alt: "A historic railway line in Sri Lanka",
    paragraphs: [
      "Railway expansion continued to support coconut plantations along the western and northwestern coasts, as well as rubber plantations inland. These developments created a need for safe and affordable transportation, opening access to previously isolated regions of the country.",
      "The Main Line extended north from Kandy to the historic city of Anuradhapura and further to Kankesanturai. Another extension reached Talaimannar, linking Sri Lanka with South India via ferry transport. These routes facilitated labour movement and essential imports such as rice.",
    ],
  },
  {
    title: "Hill Country Railway",
    image: "https://railway.gov.lk/web/images/stories/img-2.jpg",
    alt: "The railway climbing through Sri Lanka's hill country",
    paragraphs: [
      "Strategic considerations led to railway construction toward the eastern regions, connecting the natural harbour of Trincomalee and the provincial capital Batticaloa. Light rail sections and narrow-gauge lines were introduced to serve rubber plantations east of Colombo, including the Kelani Valley Line.",
      "In the hill country, a branch line was constructed from Nanu Oya to Nuwara Eliya through extremely challenging terrain. Economic constraints shaped the railway alignment, resulting in steep gradients, sharp curves, and winding tracks. Speeds ranged from 25–40 km/h in the hill country and 65–80 km/h in the lowlands.",
      "In the early railway era, most freight was transported to the Port of Colombo. As the port expanded, railway lines were constructed to connect directly to its piers, strengthening Sri Lanka’s role in global trade.",
    ],
  },
];

const officials = [
  {
    group: "Ministry Officials",
    people: [
      { name: "Hon. Bimal Rathnayake", role: "Minister · Ministry of Transport, Highways, Ports and Civil Aviation", image: "https://railway.gov.lk/web/images/key_position/hon_bimal_rathnayake.jpg" },
      { name: "Hon. (Dr.) Prasanna Gunasena", role: "Deputy Minister · Ministry of Transport, Highways, Ports and Civil Aviation", image: "https://railway.gov.lk/web/images/key_position/hon_%20dr_prasanna_gunasena.jpg" },
      { name: "Mr. Thushara D Pathiranage", role: "Acting Secretary · Ministry of Transport, Highways, Ports and Civil Aviation" },
    ],
  },
  {
    group: "Sri Lanka Railways – Management",
    people: [
      { name: "Mr. Ravindra Pathmapriya", role: "General Manager of Railways", image: "https://railway.gov.lk/web/images/key_position/mr_k_ravindra_pathmapriya1.png" },
      { name: "Mrs. M.M.P. Priyangani Pathangoda", role: "Additional General Manager (Administration)", image: "https://railway.gov.lk/web/images/key_position/mmp_priyangani.jpg" },
      { name: "Mr. K.K. Hewavithana", role: "Additional General Manager (Mechanical)", image: "https://railway.gov.lk/web/images/key_position/mr_k_k_hewavithana.jpg" },
      { name: "Mr. P.D.S.B. Chandrasena", role: "Additional General Manager (Operation)", image: "https://railway.gov.lk/web/images/key_position/pdsbchandrasena.png" },
      { name: "Mrs. P.R.B. Sumangali", role: "Chief Finance Officer (Acting)", image: "https://railway.gov.lk/web/images/key_position/mrs.%20p.r.b.%20sumangali.jpg" },
      { name: "Mr. W.D.R. Pathmalal", role: "Deputy General Manager (Commercial)", image: "https://railway.gov.lk/web/images/key_position/w_d_r_pathamalal.jpg" },
      { name: "Mr. N.J. Indipolage", role: "Deputy General Manager (Transport)", image: "https://railway.gov.lk/web/images/key_position/n_j_indipolage.jpg" },
      { name: "Mr. R.M.N.K.S. Kanchana", role: "Deputy General Manager (Administration)", image: "https://railway.gov.lk/web/images/key_position/rmnks_kanchana.png" },
      { name: "Mr. K.P.C.P. Karunanayaka", role: "Deputy General Manager (Procurement)", image: "https://railway.gov.lk/web/images/key_position/k_p_c_p_karunanayaka.jpg" },
      { name: "Eng. K.G.S. Bandara", role: "Chief Mechanical Engineer", image: "https://railway.gov.lk/web/images/key_position/mr_k_g_s_bandara.jpg" },
      { name: "Eng. H.M.B. Sampath", role: "Chief Engineer (Motive Power)", image: "https://railway.gov.lk/web/images/key_position/h.m.b.%20sampath.jpg" },
      { name: "Eng. E.M.S.P.K. Deegala", role: "Chief Engineer (Way & Works)", image: "https://railway.gov.lk/web/images/key_position/mr_e_m_s_p_k_deegala.jpg" },
      { name: "Eng. V.C.D. Jayasekara", role: "Chief Engineer (Signal & Telecommunication)", image: "https://railway.gov.lk/web/images/key_position/vcdjayasekara.png" },
      { name: "Mr. P.A.D. Amila", role: "Chief Internal Auditor", image: "https://railway.gov.lk/web/images/key_position/pad_amila.png" },
      { name: "Mr. K.G. Anura Premarathna", role: "Superintendent (Railway Security Service)", image: "https://railway.gov.lk/web/images/key_position/k%20g%20anura%20premarathna.jpg" },
    ],
  },
];

const subDepartments = [
  "Chief Accountant’s Sub-Department",
  "Commercial Superintendent’s Sub-Department",
  "Chief Engineer – Motive Power",
  "Chief Engineer – Way & Works",
  "Chief Engineer – Signal & Telecommunication",
  "Superintendent of Railway Stores",
  "Chief Mechanical Engineer’s Sub-Department",
  "Transportation Sub-Department",
];

const units = [
  "Railway Protection Service Unit",
  "Principal Costing Officer’s Unit",
  "Sales & Marketing Unit",
  "Planning Unit",
  "Internal Audit Unit",
  "Sri Lanka Railway – German Technical Training Centre",
  "Railway Operations & Transport Management Institute",
];

function OverviewContent() {
  const facts = ["1,561 km railway tracks", "396 trains in operation", "67 long-distance services", "16 intercity services", "3.72 million passengers daily", "72 locomotives", "78 power sets", "565 passenger carriages", "17,634 employees"];
  return <>
    <p>Sri Lanka Railways (SLR) is a government department functioning under the Ministry of Transport. It is the country’s primary rail transport provider, offering both passenger and freight services. At its inception, railway operations focused mainly on freight transport, but today SLR operates primarily as a passenger-oriented service.</p>
    <p>SLR’s market share for passenger transport is approximately 6.0%, while goods transport accounts for about 0.7%. The railway plays a vital role in transporting daily commuters across the country.</p>
    <p>Sri Lanka Railways functions under the General Manager of Railways (GMR), who reports directly to the Secretary of the Ministry of Transport. The organization is structured into Sub-Departments and Units, each managed by departmental heads reporting to the General Manager.</p>
    <h3 className="about-subheading">Infrastructure &amp; resources</h3>
    <div className="about-fact-grid">{facts.map((fact) => <span key={fact}>{fact}</span>)}</div>
  </>;
}

function HistoryContent() {
  return <div className="about-history-list">{history.map((item) => <section className="about-history-item" key={item.title}>
    <div className="about-history-image"><Image src={item.image} alt={item.alt} width={600} height={450} unoptimized loading="lazy" /></div>
    <div><h3>{item.title}</h3>{item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
  </section>)}</div>;
}

function OfficialsContent() {
  return <div className="about-officials">{officials.map((group) => <section key={group.group}>
    <h3 className="about-subheading">{group.group}</h3>
    <div className="about-people-grid">{group.people.map((person) => <article className="about-person" key={person.name}>
      {person.image ? <div className="about-person-image"><Image src={person.image} alt={person.name} width={88} height={100} unoptimized loading="lazy" /></div> : <div className="about-person-initials" aria-hidden="true">{person.name.split(" ").filter(Boolean).slice(-2).map((word) => word[0]).join("")}</div>}
      <div><h4>{person.name}</h4><p>{person.role}</p></div>
    </article>)}</div>
  </section>)}</div>;
}

function OrganizationContent() {
  return <>
    <p>The General Manager serves as the Chief Executive Officer and Accounting Officer of the Railway Department and is directly responsible to the Ministry of Transport.</p>
    <h3 className="about-subheading">Senior executives supporting the General Manager</h3>
    <div className="about-structure-chips">{["Additional General Manager (Administration)", "Additional General Manager (Operations)", "Additional General Manager (Infrastructure)", "Additional General Manager (Technical)"].map((item) => <span key={item}>{item}</span>)}</div>
    <div className="about-organization-grid">
      <section><h3 className="about-subheading">Sub-Departments</h3><ol>{subDepartments.map((item) => <li key={item}>{item}</li>)}</ol></section>
      <section><h3 className="about-subheading">Units</h3><ol>{units.map((item) => <li key={item}>{item}</li>)}</ol></section>
    </div>
  </>;
}

export function AboutExplorer() {
  const [active, setActive] = useState(0);
  const section = sections[active];
  return <>
    <section className="about-hero" data-reveal><div className="about-hero-inner wrap"><div><div className="eyebrow"><span className="gold-dot" /> THE RAILWAY AND THE ISLAND</div><h1>About <em>Sri Lanka.</em></h1><p>More than tracks across an island: discover the people, history and network that connect Sri Lanka by rail.</p><span className="about-hero-rule">A SHARED JOURNEY SINCE 1864</span></div><div className="about-hero-image"><Image src="/images/Blue%20Train%20Over%20Misty%20Mountain%20Viaduct.png" alt="Sri Lankan railway travelling through misty green mountains" fill sizes="(max-width: 760px) 90vw, 42vw" /></div></div></section>
    <section className="about-layout wrap" data-reveal>
      <aside className="about-sidebar" aria-label="About sections"><span className="eyebrow">IN THIS SECTION</span>{sections.map((item, i) => <button key={item.title} className={active === i ? "active" : ""} aria-current={active === i ? "location" : undefined} onClick={() => setActive(i)}><ChevronRight size={14} />{item.title}</button>)}</aside>
      <article className="about-article about-active-content" key={section.title} aria-live="polite"><div className="eyebrow"><span>0{active + 1}</span> {section.kicker}</div><h2>{section.heading}</h2>
        {active === 0 && <OverviewContent />}
        {active === 1 && <HistoryContent />}
        {active === 2 && <><p>The vision and mission of Sri Lanka Railways guide its work connecting people and goods across the island.</p><div className="about-purpose-grid"><section><span>VISION</span><p>To be the most sought-after land transport provider in Sri Lanka, delivering exceptional value to all stakeholders.</p></section><section><span>MISSION</span><p>To provide a safe, reliable, and punctual rail transport system for passenger and goods transportation.</p></section></div></>}
        {active === 3 && <><p>Ministry leadership and railway management positions provided for Sri Lanka Railways.</p><OfficialsContent /></>}
        {active === 4 && <OrganizationContent />}
        {active === 5 && <><p>The railway network connects Sri Lankan communities through routes across coastal, northern, eastern, western and hill-country regions.</p><div className="about-network-image"><Image src="/images/railway_network_updated20141128.png" alt="Map of the Sri Lanka railway network" width={1400} height={900} sizes="(max-width: 760px) 90vw, 65vw" /></div><div className="about-network-lines">{["Main Line", "Coast Line", "Northern Line", "Batticaloa Line", "Trincomalee Line", "Puttalam Line", "Kelani Valley Line", "Matale Line", "Talaimannar Line"].map((line) => <span key={line}>{line}</span>)}</div><Link className="button button-outline" href="/stations">Explore railway stations <ArrowUpRight size={14} /></Link></>}
      </article>
    </section>
    <section className="discover-banner about-discover" data-reveal><Image src="/images/Sunrise%20Train%20Over%20Misty%20Viaduct.png" alt="Sunrise over a railway viaduct in Sri Lanka" fill sizes="100vw" /><div className="discover-overlay" /><div className="discover-content"><span className="eyebrow"><span className="gold-dot" /> DISCOVER</span><h2>See more of the island<br />from the <em>window seat.</em></h2><p>Plan a route through the landscapes and communities that make Sri Lanka special.</p><Link className="button button-light" href="/schedule">Explore railway journeys <ArrowUpRight size={15} /></Link></div></section>
    <section className="about-end"><div className="wrap"><TrainFront size={24} /><p>Explore the railway network, passenger services and travel information.</p><Link className="button button-light" href="/stations">Find a station <ArrowUpRight size={15} /></Link></div></section>
  </>;
}
