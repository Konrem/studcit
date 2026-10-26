import Info from "@/components/sections/info";
import AboutCards from "@/components/sections/cardsWork";
import Timeline from "@/components/sections/timeline";
import Faq from "@/components/sections//faq";
import Form from "@/components/sections//form";
import Projects from "@/components/sections/projects";

export default function Main() {
  return (
    <main
      className="bg-[var(--bg-main)] text-[var(--text-primary)] overflow-hidden"
      role="main"
    >
      <Info />
      <AboutCards />
      <Timeline />
      <Projects />
      <Faq />
      <Form />
    </main>
  );
}
