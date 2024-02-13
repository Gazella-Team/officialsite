import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import Meta from "@/components/Layout/Meta";
import { MonitorSmartphone } from "lucide-react";
export default function Appudvikling() {
  return (
    <Layout>
              <Meta
        title="Appudvikling | Gazella Team"
        description="Vi kombinerer funktionelle features, hurtige frameworks og intuitive unikke brugerflader for at skabe de bedste forudsætninger for dit kommende app-projekt."
      />
      <Hero
            description="At Gazella Team we believe app is the future of technology. We strive after developing scalable cross-platform apps, tailormade for your vision. 
            "
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/saas.jpg)] bg-center bg-cover"
        heading="App development."
        section="services"
        icon={<MonitorSmartphone strokeWidth={1.3} color="#ffffff" size={80} />}
      />
      <Features
        Obj={[
          {
            heading: "Cross-platform",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Scaleable and flexible",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Agile development",
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
