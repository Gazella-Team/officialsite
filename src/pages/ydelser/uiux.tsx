import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import { PaintBucket } from "lucide-react";
export default function Uiux() {
  return (
    <Layout>
      <Hero
        heading="UI/UX Design"
        section="Ydelser"
        icon={<PaintBucket color="#ffffff" size={70} />}
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
