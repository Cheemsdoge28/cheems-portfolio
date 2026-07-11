import Image from "next/image";
import { profile } from "@/lib/data";
import { GitHubIcon } from "./icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="neu flex w-full max-w-3xl items-center justify-between rounded-full px-5 py-3 sm:px-7">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/images/logo.svg"
            alt=""
            width={30}
            height={30}
            priority
            className="h-7 w-7"
          />
          <span className="text-sm font-bold tracking-tight">Ishan Bhat</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm text-muted sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-accent">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="neu-btn flex h-9 w-9 items-center justify-center rounded-full text-muted"
        >
          <GitHubIcon className="h-4.5 w-4.5" />
        </a>
      </nav>
    </header>
  );
}
