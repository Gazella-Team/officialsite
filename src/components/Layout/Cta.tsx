import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
export default function Cta() {
  return (
    <section className="py-[60px] bg-main text-white">
      <div className="w-[90%] mx-auto max-w-main">
        <h1 className="text-[40px] font-[500] mb-[20px]">
          Lad os tage en snak om dit kommende projekt
        </h1>
        <p className="text-[20px] text-gray-200 w-[90%] font-light mb-[40px]">
          Få et indblik i hvilke værktøjer samt eksterne software vi hver dag
          bruger til at udvikle de bedst mulige løsninger for vores kunder. Hos
          Gazella Team holder vi os konstant opdateret på de seneste
          teknologier, således vi altid sikrer top-kvalitet.
        </p>
        <div className="flex gap-[30px] mb-[60px]">
          <div className="flex items-center gap-[10px]">
            <CheckCircle2 size={30} />
            <p className="text-[20px]">100% uforpligtende</p>
          </div>
          <div className="flex items-center gap-[10px]">
            <CheckCircle2 size={30} />
            <p className="text-[20px]">Gratis rådgivning</p>
          </div>
        </div>
        <div className="flex items-center justify-end gap-[20px] lg:justify-start">
          <Link
            className="border-[1px] font-light border-white rounded-[50px] p-[10px] px-[30px] text-center hover:bg-white hover:text-main transition-all"
            href={"/kontakt"}
          >
            Snak med os
          </Link>
          <Link
            className="border-[1px] font-light border-white rounded-[50px] p-[10px] px-[30px] text-center hover:bg-white hover:text-main transition-all"
            href={"/arbejde/cases"}
          >
            Se vores arbejde
          </Link>
        </div>
      </div>
    </section>
  );
}
