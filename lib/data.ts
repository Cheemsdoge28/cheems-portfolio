export const profile = {
  name: "Ishan Bhat",
  role: "Full-Stack Developer & Embedded Linux Engineer",
  location: "Pune, India",
  email: "irbmax28@gmail.com",
  phone: "+91 7507430009",
  github: "https://github.com/Cheemsdoge28",
  githubHandle: "Cheemsdoge28",
  blurb:
    "I build full-stack web apps with Next.js, React and PostgreSQL. On the side I write C++ for ARM handhelds, including a native YouTube client and a Firefox environment that run without a desktop. Two of my sites are live in production.",
};

export type Project = {
  title: string;
  period: string;
  description: string;
  tags: string[];
  link: string;
  highlight?: string;
};

export const projects: Project[] = [
  {
    title: "CheemsWeb E-Commerce Platform",
    period: "May 2025 – present",
    description:
      "Full-stack commerce platform with a CMS-driven storefront and API-key management, built end-to-end on a typed stack.",
    tags: [
      "Next.js 15",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Sanity CMS",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
    ],
    link: "https://github.com/Cheemsdoge28/cheemsdev-web",
  },
  {
    title: "rb-fintech",
    period: "May 2025 – present",
    description:
      "Live fintech web platform with CMS-driven content, deployed and serving real users in production.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    link: "https://github.com/Cheemsdoge28/rb-fintech",
    highlight: "Live in production",
  },
  {
    title: "fire4arkos",
    period: "Apr 2026 – present",
    description:
      "High-performance Firefox framebuffer environment for RK3326 ARM handhelds running ArkOS, with ARM64 cross-compilation tooling.",
    tags: ["C++", "Python", "Bash", "ARM64", "Linux"],
    link: "https://github.com/Cheemsdoge28/fire4arkos",
    highlight: "16★ on GitHub",
  },
  {
    title: "TubeLite",
    period: "Apr 2026 – present",
    description:
      "Native YouTube client with hardware-accelerated rendering on ARM handhelds. Renders direct to display over KMSDRM, no desktop environment needed.",
    tags: ["C++", "SDL2", "OpenGL ES 2.0", "KMSDRM/EGL", "libmpv", "yt-dlp"],
    link: "https://github.com/Cheemsdoge28/tubelite",
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
    skills: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "Prisma ORM",
    ],
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
