"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/lib/data";
import Mascot from "./Mascot";
import { DownloadIcon } from "./icons";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_0_rgba(38,39,56,1)]" : ""
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between md:h-20">
        <Link
          href="/"
          aria-label="Home"
          className="press flex shrink-0 items-center gap-2.5 transition-transform duration-300 hover:-rotate-2"
        >
          <span className="pop-sm grid h-10 w-10 place-items-center rounded-xl bg-sand">
            <Mascot className="h-6 w-6" priority />
          </span>
          <span className="font-display text-lg">Ishan Bhat</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="link-slash text-sm font-bold text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/Ishan-Bhat-CV.pdf"
            download
            className="pop-sm press hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-extrabold text-cream transition-colors hover:bg-clay sm:inline-flex"
          >
            <DownloadIcon className="h-4 w-4" />
            CV
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="pop-sm press rounded-full bg-paper px-5 py-2.5 text-sm font-extrabold text-ink transition-colors hover:bg-sand"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
