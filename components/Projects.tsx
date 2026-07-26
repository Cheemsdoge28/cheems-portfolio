import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GitHubIcon } from "./icons";

export default function Projects() {
  return (
    <section id="work" className="container-x scroll-mt-28 py-20">
      <SectionHeading index="03" label="Selected work" title="Things I've built" />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 90} className={project.featured ? "md:col-span-2" : ""}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex justify-center">
        <a
          href="https://github.com/Cheemsdoge28?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="pop-sm press inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-extrabold text-ink transition-colors hover:bg-sand"
        >
          <GitHubIcon className="h-4 w-4" />
          More on GitHub
        </a>
      </Reveal>
    </section>
  );
}
