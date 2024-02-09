import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Members from "@/components/members";
import { Users } from "lucide-react";
import Partners from "@/components/partners";
import Meta from "@/components/Layout/Meta";
export default function Team() {
  return (
    <Layout>
        <Meta
        title="Teamet | Gazella Team"
        description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere"
      />
      <Hero
      background="bg-[linear-gradient(rgba(5,29,64,0.80),rgba(5,29,64,1)),url(/flyout.jpg)] bg-top bg-cover"
        heading="Vores team."
        section="om os"
        icon={<Users strokeWidth={2} color="#ffffff" size={80} />}
      />
      <Members />
    </Layout>
  );
}
