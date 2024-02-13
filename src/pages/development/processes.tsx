import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ArrowLeftRight } from "lucide-react";
import Meta from "@/components/Layout/Meta";
import Processes from "@/components/processes";

export default function Arbejdsprocesser() {
  return (
    <Layout>
                    <Meta
        title="How we work | Gazella Team"
        description="We value a structured process from drawing ideas to launching solutions"
      />
      <Hero
            description="We value a structured process from drawing ideas to launching solutions. As a customer we offer you a clear step-by-step plan and time schedule for your coming solution, to ensure a comfortable process and an outstanding result."
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Processes."
        section="development"
        icon={<ArrowLeftRight strokeWidth={1.3} color="#ffffff" size={70} />}
      />
    <Processes />
    </Layout>
  );
}
