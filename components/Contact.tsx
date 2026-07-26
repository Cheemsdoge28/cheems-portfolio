import { profile } from "@/lib/data";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import {
  ArrowUpRightIcon,
  DownloadIcon,
  GitHubIcon,
  MailIcon,
  PhoneIcon,
} from "./icons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
    surface: "bg-paper",
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: PhoneIcon,
    surface: "bg-paper",
  },
  {
    label: "GitHub",
    value: `@${profile.githubHandle}`,
    href: profile.github,
    icon: GitHubIcon,
    surface: "bg-paper",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="container-x scroll-mt-28 py-14 sm:py-20">
      <SectionHeading index="04" label="Contact" title="Let's work together" />

      <Reveal>
        <div className="pop relative overflow-hidden rounded-3xl bg-teal p-6 text-cream sm:p-12">
          <span
            className="halftone pointer-events-none absolute inset-0 text-cream opacity-10"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="max-w-2xl font-display text-2xl leading-tight sm:text-3xl">
              I&apos;m looking for a full-stack internship, and I take on freelance
              work too, remote or from {profile.location}.
            </p>

            <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4">
              {channels.map((c) => {
                const Icon = c.icon;
                const external = c.href.startsWith("http");
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`pop pop-hover flex min-w-0 items-center gap-3.5 rounded-2xl ${c.surface} p-4 text-ink sm:gap-4 sm:p-5`}
                  >
                    <span className="pop-sm grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sand sm:h-11 sm:w-11">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-bold text-ink-soft uppercase">
                        {c.label}
                      </span>
                      <span className="block truncate font-bold">{c.value}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <a
              href="/Ishan-Bhat-CV.pdf"
              download
              className="btn pop-sm press mt-8 inline-flex bg-clay text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              <DownloadIcon className="h-4 w-4" />
              Download CV (PDF)
              <ArrowUpRightIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
