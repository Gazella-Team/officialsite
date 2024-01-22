import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Projects from "@/components/projects";
import { FolderGit2 } from "lucide-react";

export default function InterneProjekter() {
  return (
    <Layout>
      <Hero
        heading="Interne Projekter"
        section="arbejde"
        icon={<FolderGit2 color="#ffffff" size={70} />}
      />
      <Description description="Har du et projekt i tankerne, som kræver enten en webapp, hjemmeside eller et unikt design? Vi tilbyder dig en gratis samtale, hvor du kan stille dine ønsker og krav til netop den software-løsning du drømmer om. Vi vil undervejs komme med rådgivning og sparing ud fra vores erfaringer og kompetencer - helt gratis." />
      <Projects />
    </Layout>
  );
}
