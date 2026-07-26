const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "C++",
  "Embedded Linux",
  "ARM64",
  "KMSDRM",
  "SDL2",
  "Zod",
  "Git",
];

function Row() {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden="true">
      {items.map((t) => (
        <li key={t} className="flex items-center">
          <span className="font-display text-xl text-ink-soft sm:text-2xl">
            {t}
          </span>
          <span className="mx-6 text-sm text-clay sm:mx-9" aria-hidden="true">
            &#9670;
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  return (
    <section
      className="marquee-track relative overflow-hidden border-y-2 border-ink/10 bg-paper py-5 select-none"
      aria-label="Technologies I work with"
    >
      <span
        className="halftone pointer-events-none absolute inset-0 text-ink opacity-[0.04]"
        aria-hidden="true"
      />
      {/* soft edge fades */}
      <span className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-paper to-transparent sm:w-28" />
      <span className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-paper to-transparent sm:w-28" />
      <div className="animate-marquee flex w-max">
        <Row />
        <Row />
      </div>
    </section>
  );
}
