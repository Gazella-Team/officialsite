import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
export default function Cta() {
  return (
    <section className="border-b-[1px] grid grid-cols-2">
      <div className="w-[90%] ml-auto max-w-main py-[100px]">
        <h1 className="font-[600] leading-[60px] text-[50px] text-main w-[90%] mb-[30px]">
          Lad os tage en snak om dit kommende projekt
        </h1>
        <p className="text-[20px] w-[80%] mb-[40px] font-[300] text-gray-600 hero:text-[18px] hero:w-full">
          Vi specialiserer os i at udvikle kreative, funktionelle og unikke
          web-løsninger, som skaber værdi.
        </p>
      </div>
      <div className="max-w-main">
        <img className="h-[600px] object-cover" src="/flyout.jpg"></img>
      </div>
    </section>
  );
}
