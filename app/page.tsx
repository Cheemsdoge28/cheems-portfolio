import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="px-4 pt-4 pb-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </>
  );
}
