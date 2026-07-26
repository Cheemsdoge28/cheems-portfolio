"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

const variants = {
  rise: "reveal",
  "slash-l": "reveal-slash-l",
  "slash-r": "reveal-slash-r",
} as const;

export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "rise",
}: Readonly<{
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: keyof typeof variants;
}>) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`${variants[variant]} ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
