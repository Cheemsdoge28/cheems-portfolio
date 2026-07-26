import { profile } from "@/lib/data";
import Mascot from "./Mascot";

export default function Footer() {
  return (
    <footer className="container-x pb-12">
      <div className="flex flex-col items-center gap-3 border-t-2 border-ink/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <Mascot className="h-6 w-6" />
          <span className="text-sm font-bold">{profile.name}</span>
        </div>
        <p className="text-xs text-ink-soft">
          © {new Date().getFullYear()} {profile.name} · Pune, India
        </p>
      </div>
    </footer>
  );
}
