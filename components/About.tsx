import { education } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const stats = [
  { value: "20", label: "Public repos" },
  { value: "2", label: "Free, open-source production apps" },
  { value: "24+", label: "Combined GitHub stars" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading title="About" />
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="neu h-full rounded-3xl p-8 sm:p-10">
              <p className="leading-relaxed text-muted">
                I work across the whole stack: responsive front-ends in{" "}
                <span className="text-ink">React and Next.js</span>, typed APIs and
                server logic on <span className="text-ink">Node.js</span>, and
                schemas that hold up in <span className="text-ink">PostgreSQL</span>.
              </p>
              <p className="mt-4 leading-relaxed text-muted">
                The other half of my work is embedded Linux. I wrote a native
                YouTube client that renders straight to the display over KMSDRM,
                and a Firefox environment tuned for ARM handhelds. Building for
                weak hardware forces you to debug properly and read other
                people&apos;s code, and that carries over to everything I do on
                the web.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-8 lg:col-span-2">
            <Reveal delay={100}>
              <div className="neu rounded-3xl p-8">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-center gap-4 text-left sm:flex-col sm:gap-0 sm:text-center"
                    >
                      <p className="w-14 shrink-0 text-2xl font-bold text-accent sm:w-auto">
                        {stat.value}
                      </p>
                      <p className="text-[11px] leading-tight text-muted sm:mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="neu rounded-3xl p-8">
                <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                  Education
                </p>
                <p className="mt-3 font-semibold">{education.degree}</p>
                <p className="mt-1 text-sm text-muted">{education.board}</p>
                <p className="mt-3 text-sm text-muted">
                  {education.year} · {education.score}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
