import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading title="Skills" />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <div className="neu h-full rounded-3xl p-8">
                <h3 className="text-sm font-semibold tracking-widest text-accent uppercase">
                  {group.label}
                </h3>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="neu-inset-sm rounded-full px-4 py-2 text-sm text-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
