import Link from "next/link";
import type { Project } from "@/lib/data";
import Mascot from "./Mascot";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";

// literal classes so Tailwind's JIT keeps them (no dynamic string building)
const surfaceClass: Record<string, string> = {
  paper: "bg-paper",
  sand: "bg-sand",
  cream: "bg-cream",
};

function Tag({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <li className="pop-sm rounded-full bg-teal-soft px-3 py-1 text-xs font-bold text-teal">
      {children}
    </li>
  );
}

function Links({ project }: Readonly<{ project: Project }>) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-2.5">
      {project.caseStudy && (
        <Link
          href={project.caseStudy}
          className="btn-sm pop-sm press inline-flex bg-teal text-cream transition-colors hover:bg-clay"
        >
          Read case study
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </Link>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sm pop-sm press inline-flex bg-clay text-cream transition-colors hover:bg-teal"
        >
          Live demo
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sm pop-sm press inline-flex bg-teal text-cream transition-colors hover:bg-clay"
        >
          <GitHubIcon className="h-4 w-4" />
          Code
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: Readonly<{ project: Project }>) {
  const featured = project.featured;

  return (
    <article
      className={`pop pop-hover relative flex h-full flex-col overflow-hidden rounded-3xl ${
        surfaceClass[project.surface] ?? "bg-cream"
      } ${featured ? "p-6 sm:p-11" : "p-6 sm:p-9"}`}
    >
      <span
        className="halftone pointer-events-none absolute inset-0 text-ink opacity-[0.05]"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-4 -bottom-4 opacity-[0.07]"
        aria-hidden="true"
      >
        <Mascot className="h-28 w-28" />
      </span>

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="text-xs font-bold tracking-[0.12em] text-ink-soft uppercase">
            {project.kicker}
          </span>
          <span className="shrink-0 text-xs font-bold text-ink-soft">
            {project.period}
          </span>
        </div>

        <h3 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
          {project.title}
        </h3>

        {project.badge && (
          <span className="pop-sm mt-3 inline-flex self-start rounded-full bg-cream px-3 py-1 text-[11px] font-bold tracking-wide text-ink uppercase">
            {project.badge}
          </span>
        )}

        {project.problem && (
          <div className="mt-4 border-l-2 border-clay/50 pl-4">
            <span className="text-[11px] font-bold tracking-[0.14em] text-clay uppercase">
              The problem
            </span>
            <p className="mt-1 font-medium text-ink">{project.problem}</p>
          </div>
        )}

        <p
          className={`mt-4 flex-1 leading-relaxed text-ink-soft ${
            featured ? "max-w-2xl text-lg" : ""
          }`}
        >
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>

        <Links project={project} />
      </div>
    </article>
  );
}
