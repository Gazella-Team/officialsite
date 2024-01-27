import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import { DatabaseBackup } from "lucide-react";
export default function Hastighedsoptimering() {
  return (
    <Layout>
      <Hero
        heading="Automatisering"
        section="Ydelser"
        icon={<DatabaseBackup color="#ffffff" size={70} />}
      />
      <Description description="Din hjemmesides hastighed har stor betydning for brugeroplevelsen samt dine samlede konverteringer. Ved hvert web-projekt, sørger vi for, at løsningen er optimeret efter de nyeste teknologier, såldes at hastigheden og hermed brugeroplevelsen gøres så god som muligt." />
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
