import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Members from "@/components/members";
import { LifeBuoy } from "lucide-react";
import FAQ from "@/components/faq";
export default function Omos() {
  return (
    <Layout page={PAGES.TEAM}>
      <Hero
        heading="Support"
        section="hjælp"
        icon={<LifeBuoy color="#ffffff" size={70} />}
      />
      <Description description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris." />
      <FAQ />
    </Layout>
  );
}
