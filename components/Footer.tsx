import Link from "next/link";
import { profile } from "@/lib/data";
import Mascot from "./Mascot";
import { ArrowUpRightIcon } from "./icons";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

const elsewhere = [
  { href: profile.github, label: "GitHub", external: true },
  { href: `mailto:${profile.email}`, label: "Email", external: false },
  { href: "/Ishan-Bhat-CV.pdf", label: "Download CV", external: false },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden border-t-2 border-ink/10 bg-paper">
      <span
        className="halftone halftone-fade-b pointer-events-none absolute inset-0 text-ink opacity-[0.04]"
        aria-hidden="true"
      />
      {/* oversized mascot watermark */}
      <span
        className="pointer-events-none absolute -right-8 -bottom-12 opacity-[0.05]"
        aria-hidden="true"
      >
        <Mascot className="h-64 w-64" />
      </span>

      <div className="relative container-x py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="pop-sm grid h-10 w-10 place-items-center rounded-xl bg-sand">
                <Mascot className="h-6 w-6" />
              </span>
              <span className="font-display text-xl">{profile.name}</span>
            </div>
            <p className="mt-5 max-w-xs leading-relaxed text-ink-soft">
              Full-stack developer and embedded Linux engineer, open to
              internships and freelance work, remote or from {profile.location}.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="link-slash mt-5 inline-block font-display text-lg text-clay"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.14em] text-ink-soft uppercase">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-bold">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="link-slash text-ink-soft transition-colors hover:text-ink"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.14em] text-ink-soft uppercase">
              Elsewhere
            </h3>
            <ul className="mt-5 space-y-3 text-sm font-bold">
              {elsewhere.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="link-slash inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-ink"
                  >
                    {l.label}
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t-2 border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} {profile.name} · Built with Next.js &amp;
            TypeScript · {profile.location}
          </p>
          <a
            href="#top"
            className="press inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-ink-soft uppercase transition-colors hover:text-ink"
          >
            Back to top{" "}
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
