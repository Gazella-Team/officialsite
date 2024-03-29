import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function OrganicMasterclass() {
  return (
    <Layout>
      <Hero             description="case" background={""} icon={null} section="case" heading="Organic Masterclass" />
      
      <div className="w-[92%] mb-[200px] mx-auto max-w-main flex flex-col items-end justify-center gap-[20px] mt-[-100px]">
          <p className="text-[44px] w-[68%] text-main font-[500] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            +800%
            <span className="text-[20px] ml-[20px]">måndelige konverterende</span>
          </p>
          <p className="text-[44px] mb-[50px] w-[68%] text-main font-[500] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            {"<"}0.4ms
            <span className="text-[20px] ml-[20px]">hjemmeside hastighed</span>
          </p>
          <div>
          <Link className="border-[2px] rounded-full px-10 py-4 border-main mb-[50px] w-[68%] text-main font-[500]  hover:text-white hover:bg-main transition-all" target="_blank" href={"https://site.organicmasterclass.com/"}>
            Besøg Organic Masterclass
          </Link>
          </div>

        </div>
        <div className="w-[92%] mb-[100px] mx-auto max-w-main">
          <img className="w-[140px] mb-[30px]" src="/trust.png"></img>
          <p className="w-[50%] text-[20px] italic text-gray-600 mb-[50px] lg:w-full">"Fuldkommen perfekt hjemmeside. Jeg har arbejdet sammen med Lasse og hans team da jeg stod og manglede en ny hjemmeside til mit agency. Der er ikke andet at sige end at resultatet er blevet virkelig lækkert og lige hvad jeg søgte. Kan varmt anbefales til alle der leder efter en hjemmeside fra øverste hylde!"</p>
          <div className="flex items-center gap-[30px]">
            <p className="text-[30px]">-</p>
            <p className="text-[22px] font-[500]">Sebastian Madsen,<br></br><span className="text-gray-600 font-[400] text-[18px]">Co-founder, Organic Masterclass</span></p>
          </div>
        </div>
        <div className="bg-[#f1faff] w-[92%] mx-auto rounded-[14px]">
        <img className="w-[100%] mx-auto rounded-[14px] ctao:mb-[100px]" src="/cases/organicmasterclass/organicmasterclasscase.svg"></img>
        </div>
        
    </Layout>
  );
}
