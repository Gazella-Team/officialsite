import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { ArrowLeftRight, FileStack, Sandwich } from "lucide-react";

const udviklingData = [
  {
    icon: <ArrowLeftRight size={40} />,
    headline: "Arbejdsprocesser",
    link: "/udvikling/arbejdsprocesser",
  },
  {
    icon: <FileStack size={40} />,
    headline: "Tech Stack",
    link: "/udvikling/techstack",
  },
];

export default function Udviklingside() {
  return (
    <section className="py-[60px] w-full border-b-[1px]">
      <Reveal>
        <div className="mt-[76px] w-[90%] mx-auto max-w-main py-[60px]">
          <h1 className="text-[40px]">Se hvordan vi arbejder bedst muligt</h1>
        </div>
      </Reveal>

      <div className="w-[90%] mx-auto max-w-main z-[1] grid grid-cols-2 gap-[30px]">
        {udviklingData.map((v) => (
          <UdviklingCard Obj={v} key={v} />
        ))}
      </div>
    </section>
  );
}

const UdviklingCard = (props: any) => {
  return (
    <Reveal>
      <Link
        href={props.Obj.link}
        className="border-[1px] bg-gray-50 rounded-[8px] p-[20px] py-[80px] flex items-center flex-col justify-center"
      >
        <div className="mb-[20px]">{props.Obj.icon}</div>
        <h1 className="text-[24px] font-[500]">{props.Obj.headline}</h1>
      </Link>
    </Reveal>
  );
};
