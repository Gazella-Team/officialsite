import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { Scale } from "lucide-react";
import LegalNav from "@/components/legalnav";
import Meta from "@/components/Layout/Meta";
export default function Juridisk() {
  return (
    <Layout>
      <Meta
        title="Juridisk - hvordan Gazella Team arbejder juridisk"
        description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. "
      />
      <Hero
        heading="Juridisk"
        section="legal"
        icon={<Scale color="#ffffff" size={70} />}
      />
      <Description description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris." />
      <LegalNav />
    </Layout>
  );
}
