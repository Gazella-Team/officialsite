import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { Wallet } from "lucide-react";
import Pricing from "@/components/pricing";
import Meta from "@/components/Layout/Meta";

export default function InterneProjekter() {
  return (
    <Layout>
      <Meta
        title="Priser - Få et indblik i hvad et projekt hos Gazella Team koster"
        description="Få et indblik i hvilke værktøjer samt eksterne software vi hver dag bruger til at udvikle de bedst mulige løsninger for vores kunder."
      />
      <Hero
        heading="Prissætning"
        section="arbejde"
        icon={<Wallet color="#ffffff" size={70} />}
      />
      <Description
        link="Få et gratis prisestimat"
        description="Hvad koster et project hos Gazella Team? Hos os fokuserer vi på at skrædersy hvert projekt til den enkelte kundes behov, hvilket gør at prisen varierer fra projekt til projekt. Ved indgåelse af hvert projekt fastslås en samlet pris ud fra de forventede arbejdstimer. "
      />
      <Pricing />
    </Layout>
  );
}
