import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import Meta from "@/components/Layout/Meta";
import { Laptop } from "lucide-react";
export default function Saas() {
  return (
    <Layout>
                    <Meta
        title="SaaS | Gazella Team"
        description="Vi kombinerer funktionelle features, hurtige frameworks og intuitive unikke brugerflader for at skabe de bedste forudsætninger for dit kommende app-projekt."
      />
      <Hero
            description="saas"
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/saas.jpg)] bg-center bg-cover"
        heading="SaaS."
        section="services"
        icon={<Laptop strokeWidth={1.3} color="#ffffff" size={80} />}
      />
      <Features
        Obj={[
          {
            heading: "Fuld produktudviking",
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
            heading: "Concept development",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Brand identity",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Zero ownership",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
        ]}
      />
    </Layout>
  );
}
