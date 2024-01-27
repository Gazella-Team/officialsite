import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Members from "@/components/members";
import { Building2 } from "lucide-react";
export default function HvorforOs() {
  return (
    <Layout>
      <Hero
        heading="Hvorfor os"
        section="virksomheden"
        icon={<Building2 color="#ffffff" size={70} />}
      />
      <Description description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris." />
      <Members />
    </Layout>
  );
}
