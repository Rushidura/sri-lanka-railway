"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Search, X } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["Passenger info", "/passenger-info"],
  ["Stations", "/stations"],
  ["Notices", "/notices"],
  ["Contact", "/contact"],
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInput = useRef<HTMLInputElement>(null);
  const searchForm = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (searchOpen) searchInput.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    // After a station search navigates, restore the compact navbar control.
    setSearchOpen(false);
    setSearchQuery("");
  }, [pathname]);

  const isActive = (href: string) => {
    const [path, fragment] = href.split("#");
    if (path !== pathname) return false;
    if (fragment) return hash === `#${fragment}`;
    if (path === "/passenger-info" && hash === "#help") return false;
    return true;
  };

  const renderLinks = () => nav.map(([label, href]) => (
    <Link key={href} href={href} aria-current={isActive(href) ? "page" : undefined}>{label}</Link>
  ));

  return <>
    <header className="site-header">
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Sri Lanka Railways home">
          <span className="brand-mark"><Image src="/images/railway-logo.png" alt="" width={42} height={52} /></span>
          <span className="brand-text">SRI LANKA<span>RAILWAYS</span></span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">{renderLinks()}</nav>
        <form ref={searchForm} className={`nav-search${searchOpen ? " is-open" : ""}`} role="search" action="/stations" onSubmit={event => {
          if (!searchQuery.trim()) event.preventDefault();
        }}>
          <label className="sr-only" htmlFor="nav-station-search">Search stations</label>
          {searchOpen && <input ref={searchInput} id="nav-station-search" name="q" type="search" value={searchQuery} onChange={event => setSearchQuery(event.target.value)} placeholder="Search stations" />}
          <button type="button" aria-label={searchQuery.trim() ? "Search stations" : searchOpen ? "Close station search" : "Open station search"} aria-expanded={searchOpen} onClick={() => {
            if (searchQuery.trim()) {
              searchForm.current?.requestSubmit();
            } else if (!searchOpen) setSearchOpen(true);
            else setSearchOpen(false);
          }}>{searchOpen && !searchQuery.trim() ? <X size={15} /> : <Search size={15} />}</button>
        </form>
        <details className="language-menu">
          <summary aria-label="Choose language">EN <ChevronDown size={14} /></summary>
          <div className="language-options">
            <a href="https://railway.gov.lk/web/index.php?lang=en" target="_blank" rel="noreferrer">English <span>EN</span></a>
            <a href="https://railway.gov.lk/web/index.php?lang=si" target="_blank" rel="noreferrer">සිංහල <span>SI</span></a>
            <a href="https://railway.gov.lk/web/index.php?lang=ta" target="_blank" rel="noreferrer">தமிழ் <span>TA</span></a>
          </div>
        </details>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span /><span /><span /></summary>
          <nav className="mobile-nav" aria-label="Mobile navigation">{renderLinks()}</nav>
        </details>
      </div>
    </header>
    {children}
    <SiteFooter />
  </>;
}
