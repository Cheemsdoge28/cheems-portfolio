import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  label,
  title,
}: Readonly<{ index: string; label: string; title: string }>) {
  return (
    <Reveal className="mb-12 flex flex-col gap-3">
      <span className="flex items-center gap-3 text-sm font-extrabold tracking-[0.14em] text-ink-soft uppercase">
        <span className="font-display text-clay">{index}</span>
        {label}
      </span>
      <h2 className="font-display text-4xl leading-[1.05] sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}
