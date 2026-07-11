import { projects } from "@/lib/data";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading title="Projects" />
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={(i % 2) * 100}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-card group flex h-full flex-col rounded-3xl p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-muted">
                      {project.period}
                    </p>
                  </div>
                  <span className="neu-inset-sm flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted transition-colors group-hover:text-accent">
                    <ArrowUpRightIcon />
                  </span>
                </div>

                {project.highlight && (
                  <span className="neu-inset-sm mt-4 self-start rounded-full px-3 py-1 text-[11px] font-semibold text-accent">
                    {project.highlight}
                  </span>
                )}

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="neu-inset-sm rounded-full px-3 py-1 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/Cheemsdoge28?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="neu-btn flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
            >
              <GitHubIcon className="h-4 w-4" />
              More on GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
