import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { Heart } from "lucide-react";
import Partners from "@/components/partners";
export default function Partnere() {
  return (
    <Layout>
      <Hero
            description={<div className="w-[90%] mx-auto max-w-main flex items-center justify-end">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            By collaborating with companies and organizations doing what they do best, we're able to deliver the best possible results for our customers. We live by the philosophy that nothing great is created alone, which is why we value long-term relations with both customers and partners.
          </p>
          </div>}
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Partners."
        section="company"
        icon={<Heart color="#ffffff" size={70} />}
      />
    <Partners />
    </Layout>
  );
}
