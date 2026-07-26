import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  title,
}: Readonly<{ index: string; label: string; title: string }>) {
  return (
    <Reveal className="relative mb-8 flex flex-col gap-3 sm:mb-12">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 right-0 z-0 origin-top-right select-none font-display text-[5.5rem] leading-none text-ink/5 sm:-top-14 sm:text-[10rem]"
      >
        {index}
      </span>
      <span className="relative flex items-center gap-3 text-sm font-bold tracking-[0.14em] text-ink-soft uppercase">
        <span className="font-display text-clay">{index}</span>
        {label}
      </span>
      <h2 className="relative max-w-3xl font-display text-4xl leading-[1.05] text-balance sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
