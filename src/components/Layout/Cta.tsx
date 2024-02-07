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
    if (currentPath === "/ydelser/app") {
      return "en app"
    }
    else if (currentPath === "/ydelser/saas") {
      return "et SaaS projekt"
    }
    else if (currentPath === "/ydelser/webudvikling") {
      return "en hjemmeside"
    }
    else { 
      return "et projekt"
    }
  }
  return (
    <div className="bg-white">
          <section className="bg-transparent py-[100px] w-[100%] mx-auto text-main mb-[-500px] mt-[200px] z-[1] relative ctao:mb-0 ctao:mt-0 ctao:bg-[#f1faff]">
      <div className="w-[92%] mx-auto max-w-main z-[0]">
        <h1 className="text-[40px] font-[600] mb-[20px] z-[999]">
          Har du en idé til <span className="text-main">{IdentifySection()}?</span>
        </h1>
        <p className="text-[20px] text-gray-600 w-[60%] font-[400] mb-[40px] z-[999] ctao:w-full">
          Få et indblik i hvilke værktøjer samt eksterne software vi hver dag
          bruger til at udvikle de bedst mulige løsninger for vores kunder. Hos
          Gazella Team holder vi os konstant opdateret på de seneste
          teknologier, således vi altid sikrer top-kvalitet.
        </p>
        <div className="flex gap-[20px]">
        <EstimateSheet>
              <div className="flex cursor-pointer select-none px-10 py-4 font-medium items-center gap-[6px] text-center transition-all border-[2px] border-main bg-main rounded-full text-[#f1faff] hover:text-white hover:bg-main">
                <p className="font-[400]">Få et gratis prisestimat</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>

            <Link className="flex cursor-pointer select-none px-10 py-4 font-medium items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main hover:text-white hover:bg-main ctao:hidden" href={"/kontakt"}>Kontakt os <ChevronRight size={22}/></Link>
        </div>

      </div>
    </section>
    <div className="flex items-center justify-end z-[0] ctao:hidden">
    <img className="select-none mr-[-100px] w-[700px] z-[0] relative" src="/footerpattern.webp"></img>
    </div>

    </div>

  );
}
