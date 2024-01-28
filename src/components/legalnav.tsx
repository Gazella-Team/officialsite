import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { Scale, Cookie } from "lucide-react";

const workOpsData = [
  {
    icon: <Scale size={40} />,
    headline: "Privatlivspolitik",
    link: "/legal/privatlivspolitik",
  },
  {
    icon: <Cookie size={40} />,
    headline: "Cookiepolitik",
    link: "/legal/cookies",
  },
];

export default function LegalNav() {
  return (
    <section className="py-[60px] w-full border-b-[1px]">
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
