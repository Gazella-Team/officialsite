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
        title="Priser - Få et indblik i hvad et projekt hos Gazella Team koster"
        description="Få et indblik i hvilke værktøjer samt eksterne software vi hver dag bruger til at udvikle de bedst mulige løsninger for vores kunder."
      />
      <Hero
            description={<div className="w-[95%] mx-auto max-w-main flex items-center justify-end">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
              We tailormake each project, so that its result fits the particular customer
          </p>
          </div>}
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Pricing."
        section="work"
        icon={<Wallet color="#ffffff" size={70} />}
      />

      <Pricing />
    </Layout>
  );
}
