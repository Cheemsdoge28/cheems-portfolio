import { profile } from "@/lib/data";
import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, DownloadIcon, MailIcon } from "./icons";

const stats = [
  { value: "6", label: "shipped projects" },
  { value: "2", label: "live in production" },
  { value: "16★", label: "on fire4arkos" },
];

export default function Hero() {
  return (
    <section className="container-x pt-14 pb-20 sm:pt-20">
      <div className="grid items-stretch gap-6 lg:grid-cols-[1.55fr_1fr]">
        {/* main card */}
        <Reveal className="pop relative flex flex-col justify-between overflow-hidden rounded-3xl bg-paper p-7 sm:p-10 md:p-12">
          <span
            className="halftone halftone-fade-b pointer-events-none absolute inset-0 text-ink opacity-[0.06]"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="pop-sm stamp inline-flex rounded-full bg-teal px-4 py-1.5 text-xs font-extrabold tracking-[0.12em] text-cream uppercase">
              Full-stack developer
            </span>

            <h1 className="mt-6 font-display text-5xl leading-[0.98] tracking-[-0.02em] sm:text-6xl md:text-7xl">
              Ishan Bhat
            </h1>
            <p className="mt-4 font-display text-2xl leading-tight text-ink-soft sm:text-3xl">
              I build <span className="marker text-ink">full-stack</span> web apps,
              and software for bare metal.
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
              {profile.blurb}
            </p>
          </div>

          <div className="relative mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="pop-sm press inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-extrabold text-cream transition-colors hover:bg-clay"
            >
              View work
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            <a
              href="/Ishan-Bhat-CV.pdf"
              download
              className="pop-sm press inline-flex items-center gap-2 rounded-full bg-clay px-7 py-3.5 text-sm font-extrabold text-cream transition-colors hover:bg-ink"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="pop-sm press inline-flex items-center gap-2 rounded-full bg-sand px-7 py-3.5 text-sm font-extrabold text-ink transition-colors hover:bg-sand-deep"
            >
              <MailIcon className="h-4 w-4" />
              Email
            </a>
          </div>
        </Reveal>

        {/* side column: mascot medallion + stats */}
        <div className="flex flex-col gap-6">
          <Reveal
            variant="slash-r"
            delay={120}
            className="pop relative flex flex-1 items-center justify-center overflow-hidden rounded-3xl bg-paper p-8"
          >
            <span
              className="halftone pointer-events-none absolute inset-0 text-ink opacity-10"
              aria-hidden="true"
            />
            <div className="pop relative grid h-40 w-40 place-items-center rounded-full bg-paper sm:h-48 sm:w-48">
              <Mascot className="h-24 w-24 sm:h-28 sm:w-28" priority />
            </div>
            <span className="pop-sm stamp absolute right-5 top-5 rotate-6 rounded-full bg-teal px-3 py-1 text-[11px] font-extrabold tracking-wide text-cream uppercase">
              Pune, IN
            </span>
          </Reveal>

          <Reveal delay={200} className="pop grid grid-cols-3 rounded-3xl bg-paper">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-6 text-center ${i < 2 ? "border-r-2 border-ink/15" : ""}`}
              >
                <p className="font-display text-3xl text-clay">{s.value}</p>
                <p className="mt-1 text-[11px] leading-tight font-semibold text-ink-soft">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
