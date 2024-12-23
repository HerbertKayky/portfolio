import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Landing } from "@/components/landing";
import Projects from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Education />
      <Skills />
    </>
  );
}
