import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import { Heart } from "lucide-react";
import Job from "@/components/job";


export default function Career() {
  return (
    <Layout>
      <Hero
            description="            By collaborating with companies and organizations doing what they do best, we're able to deliver the best possible results for our customers. We live by the philosophy that nothing great is created alone, which is why we value long-term relations with both customers and partners.
            "
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Join us."
        section="company"
        icon={<Heart color="#ffffff" size={70} />}
      />
    <Job />
    </Layout>
  );
}
