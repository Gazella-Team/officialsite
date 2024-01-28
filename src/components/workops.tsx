import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { Wallet, FolderGit2, User2 } from "lucide-react";

const workOpsData = [
  {
    icon: <User2 size={40} />,
    headline: "Kunde Cases",
    link: "/arbejde/cases",
  },
  {
    icon: <Wallet size={40} />,
    headline: "Prissætning",
    link: "/arbejde/priser",
  },
];

export default function WorkOps() {
  return (
    <section className="py-[60px] w-full">
      <Reveal>
        <div className="mt-[76px] w-[90%] mx-auto max-w-main py-[60px]">
          <h1 className="text-[40px] text-main font-[500] leading-[50px]">
            Udforsk vores arbejde
          </h1>
        </div>
      </Reveal>

      <div className="w-[90%] mx-auto max-w-main z-[1] grid grid-cols-2 gap-[30px] navigation:grid-cols-1">
        {workOpsData.map((v) => (
          <WorkOpsCard Obj={v} key={v} />
        ))}
      </div>
    </section>
  );
}

const WorkOpsCard = (props: any) => {
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
