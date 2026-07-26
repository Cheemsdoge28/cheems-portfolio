import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="container-x scroll-mt-28 py-14 sm:py-20">
      <SectionHeading index="01" label="About" title="From web apps to bare metal" />

      <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
        <Reveal variant="slash-l">
          <div className="pop h-full rounded-3xl bg-paper p-6 sm:p-10">
            <span className="text-xs font-bold tracking-[0.14em] text-clay uppercase">
              The web half
            </span>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Full-stack web
            </h3>
            <p className="mt-4 text-lg leading-relaxed">
              I work across the whole stack: responsive front-ends in{" "}
              <span className="font-semibold">React and Next.js</span>, typed APIs
              and server logic on <span className="font-semibold">Node.js</span>, and
              schemas that hold up in{" "}
              <span className="font-semibold">PostgreSQL</span>.
            </p>
          </div>
        </Reveal>

        <Reveal variant="slash-r" delay={120}>
          <div className="pop h-full rounded-3xl bg-paper p-6 sm:p-10">
            <span className="text-xs font-bold tracking-[0.14em] text-clay uppercase">
              The bare-metal half
            </span>
            <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
              Embedded Linux
            </h3>
            <p className="mt-4 leading-relaxed text-ink-soft">
              The other half of my work is embedded Linux. I wrote a native YouTube
              client that renders straight to the display over KMSDRM, and a Firefox
              environment tuned for ARM handhelds. Building for weak hardware forces
              you to debug properly and read other people&apos;s code, and that
              carries over to everything I do on the web.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
