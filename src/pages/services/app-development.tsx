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
        title="App development | Gazella Team"
        description="We strive after developing scalable cross-platform apps, tailormade for your vision."
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
              "All our app-solutins function on both Android and iOS.",
          },
          {
            heading: "Scaleable and flexible",
            description:
              "Our app solutions can be adapted as your business experiences change.",
          },
          {
            heading: "Agile development",
            description:
              "Constant iteration and continuous feedback to ensure your satisfaction.",
          },
          {
            heading: "UI/UX Design",
            description:
            "We always ensure that your app is intuitive and easy to navigate.",
          },
          {
            heading: "API Integration",
            description:
              "We connect your app to third party tools to ensure the best functionality.",
          },
          {
            heading: "Post-Launch Support",
            description:
              "After launching your app, we're available to adjust any changes you might need.",
          },
        ]}
      />
    </Layout>
  );
}
