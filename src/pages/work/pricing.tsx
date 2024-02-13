import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { Wallet } from "lucide-react";
import Pricing from "@/components/pricing";
import Meta from "@/components/Layout/Meta";

export default function InterneProjekter() {
  return (
    <Layout>
      <Meta
        title="Pricing | Gazella Team"
        description="We believe in providing straightforward and flexible pricing structures to cater to the unique needs of our clients"
      />
      <Hero
            description="We believe in providing straightforward and flexible pricing structures to cater to the unique needs of our clients. Our pricing philosophy is rooted in fairness and clarity, ensuring that you have a clear understanding of the value you receive.
            "
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Pricing."
        section="work"
        icon={<Wallet color="#ffffff" size={70} />}
      />

      <Pricing />
    </Layout>
  );
}
