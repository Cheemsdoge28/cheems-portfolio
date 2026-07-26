"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";
import Mascot from "./Mascot";
import { CloseIcon, DownloadIcon, GitHubIcon, MenuIcon } from "./icons";

const links = [
  { id: "about", href: "/#about", label: "About" },
  { id: "skills", href: "/#skills", label: "Skills" },
  { id: "work", href: "/#work", label: "Work" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [hovered, setHovered] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(
    null
  );
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);

      // active section = last one whose top has crossed the marker line
      const marker = window.innerHeight * 0.3;
      let current = "";
      for (const l of links) {
        const el = document.getElementById(l.id);
        if (el && el.getBoundingClientRect().top <= marker) current = l.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // slide the nav indicator to the hovered link, or the active section
  useEffect(() => {
    const target = hovered ?? active;
    const el = target ? linkRefs.current[target] : null;
    setIndicator(el ? { left: el.offsetLeft, width: el.offsetWidth } : null);
  }, [hovered, active]);

  useEffect(() => {
    const onResize = () => {
      const target = hovered ?? active;
      const el = target ? linkRefs.current[target] : null;
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [hovered, active]);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/85 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(36,32,28,0.12)]" : ""
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between md:h-20">
        <Link
          href="/"
          aria-label="Home"
          onClick={() => setMenuOpen(false)}
          className="press group flex shrink-0 items-center gap-2.5 transition-transform duration-300 hover:-translate-y-0.5"
        >
          <span className="pop-sm relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-sand transition-colors duration-300 group-hover:bg-teal-soft">
            <span
              className="halftone pointer-events-none absolute inset-0 text-teal opacity-0 transition-opacity duration-300 group-hover:opacity-40"
              aria-hidden="true"
            />
            <Mascot className="relative h-6 w-6" priority />
          </span>
          <span className="font-display text-lg">Ishan Bhat</span>
        </Link>

        <div
          className="relative hidden items-center gap-8 md:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              ref={(el) => {
                linkRefs.current[l.id] = el;
              }}
              onMouseEnter={() => setHovered(l.id)}
              data-active={active === l.id}
              className="text-sm font-bold text-ink-soft transition-colors hover:text-ink data-[active=true]:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1.5 h-0.5 rounded-full bg-clay transition-all duration-200 ease-out"
            style={
              indicator
                ? { left: indicator.left, width: indicator.width, opacity: 1 }
                : { left: 0, width: 0, opacity: 0 }
            }
          />
        </div>

        {/* desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/Ishan-Bhat-CV.pdf"
            download
            className="btn-sm pop-sm press inline-flex bg-teal text-cream transition-colors hover:bg-clay"
          >
            <DownloadIcon className="h-4 w-4" />
            CV
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sm pop-sm press inline-flex bg-teal-soft text-teal transition-colors hover:bg-sage"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
        </div>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="pop-sm press grid h-10 w-10 place-items-center rounded-xl bg-teal-soft text-teal md:hidden"
        >
          {menuOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* scroll progress */}
      <div className="h-0.5 w-full">
        <div
          className="scroll-progress h-full w-full bg-clay"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t-2 border-ink/10 bg-cream md:hidden"
        >
          <div className="container-x flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                data-active={active === l.id}
                className="rounded-xl px-3 py-3 font-display text-xl text-ink-soft transition-colors hover:bg-sand hover:text-ink data-[active=true]:text-clay"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-3">
              <a
                href="/Ishan-Bhat-CV.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="btn pop-sm press inline-flex flex-1 bg-teal text-cream transition-colors hover:bg-clay"
              >
                <DownloadIcon className="h-4 w-4" />
                CV
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="btn pop-sm press inline-flex flex-1 bg-teal-soft text-teal transition-colors hover:bg-sage"
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
