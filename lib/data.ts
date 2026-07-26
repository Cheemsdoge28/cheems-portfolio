export const profile = {
  name: "Ishan Bhat",
  role: "Full-Stack Developer",
  roleAlt: "Embedded Linux Engineer",
  location: "Pune, India",
  email: "irbmax28@gmail.com",
  phone: "+91 7507430009",
  github: "https://github.com/Cheemsdoge28",
  githubHandle: "Cheemsdoge28",
  blurb:
    "I build full-stack web apps with Next.js, React, Node.js and PostgreSQL. On the side I write C++ for ARM handhelds, including a native YouTube client and a Firefox environment that run without a desktop. Two of my sites are live in production.",
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  period: string;
  description: string;
  tags: string[];
  href?: string;
  repo?: string;
  live?: string;
  caseStudy?: string;
  badge?: string;
  /** pastel surface token for the card */
  surface: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "leaddesk-mini",
    title: "LeadDesk Mini",
    kicker: "Full-stack lead platform",
    period: "Jul 2026",
    description:
      "A lead-capture product with a public landing page and a secured admin pipeline: validated lead form, JWT-protected dashboard with search, status filters, editable notes and CSV export. One Zod schema validates on the client and again on the server.",
    tags: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma 7",
      "Zod",
      "JWT (jose)",
      "Tailwind v4",
    ],
    repo: "https://github.com/Cheemsdoge28/LeadKit-Mini",
    live: "https://lead-kit-mini-woad.vercel.app",
    badge: "Built for the Digital Heroes task",
    surface: "paper",
    featured: true,
  },
  {
    slug: "drisco",
    title: "DRISCO Redesign",
    kicker: "Independent ecommerce redesign",
    period: "Jul 2026",
    description:
      "An independent, unaffiliated redesign of a newly launched Indian beverage brand I found on Reddit. A full frontend prototype covering the homepage, product pages, comparison, FAQ and shopping flow, built on a reusable design system with restrained, purposeful motion.",
    tags: ["Next.js 16", "React 19", "TypeScript", "Design System", "Motion"],
    live: "https://drisco-redesign-demo.vercel.app",
    caseStudy: "/work/drisco",
    badge: "Case study",
    surface: "paper",
    featured: true,
  },
  {
    slug: "cheemsweb",
    title: "CheemsWeb E-Commerce",
    kicker: "Full-stack commerce platform",
    period: "May 2025 – present",
    description:
      "A full-stack commerce platform built end to end: a CMS-driven storefront, product catalog and an API-key management system, with the data layer modelled in PostgreSQL via Prisma.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Sanity CMS",
      "Tailwind CSS",
    ],
    repo: "https://github.com/Cheemsdoge28/cheemsdev-web",
    surface: "paper",
  },
  {
    slug: "rb-fintech",
    title: "rb-fintech",
    kicker: "Fintech web platform",
    period: "May 2025 – present",
    description:
      "A live fintech web platform with CMS-driven content, deployed on Vercel and serving real users in production.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    repo: "https://github.com/Cheemsdoge28/rb-fintech",
    badge: "Live in production",
    surface: "paper",
  },
  {
    slug: "fire4arkos",
    title: "fire4arkos",
    kicker: "Embedded Linux · ARM",
    period: "Apr 2026 – present",
    description:
      "A high-performance Firefox framebuffer environment for RK3326 ARM handhelds running ArkOS, including an ARM64 cross-compilation toolchain.",
    tags: ["C++", "Python", "Bash", "ARM64", "Linux"],
    repo: "https://github.com/Cheemsdoge28/fire4arkos",
    badge: "16★ on GitHub",
    surface: "paper",
  },
  {
    slug: "tubelite",
    title: "TubeLite",
    kicker: "Native client · bare metal",
    period: "Apr 2026 – present",
    description:
      "A native YouTube client with hardware-accelerated rendering that draws directly to the display over KMSDRM, with no desktop environment, using libmpv and yt-dlp.",
    tags: ["C++", "SDL2", "OpenGL ES 2.0", "KMSDRM/EGL", "libmpv"],
    repo: "https://github.com/Cheemsdoge28/tubelite",
    surface: "paper",
  },
];

export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML & CSS",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend & Data",
    skills: ["Node.js", "REST APIs", "PostgreSQL", "SQL", "Prisma ORM", "Zod"],
  },
  {
    label: "Systems",
    skills: ["C", "C++", "C#", "Python", "Bash", "Linux"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "Chrome DevTools"],
  },
];

export const education = {
  degree: "Senior Secondary (XII), Science",
  board: "Maharashtra State Board of Secondary and Higher Secondary Education",
  year: "2026",
  score: "82.00%",
};
