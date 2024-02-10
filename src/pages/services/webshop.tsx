import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Features from "@/components/features";
import Meta from "@/components/Layout/Meta";
import { Layers } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Webshop() {
  return (
    <Layout>
        <Meta
        title="Webshop | Gazella Team"
        description="Under udvikling"
      />
      <Hero
            description={<div className="w-[92%] mx-auto max-w-main flex items-center justify-end">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
            </p>
          </div>}
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Under udvikling"
        section="kommer snart"
        icon={<Layers strokeWidth={1.3} color="#ffffff" size={80} />}
      />
      <div className="w-[92%] mx-auto py-[60px] ctao:pb-[200px] ctao:pt-[00px] ctao:mt-[-100px]">
      <Link className="inline-block cursor-pointer select-none px-10 py-4 font-medium items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main hover:text-white hover:bg-main" href={"/"}>Tilbage til forsiden</Link>
      </div>
    </Layout>
  );
}
