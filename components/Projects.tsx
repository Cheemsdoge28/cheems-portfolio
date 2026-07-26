import { projects } from "@/lib/data";
import FeaturedCaseStudy from "./FeaturedCaseStudy";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { GitHubIcon } from "./icons";

const CASE_STUDY_SLUG = "drisco";

export default function Projects() {
  const caseStudy = projects.find((p) => p.slug === CASE_STUDY_SLUG);
  const rest = projects.filter((p) => p.slug !== CASE_STUDY_SLUG);

  return (
    <section id="work" className="container-x scroll-mt-28 py-14 sm:py-20">
      <SectionHeading index="03" label="Selected work" title="Things I've built" />

      {caseStudy && (
        <Reveal className="mb-6">
          <FeaturedCaseStudy project={caseStudy} />
        </Reveal>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {rest.map((project, i) => (
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
          className="btn pop-sm press inline-flex bg-teal-soft text-teal transition-colors hover:bg-sage"
        >
          <GitHubIcon className="h-4 w-4" />
          More on GitHub
        </a>
      </Reveal>
    </section>
  );
}
