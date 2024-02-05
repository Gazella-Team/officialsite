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
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/saas.jpg)] bg-center bg-cover"
        heading="Appudvikling"
        section="Ydelser"
        icon={<MonitorSmartphone color="#ffffff" size={80} />}
      />
      <Description description="Har du en god ide, som kræver en app? Hos Gazella Team tror vi på, at app er fremtiden af software-løsninger. Vi kombinerer funktionelle features, hurtige frameworks og intuitive unikke brugerflader for at skabe de bedste forudsætninger for dit kommende app-projekt." />
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
