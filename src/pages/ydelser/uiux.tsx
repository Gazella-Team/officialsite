import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import { PaintBucket } from "lucide-react";
export default function Uiux() {
  return (
    <Layout page={PAGES.TEAM}>
      <Hero
        heading="UI/UX Design"
        section="Ydelser"
        icon={<PaintBucket color="#ffffff" size={70} />}
      />
      <Description description="We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving your most complex challenges. Our comprehensive suite of healthcare advisory, digital, and managed services drives innovation, growth, and resiliency so you can best serve your communities." />
      <Features
        Obj={[
          {
            heading: "Hosting",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
          {
            heading: "Backend Integration",
            description:
              "We bring together public and commercial healthcare organizations, offering a 360-degree industry approach to solving",
          },
        ]}
      />
    </Layout>
  );
}
