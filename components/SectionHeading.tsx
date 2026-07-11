type SectionHeadingProps = {
  title: string;
};

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-4xl">
      {title}
    </h2>
  );
}
