import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-x scroll-mt-28 py-14 sm:py-20">
      <SectionHeading index="01" label="About" title="From web apps to bare metal" />

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-5">
        <Reveal variant="slash-l" className="lg:col-span-3">
          <div className="pop h-full rounded-3xl bg-paper p-6 sm:p-10">
            <p className="text-lg leading-relaxed">
              I work across the whole stack: responsive front-ends in{" "}
              <span className="font-semibold">React and Next.js</span>, typed APIs
              and server logic on <span className="font-semibold">Node.js</span>, and
              schemas that hold up in{" "}
              <span className="font-semibold">PostgreSQL</span>.
            </p>
            <p className="mt-5 leading-relaxed text-ink-soft">
              The other half of my work is embedded Linux. I wrote a native YouTube
              client that renders straight to the display over KMSDRM, and a Firefox
              environment tuned for ARM handhelds. Building for weak hardware forces
              you to debug properly and read other people&apos;s code, and that
              carries over to everything I do on the web.
            </p>
          </div>
        </Reveal>

        <Reveal variant="slash-r" delay={120} className="lg:col-span-2">
          <div className="pop flex h-full flex-col justify-between rounded-3xl bg-paper p-6 sm:p-8">
            <div>
              <span className="text-xs font-bold tracking-[0.14em] text-clay uppercase">
                Education
              </span>
              <p className="mt-4 font-display text-2xl leading-tight">
                {education.degree}
              </p>
              <p className="mt-2 text-sm text-ink-soft">{education.board}</p>
            </div>
            <div className="mt-8 flex items-end gap-6 border-t-2 border-ink/10 pt-6">
              <div>
                <p className="font-display text-3xl text-clay">{education.score}</p>
                <p className="text-[11px] font-semibold text-ink-soft uppercase">
                  aggregate
                </p>
              </div>
              <div>
                <p className="font-display text-3xl text-clay">{education.year}</p>
                <p className="text-[11px] font-semibold text-ink-soft uppercase">
                  class of
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
