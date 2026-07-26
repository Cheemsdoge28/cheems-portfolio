import { skillGroups } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const cardSurface = "bg-paper";

export default function Skills() {
  return (
    <section id="skills" className="container-x scroll-mt-28 py-14 sm:py-20">
      <SectionHeading index="02" label="Skills" title="What I work with" />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={(i % 2) * 100}>
            <div className={`pop h-full rounded-3xl ${cardSurface} p-6 sm:p-8`}>
              <h3 className="font-display text-2xl">{group.label}</h3>
              <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="pop-sm rounded-full bg-sand px-4 py-2 text-sm font-bold text-ink"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
