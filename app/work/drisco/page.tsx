import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { ArrowLeftIcon, ArrowUpRightIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "DRISCO Redesign Case Study | Ishan Bhat",
  description:
    "An independent, unaffiliated redesign concept for a newly launched Indian beverage brand. A study in surfacing a product's strengths through a reusable design system and restrained motion.",
};

const LIVE = "https://drisco-redesign-demo.vercel.app";

const goals = [
  "Surface the product's biggest strengths within the first screen.",
  'Make "Indian drinks, made better." the centre of the story.',
  "Reduce unnecessary purchase friction.",
  "Build a reusable design system, not isolated pages.",
];

const changes = [
  {
    n: "01",
    title: "Information hierarchy",
    body: "Health benefits appear immediately. You understand what DRISCO is before you're asked to buy it.",
  },
  {
    n: "02",
    title: "Product-first",
    body: "Products are no longer buried. The shopping journey begins much earlier on the page.",
  },
  {
    n: "03",
    title: "Indian identity",
    body: "Rather than another generic wellness brand, it leans into familiar Indian beverages, shown through a modern visual language.",
  },
  {
    n: "04",
    title: "Reduced friction",
    body: "I removed mandatory sign-in and intrusive lead capture from the purchase journey. If someone wants a drink, let them buy a drink.",
  },
];

const swatches = [
  { name: "Cream", hex: "#fdf6ec" },
  { name: "Ink", hex: "#262738" },
  { name: "Plum", hex: "#3b3d8a" },
  { name: "Gold", hex: "#f2ce56" },
  { name: "Raspberry", hex: "#b3446a" },
  { name: "Moss", hex: "#2e7d6c" },
];

const systemParts = [
  "Typography scale",
  "Colour tokens",
  "Hard-offset shadows",
  "Buttons",
  "Product cards",
  "Chips",
  "Page transitions",
];

