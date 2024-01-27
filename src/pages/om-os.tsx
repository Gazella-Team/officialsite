import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Members from "@/components/members";
import { Building2 } from "lucide-react";
import Meta from "@/components/Layout/Meta";
export default function Omos() {
  return (
    <Layout>
      <Meta
        title="Hvem er Gazella Team? Læs mere om virksomheden her"
        description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. "
      />
      <Hero
        heading="Hvem er vi"
        section="om os"
        icon={<Building2 color="#ffffff" size={70} />}
      />
      <Description description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris." />
      <Members />
    </Layout>
  );
}
