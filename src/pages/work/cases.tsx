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
        title="Cases | Gazella Team"
        description="We take pride in our ability to turn challenges into opportunities through innovative and tailored software solutions"
      />
      <Hero
            description="At Gazella Team, we take pride in our ability to turn challenges into opportunities through innovative and tailored software solutions. Dive into these compelling narratives to witness firsthand how we collaborated with diverse industries to overcome obstacles, optimize processes, and achieve remarkable results."
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/flyout02.jpg)] bg-top bg-cover"
        heading="Cases."
        section="work"
        icon={<Briefcase strokeWidth={1.3} color="#ffffff" size={70} />}
      />
      <Work />
    </Layout>
  );
}
