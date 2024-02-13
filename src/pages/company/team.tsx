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
            description="Gazella Team consists of a team of ambitious, innovative and smiling developers and designers who are passionate about creating unique digital solutions every day. We focus on tailormaking each solution to the specific project. Therefore you can expect a reliable competent partner who supplies with knowledge and delivers on time at the agreed price.
            "
      background="bg-[linear-gradient(rgba(5,29,64,0.80),rgba(5,29,64,1)),url(/flyout.jpg)] bg-top bg-cover"
        heading="Our Team."
        section="company"
        icon={<Users strokeWidth={2} color="#ffffff" size={80} />}
      />
      <Members />
    </Layout>
  );
}
