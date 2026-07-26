"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import Mascot from "./Mascot";
import { DownloadIcon } from "./icons";

const links = [
  { id: "work", href: "/#work", label: "Work" },
  { id: "about", href: "/#about", label: "About" },
  { id: "skills", href: "/#skills", label: "Skills" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 12);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

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

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-active={active === l.id}
              className="link-slash text-sm font-bold text-ink-soft transition-colors hover:text-ink data-[active=true]:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Ishan-Bhat-CV.pdf"
            download
            className="pop-sm press hidden items-center gap-2 rounded-full bg-teal px-5 py-2.5 text-sm font-bold text-cream transition-colors hover:bg-clay sm:inline-flex"
          >
            <DownloadIcon className="h-4 w-4" />
            CV
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pop-sm press rounded-full bg-teal-soft px-5 py-2.5 text-sm font-bold text-teal transition-colors hover:bg-sage"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* scroll progress */}
      <div className="h-0.5 w-full">
        <div
          className="scroll-progress h-full w-full bg-clay"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </header>
  );
}
