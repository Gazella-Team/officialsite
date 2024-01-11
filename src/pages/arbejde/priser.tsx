import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { Wallet } from "lucide-react";
import Pricing from "@/components/pricing";

export default function InterneProjekter() {
  return (
    <Layout page={PAGES.TEAM}>
      <Hero
        heading="Prissætning"
        section="arbejde"
        icon={<Wallet color="#ffffff" size={70} />}
      />
      <Description description="Hvad koster et project hos Gazella Team? Hos os fokuserer vi på at skrædersy hvert projekt til den enkelte kundes behov, hvilket gør at prisen varierer fra projekt til projekt. Ved indgåelse af hvert projekt fastslås en samlet pris ud fra de forventede arbejdstimer" />
      <Pricing />
    </Layout>
  );
}
