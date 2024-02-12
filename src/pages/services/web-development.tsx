import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import Meta from "@/components/Layout/Meta";
import { Layers } from "lucide-react";

export default function Webudvikling() {
  return (
    <Layout>
        <Meta
        title="Webudvikling | Gazella Team"
        description="Vi specialiserer os inden for web udviklingsprojekter fra A-Z. Med vores web udviklingsservice står vi til rådighed uanset om dit projekt kræver en funktionsfyldt web app eller bare et professionelt online visitkort."
      />
      <Hero
      description="We specialize in building web-solutions from A-Z. By combining unique user-friendly designs and innovative technology, we're able to develop everything from static websites to more complex webapps."
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Web development."
        section="services"
        icon={<Layers strokeWidth={1.3} color="#ffffff" size={80} />}
      />
      <Features
        Obj={[
          {
            heading: "Layout & structure",
            description:
              "Subpages, pageflow and component placement. We handle it all.",
          },
          {
            heading: "Custom design",
            description:
              "A user-friendly design boosting your brand identity and conversions.",
          },
          {
            heading: "Device compatibility",
            description:
              "We ensure that your web-solution is accessible on all devices.",
          },
          {
            heading: "Domain & hosting",
            description:
              "We launch your new web-solution on your preferred domain.",
          },
          {
            heading: "Speed optimization",
            description:
              "We make your website as fast as possible to increase conversions.",
          },
          {
            heading: "SEO optimization",
            description:
              "We optimize your website for maximum organic results on Google.",
          },
        ]}
      />
    </Layout>
  );
}
