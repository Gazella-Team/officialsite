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
            description="We tailormake each solution to fit the customers needs the best way possible. Read about cases we're proud of "
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/flyout02.jpg)] bg-top bg-cover"
        heading="Cases."
        section="work"
        icon={<Briefcase strokeWidth={1.3} color="#ffffff" size={70} />}
      />
      <Work />
    </Layout>
  );
}
