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
            description={<div className="w-[95%] mx-auto max-w-main flex items-center justify-end">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
                    We specialise in building web-projects from A-Z. By combining unique user-friendly designs and innovative technology, we're able to develop everything from static websites to more complex webapps.  
            </p>
          </div>}
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
              "Undersider, layout og sektioner til webløsningen - vi opstiller alt ud fra dine behov",
          },
          {
            heading: "Tailormade design",
            description:
              "Vi står for at skrædersy et design, som gør dig og dit brand unikke og genkendelige online.",
          },
          {
            heading: "All-device compatibel",
            description:
              "Alle webløsninger, vi udvikler, er enhedsoptimeret til måde mobil, tablet, laptop og desktop",
          },
          {
            heading: "Domain & hosting",
            description:
              "Vi sørger for, at din webløsning tilsluttes dit ønskede domain på en sikker og overskuelig måde",
          },
          {
            heading: "Speed optimization",
            description:
              "Komplet optimering af webløsningens hastighed, som øger brugeroplevelsen og antallet af konverteringer",
          },
          {
            heading: "SEO optimization",
            description:
              "Vi øger din webløsnings synlighed på Google samt antallet af besøgende ved en komplet SEO optimering",
          },
        ]}
      />
    </Layout>
  );
}
