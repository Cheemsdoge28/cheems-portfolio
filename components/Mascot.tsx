import Image from "next/image";

export default function Mascot({
  className = "h-8 w-8",
  priority = false,
}: Readonly<{ className?: string; priority?: boolean }>) {
  return (
    <Image
      src="/images/logo-ink.svg"
      alt="Cheems mascot"
      width={40}
      height={40}
      priority={priority}
      className={className}
    />
  );
}
