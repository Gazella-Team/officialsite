import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Work from "@/components/work";
import { User2 } from "lucide-react";

export default function Cases() {
  return (
    <Layout>
      <Hero
        heading="Kunde Cases"
        section="Arbejde"
        icon={<User2 color="#ffffff" size={70} />}
      />
      <Description description="Hos Gazella Team er kunden altid i fokus. Gennem hele processen fra ide til færdigt produkt, sørger vi for, at kundens vision og krav til projektet overholdes, i takt med at vi efter aftale supplerer med vores faglige viden og forslag til forbedring." />
      <Work />
    </Layout>
  );
}
