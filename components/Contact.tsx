import { profile } from "@/lib/data";
import { DownloadIcon, GitHubIcon, MailIcon, PhoneIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: MailIcon,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: PhoneIcon,
  },
  {
    label: "GitHub",
    value: `@${profile.githubHandle}`,
    href: profile.github,
    icon: GitHubIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading title="Contact" />
        </Reveal>

        <Reveal>
          <div className="neu rounded-3xl p-8 sm:p-12">
            <p className="max-w-2xl text-muted">
              I&apos;m looking for a full-stack internship and also take on
              freelance work, remote or from {profile.location}. Email is the
              fastest way to reach me.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {channels.map((channel) => {
                const Icon = channel.icon;
                const external = channel.href.startsWith("http");
                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="neu-btn flex items-center gap-4 rounded-2xl p-5"
                  >
                    <span className="neu-inset-sm flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-accent">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted">
                        {channel.label}
                      </span>
                      <span className="block truncate text-sm font-semibold">
                        {channel.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8">
              <a
                href="/Ishan-Bhat-CV.pdf"
                download
                className="neu-btn inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-accent"
              >
                <DownloadIcon className="h-4 w-4" />
                Download CV (PDF)
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
