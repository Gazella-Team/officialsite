import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import ContactInfo from "@/components/contactinfo";
import { Send } from "lucide-react";
import Calembed from "@/components/calembed";
export default function Team() {
  return (
    <Layout>
      <Hero
        heading="Tal med os i dag"
        section="kontakt"
        icon={<Send color="#ffffff" size={70} />}
      />
      <Description description="Har du et projekt i tankerne, som kræver enten en webapp, hjemmeside eller et unikt design? Vi tilbyder dig en gratis samtale, hvor du kan stille dine ønsker og krav til netop den software-løsning du drømmer om. Vi vil undervejs komme med rådgivning og sparing ud fra vores erfaringer og kompetencer - helt gratis." />
      <ContactInfo />
      <Calembed />
    </Layout>
  );
}
