import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Coad() {
  return (
    <Layout>
      <Hero             description={<div className="w-[92%] mx-auto max-w-main flex items-center justify-end">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
            </p>
          </div>} background={""} icon={null} section="case" heading="COAD" />
      <div className="w-[92%] mb-[50px] mx-auto max-w-main flex flex-col items-end justify-center gap-[20px] mt-[-100px]">
          <p className="text-[44px] w-[68%] text-main font-[500] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            +10
            <span className="text-[20px] ml-[20px]">måndelige henvendelser</span>
          </p>
          <p className="text-[44px] mb-[50px] w-[68%] text-main font-[500] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            {"<"}0.5ms
            <span className="text-[20px] ml-[20px]">hjemmeside hastighed</span>
          </p>
          <div>
          </div>

        </div>
        <img className="w-[92%] mx-auto rounded-[14px] ctao:mb-[100px]" src="/cases/coad/coadcase.svg"></img>
    </Layout>
  );
}
