import { profile } from "@/lib/data";
import Mascot from "./Mascot";
import Reveal from "./Reveal";
import { ArrowUpRightIcon, DownloadIcon, MailIcon, PinIcon } from "./icons";

const stats = [
  { value: "6", label: "shipped projects" },
  { value: "2", label: "live in production" },
  { value: "16★", label: "on fire4arkos" },
];

export default function Hero() {
  return (
    <section id="top" className="container-x pt-10 pb-14 sm:pt-20 sm:pb-20">
      <div className="grid items-stretch gap-5 sm:gap-6 lg:grid-cols-[1.55fr_1fr]">
        {/* main card */}
        <Reveal className="pop relative flex flex-col justify-between overflow-hidden rounded-3xl bg-paper p-6 sm:p-10 md:p-12">
          <span
            className="halftone halftone-fade-b pointer-events-none absolute inset-0 text-ink opacity-[0.06]"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="pop-sm stamp inline-flex rounded-full bg-teal px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-cream uppercase">
              Full-stack developer
            </span>

            <h1 className="mt-6 font-display text-6xl leading-[0.95] tracking-[-0.02em] sm:text-7xl md:text-8xl">
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

          <div className="relative mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
            {/* primary */}
            <a
              href="#work"
              className="btn pop-sm press inline-flex w-full bg-teal text-cream transition-colors hover:bg-clay sm:w-auto"
            >
              View work
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
            {/* secondary */}
            <a
              href="/Ishan-Bhat-CV.pdf"
              download
              className="btn pop-sm press inline-flex w-full bg-teal-soft text-teal transition-colors hover:bg-sage sm:w-auto"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
            {/* tertiary */}
            <a
              href={`mailto:${profile.email}`}
              className="link-slash inline-flex w-full items-center justify-center gap-1.5 py-1.5 text-sm font-bold text-ink-soft transition-colors hover:text-ink sm:w-auto sm:justify-start sm:py-0"
            >
              <MailIcon className="h-4 w-4" />
              or email me
            </a>
          </div>
        </Reveal>

        {/* side column: mascot feature panel + stats */}
        <div className="flex flex-col gap-6">
          <Reveal
            variant="slash-r"
            delay={120}
            className="pop relative flex flex-1 flex-col overflow-hidden rounded-3xl bg-teal p-7 text-cream"
          >
            <span
              className="halftone pointer-events-none absolute inset-0 text-cream opacity-[0.07]"
              aria-hidden="true"
            />

            <div className="relative flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cream/25 px-3 py-1 text-[11px] font-bold tracking-wide text-cream/90 uppercase">
                <PinIcon className="h-3.5 w-3.5" />
                Pune, IN
              </span>
              <span className="font-display text-sm text-teal-soft">
                @{profile.githubHandle}
              </span>
            </div>

            <div className="relative flex flex-1 items-center justify-center py-10">
              {/* cream halftone that concentrates behind the mark and fades out */}
              <span
                className="halftone pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 text-cream opacity-30 sm:h-80 sm:w-80"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(circle, #000 18%, transparent 68%)",
                  maskImage:
                    "radial-gradient(circle, #000 18%, transparent 68%)",
                }}
                aria-hidden="true"
              />
              {/* faint emblem ring for containment */}
              <span
                className="pointer-events-none absolute h-52 w-52 rounded-full border border-cream/12 sm:h-60 sm:w-60"
                aria-hidden="true"
              />
              <Mascot
                light
                priority
                className="float relative h-32 w-32 sm:h-40 sm:w-40"
              />
            </div>

            <p className="relative text-center text-sm font-semibold tracking-wide text-cream/85">
              Ships web apps &nbsp;·&nbsp; writes bare-metal C++
            </p>
          </Reveal>

          <Reveal delay={200} className="pop grid grid-cols-3 rounded-3xl bg-paper">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-3 py-6 text-center ${i < 2 ? "border-r-2 border-ink/10" : ""}`}
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
