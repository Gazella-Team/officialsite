import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
export default function Cta() {
  return (
    <section className="py-[100px] border-b-[1px]">
      <div className="w-[90%] mx-auto text-white">
        <div className="text-center mx-auto">
          <h1 className="text-[32px] font-[600] mb-[14px] text-main">
            Er du klar til at fremstå professionel online?
          </h1>
          <p className="text-gray-600 text-[18px] mb-[40px]">
            Har du et projekt i tankerne, som kræver enten en webapp, hjemmeside
            eller et unikt design? Vi tilbyder dig en gratis samtale.
          </p>
        </div>
        <div className="flex items-center justify-center gap-[40px] mb-[60px]">
          <div className="flex items-center gap-[6px]">
            <CheckCircle2 />
            <p>Flere konverteringer</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <CheckCircle2 />
            <p>Flere konverteringer</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <CheckCircle2 />
            <p>Flere konverteringer</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            className="bg-main text-white p-[10px] px-[20px] text-[14px] rounded-[100px] hover:text-gray-400"
            href={"/kontakt"}
          >
            Snak med os
          </Link>
        </div>
      </div>
    </section>
  );
}
