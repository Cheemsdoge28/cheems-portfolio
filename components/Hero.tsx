import Image from "next/image";
import { profile } from "@/lib/data";
import { DownloadIcon, GitHubIcon, MailIcon, PinIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="flex min-h-screen items-center px-4 pt-28 pb-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 lg:flex-row lg:gap-20">
        {/* logo medallion */}
        <div className="neu flex h-44 w-44 shrink-0 items-center justify-center rounded-full sm:h-56 sm:w-56">
          <div className="neu-inset flex h-32 w-32 items-center justify-center rounded-full sm:h-40 sm:w-40">
            <Image
              src="/images/logo.svg"
              alt="Ishan Bhat logo"
              width={96}
              height={96}
              priority
              className="h-20 w-20 sm:h-24 sm:w-24"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-semibold text-accent sm:text-xl">
            {profile.role}
          </p>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            {profile.blurb}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="neu-btn rounded-full px-7 py-3 text-sm font-semibold"
            >
              View projects
            </a>
            <a
              href="/Ishan-Bhat-CV.pdf"
              download
              className="neu-btn flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-accent"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-btn flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="neu-btn flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold"
            >
              <MailIcon className="h-4 w-4" />
              Email me
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-xs text-muted">
            <PinIcon className="h-4 w-4" />
            {profile.location} · open to internships and freelance work
          </p>
        </div>
      </div>
    </section>
  );
}