function H({ index, title }: Readonly<{ index: string; title: string }>) {
  return (
    <Reveal className="mb-8 flex flex-col gap-2">
      <span className="flex items-center gap-3 text-sm font-extrabold tracking-[0.14em] text-ink-soft uppercase">
        <span className="font-display text-clay">{index}</span>
      </span>
      <h2 className="font-display text-3xl leading-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

export default function DriscoCaseStudy() {
  return (
    <>
      <article className="container-x pt-10 pb-16">
        <Reveal>
          <Link
            href="/#work"
            className="pop-sm press inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2 text-sm font-extrabold text-ink transition-colors hover:bg-sand"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to work
          </Link>
        </Reveal>

        {/* header */}
        <header className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-stretch">
          <Reveal className="pop relative overflow-hidden rounded-3xl bg-paper p-8 sm:p-12">
            <span
              className="halftone halftone-fade-b pointer-events-none absolute inset-0 text-ink opacity-[0.06]"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="pop-sm inline-flex rounded-full bg-teal px-4 py-1.5 text-xs font-extrabold tracking-[0.12em] text-cream uppercase">
                Independent redesign · concept
              </span>
              <h1 className="mt-6 font-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
                DRISCO
              </h1>
              <p className="mt-3 font-display text-2xl text-ink-soft sm:text-3xl">
                Independent ecommerce redesign
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-ink-soft">
                A self-initiated redesign of a newly launched Indian functional
                beverage brand. Not affiliated with, commissioned by, or endorsed
                by DRISCO. Just an exercise in giving a product I liked a
                clearer story.
              </p>
            </div>
          </Reveal>

          <Reveal variant="slash-r" delay={120}>
            <dl className="pop grid h-full grid-cols-2 content-center gap-y-7 rounded-3xl bg-paper p-8">
              {[
                ["Role", "Product & frontend"],
                ["Type", "Self-initiated"],
                ["Year", "2026"],
                ["Stack", "Next.js · React 19"],
                ["Scope", "Full FE prototype"],
                ["Status", "Live demo"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[11px] font-extrabold tracking-[0.12em] text-clay uppercase">
                    {k}
                  </dt>
                  <dd className="mt-1 font-display text-lg leading-tight">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </header>

        {/* live embed */}
        <section className="mt-16">
          <H index="00" title="The live prototype" />
          <Reveal className="pop overflow-hidden rounded-3xl bg-paper">
            <div className="flex items-center gap-2 border-b-2 border-ink/10 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-clay" />
              <span className="h-3 w-3 rounded-full bg-sand-deep" />
              <span className="h-3 w-3 rounded-full border-2 border-ink/20" />
              <span className="ml-3 truncate text-xs font-bold text-ink-soft">
                drisco-redesign-demo.vercel.app
              </span>
              <a
                href={LIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="pop-sm press ml-auto inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-xs font-extrabold text-cream transition-colors hover:bg-clay"
              >
                Open live
                <ArrowUpRightIcon className="h-3.5 w-3.5" />
              </a>
            </div>
            <a
              href={LIVE}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block max-h-[560px] overflow-hidden bg-paper"
            >
              <Image
                src="/images/drisco-preview.jpg"
                alt="Screenshot of the DRISCO redesign homepage"
                width={1440}
                height={960}
                className="w-full"
              />
              <span className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-ink/60 via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="pop-sm inline-flex items-center gap-2 rounded-full bg-clay px-6 py-3 text-sm font-extrabold text-cream">
                  Open the live demo
                  <ArrowUpRightIcon className="h-4 w-4" />
                </span>
              </span>
            </a>
          </Reveal>
          <p className="mt-3 text-center text-xs text-ink-soft">
            A live prototype. The demo blocks in-page framing, so this is a preview
            that opens the{" "}
            <a href={LIVE} target="_blank" rel="noopener noreferrer" className="link-slash font-bold text-ink">
              real, interactive site
            </a>{" "}
            in a new tab.
          </p>
        </section>

        {/* the story */}
        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal className="pop rounded-3xl bg-paper p-8 sm:p-10">
            <H index="01" title="The story" />
            <div className="space-y-4 leading-relaxed text-ink-soft">
              <p>
                I wasn&apos;t looking for a redesign project. While browsing Reddit,
                I came across the founder of DRISCO openly asking the community for
                feedback on the product, packaging and website.
              </p>
              <p>
                A pattern emerged. People weren&apos;t just talking about the drinks.
                They were talking about friction, confusing messaging, and a site
                that didn&apos;t quite communicate what made the brand different. So
                I asked myself a simple question:
              </p>
              <p className="font-display text-xl text-ink">
                How would I present the exact same product if I were responsible for
                its digital experience?
              </p>
            </div>
          </Reveal>

          <Reveal variant="slash-r" delay={100} className="pop rounded-3xl bg-paper p-8 sm:p-10">
            <H index="02" title="The challenge" />
            <p className="leading-relaxed text-ink-soft">
              The goal wasn&apos;t to replace the brand. It was to amplify it: to
              preserve DRISCO&apos;s identity while making its strongest
              differentiators impossible to miss.
            </p>
            <ul className="mt-6 space-y-3">
              {goals.map((g, i) => (
                <li key={g} className="row-cascade flex gap-3" style={{ "--i": i } as React.CSSProperties}>
                  <span className="mt-0.5 font-display text-clay">→</span>
                  <span className="text-ink-soft">{g}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* philosophy */}
        <section className="mt-16">
          <Reveal className="pop relative overflow-hidden rounded-3xl bg-teal p-8 text-cream sm:p-12">
            <span className="halftone pointer-events-none absolute inset-0 text-cream opacity-10" aria-hidden="true" />
            <p className="relative max-w-3xl font-display text-2xl leading-snug sm:text-3xl">
              I didn&apos;t want another sterile ecommerce site, or a cinematic one
              full of scroll-locking effects. I wanted something in between: a site
              with personality that never gets in the user&apos;s way. Motion exists
              to communicate. Components feel tactile.
            </p>
          </Reveal>
        </section>

        {/* what changed */}
        <section className="mt-16">
          <H index="03" title="What changed" />
          <div className="grid gap-6 sm:grid-cols-2">
            {changes.map((c, i) => (
              <Reveal key={c.n} delay={(i % 2) * 90}>
                <div className="pop pop-hover h-full rounded-3xl bg-paper p-8">
                  <span className="font-display text-4xl text-clay">{c.n}</span>
                  <h3 className="mt-3 font-display text-2xl">{c.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* design system */}
        <section className="mt-16">
          <H index="04" title="A reusable design system" />
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <Reveal className="pop rounded-3xl bg-paper p-8 sm:p-10">
              <p className="leading-relaxed text-ink-soft">
                Rather than isolated screens, I built a system: typography, colour
                tokens, shadows, and components that stay consistent across future
                pages and campaigns. This portfolio you&apos;re reading borrows the
                same design language: warm neutrals, ink, and the hard-offset shadow
                that makes every surface feel pressable.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {systemParts.map((p) => (
                  <li key={p} className="pop-sm rounded-full bg-sand px-4 py-1.5 text-sm font-bold">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal variant="slash-r" delay={100} className="pop rounded-3xl bg-paper p-8 sm:p-10">
              <h3 className="font-display text-2xl">Colour tokens</h3>
              <div className="mt-6 grid grid-cols-3 gap-4">
                {swatches.map((s) => (
                  <div key={s.name}>
                    <span
                      className="pop-sm block h-16 rounded-2xl"
                      style={{ backgroundColor: s.hex }}
                    />
                    <p className="mt-2 text-sm font-bold">{s.name}</p>
                    <p className="font-mono text-[11px] text-ink-soft">{s.hex}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* outcome */}
        <section className="mt-16">
          <Reveal className="pop rounded-3xl bg-paper p-8 sm:p-12">
            <H index="05" title="Outcome" />
            <p className="max-w-2xl leading-relaxed text-ink-soft">
              A fully functional frontend prototype covering the homepage, product
              pages, a comparison section, an FAQ, and the shopping flow, all
              responsive. It became one of my favourite projects because it
              wasn&apos;t about making something prettier.
            </p>
            <p className="mt-8 max-w-2xl font-display text-2xl leading-snug sm:text-3xl">
              &ldquo;I didn&apos;t redesign the site because it looked outdated. I
              redesigned it because I believed the product deserved a clearer
              story.&rdquo;
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={LIVE}
                target="_blank"
                rel="noopener noreferrer"
                className="pop-sm press inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-extrabold text-cream transition-colors hover:bg-clay"
              >
                Explore the live demo
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <Link
                href="/#work"
                className="pop-sm press inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-extrabold text-ink transition-colors hover:bg-sand"
              >
                <ArrowLeftIcon className="h-4 w-4" />
                More projects
              </Link>
            </div>
          </Reveal>
        </section>
      </article>
      <Footer />
    </>
  );
}
