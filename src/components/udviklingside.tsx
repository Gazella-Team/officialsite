import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { DatabaseBackup, Layers, Workflow, Laptop } from "lucide-react";

const udviklingData = [
  {
    icon: <Layers size={40} />,
    headline: "Tech stack",
    link: "/udvikling/techstack",
  },
  {
    icon: <Workflow size={40} />,
    headline: "Arbejdsrocesser",
    link: "/udvikling/arbejdsprocesser",
  },
];

export default function Udviklingsside() {
  return (
    <section className="py-[130px] w-full bg-[url(/otherpattern.svg)] bg-cover">
      <Reveal>
        <div className="w-[92%] mx-auto py-[60px]">
          <h1 className="text-[40px] text-main font-[600]">Se hvordan vi arbejder mest effektivt</h1>
        </div>
      </Reveal>

      <div className="w-[92%] mx-auto z-[1] grid grid-cols-2 gap-[30px] navigation:grid-cols-1">
        {udviklingData.map((v) => (
          <UdviklingsCard Obj={v} key={v} />
        ))}
      </div>
    </section>
  );
}

const UdviklingsCard = (props: any) => {
  return (
    <Reveal>
      <Link
        href={props.Obj.link}
        className="border-[1px] bg-white rounded-[14px] p-[20px] py-[80px] flex items-center flex-col justify-center"
      >
        <h1 className="text-[24px] font-[500]">{props.Obj.headline}</h1>
      </Link>
    </Reveal>
  );
};
