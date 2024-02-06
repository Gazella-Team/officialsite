import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import { Laptop } from "lucide-react";
export default function Saas() {
  return (
    <Layout>
      <Hero
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/saas.jpg)] bg-center bg-cover"
        heading="SaaS"
        section="Ydelser"
        icon={<Laptop strokeWidth={1.3} color="#ffffff" size={80} />}
      />
      <Description description="Et godt design og en god brugeroplevelse har markant betydning for, hvor professionel dine besøgende opfatter dig. Hos os lægger vi vægt i, at hvert projekt fremhæves af en unik brugerflade, som gør det så let for den besøgende at navigere rundt i som muligt." />
      <Features
        Obj={[
          {
            heading: "Hosting",
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
