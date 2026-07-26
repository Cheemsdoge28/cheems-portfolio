import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { ArrowUpRightIcon } from "./icons";

export default function FeaturedCaseStudy({
  project,
}: Readonly<{ project: Project }>) {
  return (
    <article className="pop relative overflow-hidden rounded-3xl bg-paper">
      <div className="grid lg:grid-cols-2">
        {/* content */}
        <div className="relative order-2 p-8 sm:p-10 lg:order-1 lg:p-12">
          <span
            className="halftone halftone-fade-b pointer-events-none absolute inset-0 text-ink opacity-[0.04]"
            aria-hidden="true"
          />
          <div className="relative">
            <span className="pop-sm inline-flex rounded-full bg-teal px-4 py-1.5 text-xs font-bold tracking-[0.12em] text-cream uppercase">
              Featured case study
            </span>

            <h3 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              {project.caseHook ?? project.description}
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {project.tags.map((t) => (
                <li
                  key={t}
                  className="pop-sm rounded-full bg-teal-soft px-3 py-1 text-xs font-bold text-teal"
                >
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.caseStudy && (
                <Link
                  href={project.caseStudy}
                  className="btn pop-sm press inline-flex bg-teal text-cream transition-colors hover:bg-clay"
                >
                  Read the case study
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Link>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn pop-sm press inline-flex bg-teal-soft text-teal transition-colors hover:bg-sage"
                >
                  Live demo
                  <ArrowUpRightIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* preview: framed screenshot on a teal mat (no cropping) */}
        <div className="relative order-1 flex items-center justify-center overflow-hidden border-b-2 border-ink/10 bg-teal p-6 sm:p-8 lg:order-2 lg:border-b-0 lg:border-l-2">
          <span
            className="halftone pointer-events-none absolute inset-0 text-cream opacity-[0.06]"
            aria-hidden="true"
          />
          {project.preview && (
            <Link
              href={project.caseStudy ?? "#"}
              aria-label={`Open the ${project.title} case study`}
              className="group pop-sm relative block w-full overflow-hidden rounded-2xl bg-paper"
            >
              <div className="flex items-center gap-1.5 border-b-2 border-ink/10 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-clay" />
                <span className="h-2.5 w-2.5 rounded-full bg-sand-deep" />
                <span className="h-2.5 w-2.5 rounded-full border-2 border-ink/20" />
                <span className="ml-2 truncate text-[10px] font-bold text-ink-soft">
                  drisco-redesign-demo.vercel.app
                </span>
              </div>
              <div className="relative overflow-hidden">
                <Image
                  src={project.preview}
                  alt={`${project.title} homepage preview`}
                  width={1440}
                  height={960}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-ink/45 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide text-cream uppercase">
                    Open case study
                    <ArrowUpRightIcon className="h-3.5 w-3.5" />
                  </span>
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
