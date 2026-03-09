import Info from "@/components/sections/info";
import AboutCards from "@/components/sections/cardsWork";
import Timeline from "@/components/sections/timeline";
import Faq from "@/components/sections//faq";
import Form from "@/components/sections//form";

export default function Main() {
  return (
    <main
      className="bg-[var(--bg-main)] text-[var(--text-primary)] overflow-hidden"
      id="top"
      role="main"
    >
      <Info />
      <AboutCards />
      <Timeline />
      <Faq />
      <Form />
    </main>
  );
}
