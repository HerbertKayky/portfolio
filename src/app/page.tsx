import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Landing } from "@/components/landing";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Education />
    </>
  );
}
