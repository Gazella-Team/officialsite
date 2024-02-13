import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { LifeBuoy } from "lucide-react";
import FaqComponent from "@/components/faq";
import Meta from "@/components/Layout/Meta";

export default function Support() {
  return (
    <Layout>
      <Meta
        title="Support - Gazella Team"
        description="Vi arbejder hele tiden på at skrive nye artikler, hvor vores team deler ud af tips & tricks i forhold til hvordan du laver din hjemmeside."
      />
      <Hero
            description="            Gazella Team consists of a team of ambitious, innovative and smiling developers and designers who are passionate about creating unique digital solutions every day. We focus on tailormaking each solution to the specific project. Therefore you can expect a reliable competent partner who supplies with knowledge and delivers on time at the agreed price.
            "
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Support."
        section="company"
        icon={<LifeBuoy color="#ffffff" size={70} />}
      />
      <FaqComponent />
    </Layout>
  );
}
