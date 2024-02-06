import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import EstimateSheet from "../Modals/EstimateSheet";
import { ArrowUpRight } from "lucide-react";

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
          <section className="bg-main py-[100px] w-[100%] mx-auto text-white">
      <div className="w-[92%] mx-auto max-w-main">
        <h1 className="text-[40px] font-[300] mb-[20px]">
          Har du en idé til <span className="text-white">{IdentifySection()}?</span>
        </h1>
        <p className="text-[20px] text-gray-200 w-[85%] font-[300] mb-[40px]">
          Få et indblik i hvilke værktøjer samt eksterne software vi hver dag
          bruger til at udvikle de bedst mulige løsninger for vores kunder. Hos
          Gazella Team holder vi os konstant opdateret på de seneste
          teknologier, således vi altid sikrer top-kvalitet.
        </p>
        <div className="flex gap-[20px]">
        <EstimateSheet>
              <div className="flex cursor-pointer select-none px-10 py-4 font-medium items-center gap-[6px] text-center transition-all bg-white border-[1px] rounded-full text-main hover:text-white hover:bg-main">
                <p className="font-[400]">Få et gratis prisestimat</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>

            <Link className="flex cursor-pointer select-none px-10 py-4 font-medium items-center gap-[6px] text-center transition-all bg-white border-[1px] rounded-full text-main hover:text-white hover:bg-main" href={"/kontakt"}>Kontakt os</Link>
        </div>

      </div>
    </section>
    </div>

  );
}
