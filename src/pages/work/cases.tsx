import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Work from "@/components/work";
import { Briefcase } from "lucide-react";
import Meta from "@/components/Layout/Meta";

export default function Cases() {
  return (
    <Layout>
              <Meta
        title="Arbejde | Gazella Team"
        description="Vi specialiserer os inden for web udviklingsprojekter fra A-Z. Med vores web udviklingsservice står vi til rådighed uanset om dit projekt kræver en funktionsfyldt web app eller bare et professionelt online visitkort."
      />
      <Hero
            description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
            "
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/flyout02.jpg)] bg-top bg-cover"
        heading="Cases."
        section="work"
        icon={<Briefcase strokeWidth={1.3} color="#ffffff" size={70} />}
      />
      <Work />
    </Layout>
  );
}
