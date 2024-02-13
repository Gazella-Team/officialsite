import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Coad() {
  return (
    <Layout>
      <Hero description="case" background={""} icon={null} section="case" heading="COAD" />
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
        <img className="w-[95%] mx-auto rounded-[14px] ctao:mb-[100px]" src="/cases/coad/coadcase.svg"></img>
    </Layout>
  );
}
