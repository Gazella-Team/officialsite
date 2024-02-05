import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Work from "@/components/work";
import { BookMarked } from "lucide-react";

export default function Cases() {
  return (
    <Layout>
      <Hero
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/flyout02.jpg)] bg-top bg-cover"
        heading="Cases"
        section="Arbejde"
        icon={<BookMarked color="#ffffff" size={70} />}
      />
      <Description description="Hos Gazella Team er kunden altid i fokus. Gennem hele processen fra ide til færdigt produkt, sørger vi for, at kundens vision og krav til projektet overholdes, i takt med at vi efter aftale supplerer med vores faglige viden og forslag til forbedring for at skabe de bedste forudsætninger for et godt slut-produkt." />
      <Work />
    </Layout>
  );
}
