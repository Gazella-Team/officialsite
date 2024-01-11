import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ArrowLeftRight } from "lucide-react";

export default function Arbejdsprocesser() {
  return (
    <Layout page={PAGES.TEAM}>
      <Hero
        heading="Arbejdsprocesser"
        section="udvikling"
        icon={<ArrowLeftRight color="#ffffff" size={70} />}
      />
      <Description description="Har du et projekt i tankerne, som kræver enten en webapp, hjemmeside eller et unikt design? Vi tilbyder dig en gratis samtale, hvor du kan stille dine ønsker og krav til netop den software-løsning du drømmer om. Vi vil undervejs komme med rådgivning og sparing ud fra vores erfaringer og kompetencer - helt gratis." />
    </Layout>
  );
}
