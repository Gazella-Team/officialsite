import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import {
  UserCheck,
  CalendarCheck,
  ArrowLeftRight,
  History,
  Zap,
  HeartHandshake,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const whyData = [
  {
    icon: <UserCheck size={30} />,
    headline: "En fast samarbejdspartner",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv.",
  },
  {
    icon: <CalendarCheck size={30} />,
    headline: "+10 års kombineret erfaring",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv.",
  },
  {
    icon: <ShieldCheck size={30} />,
    headline: "Tilfredshedsgaranti",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv.",
  },
  {
    icon: <Cpu size={30} />,
    headline: "Altid seneste teknologi",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv.",
  },
  {
    icon: <HeartHandshake size={30} />,
    headline: "Dine behov i fokus",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv.",
  },
  {
    icon: <Zap size={30} />,
    headline: "Hurtig levering",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv.",
  },
  {
    icon: <ArrowLeftRight size={30} />,
    headline: "En skarp process",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv.",
  },
  {
    icon: <History size={30} />,
    headline: "Support alle ugens dage",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv.",
  },
];

export default function Why() {
  return (
    <section className="py-[60px] w-full">
      <div className="w-[90%] mx-auto max-w-main z-[1] grid grid-cols-2 gap-[30px] lg:grid-cols-1">
        {whyData.map((v) => (
          <WhyCard Obj={v} key={v} />
        ))}
      </div>
    </section>
  );
}

const WhyCard = (props: any) => {
  return (
    <Reveal>
      <div className="border-[1px] bg-gray-50 rounded-[8px] p-[30px] text-main h-full lg:h-full">
        <div className="flex items-center gap-[20px] mb-[30px]">
          <div className=" bg-white inline-block p-[10px] rounded-[8px] border-[1px]">
            {props.Obj.icon}
          </div>
          <h1 className="text-[24px] font-[500]">{props.Obj.headline}</h1>
        </div>

        <p className="text-[18px] font-[300] text-gray-600">
          {props.Obj.description}
        </p>
      </div>
    </Reveal>
  );
};
