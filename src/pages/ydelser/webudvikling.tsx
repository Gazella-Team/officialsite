import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import { Layers } from "lucide-react";
export default function Webudvikling() {
  return (
    <Layout page={PAGES.TEAM}>
      <Hero
        heading="Web Udvikling"
        section="Ydelser"
        icon={<Layers color="#ffffff" size={70} />}
      />
      <Description description="Vi specialiserer os inden for web udviklingsprojekter fra A-Z. Med vores web udviklingsservice står vi til rådighed uanset om dit projekt kræver en funktionsfyldt web app eller bare et professionelt online visitkort. Uanset projektets størrelse, garanterer vi en unik, responsiv og fremtidssikret løsning." />
      <Features
        Obj={[
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
        ]}
      />
    </Layout>
  );
}
