import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import EstimateSheet from "../Modals/EstimateSheet";
import { ArrowUpRight } from "lucide-react";
import { ChevronRight } from "lucide-react";

export default function Cta() {
  const router = useRouter();
  const currentPath = router.pathname;

  const IdentifySection = () => {
    if (currentPath === "/services/app-development") {
      return "an app"
    }
    else if (currentPath === "/services/saas") {
      return "a SaaS project"
    }
    else if (currentPath === "/services/web-development") {
      return "a web-project"
    }
    else { 
      return "a project"
    }
  }
  return (
    <div className="bg-white">
          <section className="bg-[url(/ctapattern.svg)] bg-cover bg-center py-[100px] w-[100%] mx-auto text-main mt-[200px] z-[1] relative ctao:mb-0 ctao:mt-0 ctao:bg-[#f1faff]">
      <div className="w-[92%] mx-auto max-w-main z-[0]">
        <h1 className="text-[40px] font-[500] mb-[20px] z-[999]">
          Do you have an idea for <span className="text-main">{IdentifySection()}?</span>
        </h1>
        <p className="text-[20px] text-gray-600 w-[60%] font-[400] mb-[40px] z-[999] ctao:w-full">
        We love hearing about your projects. We offer a non-binding meeting where you get the opportunity to determine your vision and requirements for your future project while we supply with professional and constructive advice.</p>
        <div className="flex gap-[20px]">
        <EstimateSheet>
              <div className="flex cursor-pointer select-none px-10 py-4 font-medium items-center gap-[6px] text-center transition-all border-[2px] border-main bg-main rounded-full text-[#f1faff] hover:text-white hover:bg-main">
                <p className="font-[400]">Få et gratis prisestimat</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>

            <Link className="flex cursor-pointer select-none px-10 py-4 font-medium items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main hover:text-white hover:bg-main ctao:hidden" href={"/contact"}>Let's talk<ChevronRight size={22}/></Link>
        </div>

      </div>
    </section>
    <div className="flex items-center justify-end z-[0] ctao:hidden">

    </div>

    </div>

  );
}
