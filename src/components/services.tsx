import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { DatabaseBackup, Layers, Workflow, Laptop } from "lucide-react";

const serviceData = [
  {
    icon: <Layers size={40} />,
    headline: "Webudvikling",
    link: "/ydelser/webudvikling",
  },
  {
    icon: <Workflow size={40} />,
    headline: "Appudvikling",
    link: "/ydelser/appudvikling",
  },
  {
    icon: <Laptop size={40} />,
    headline: "SaaS",
    link: "/ydelser/saas",
  },
  {
    icon: <Laptop size={40} />,
    headline: "Webshop",
    link: "/ydelser/saas",
  },
];

export default function Services() {
  return (
    <section className="py-[130px] w-full bg-[url(/otherpattern.svg)] bg-cover">
      <Reveal>
        <div className="w-[92%] mx-auto py-[60px]">
          <h1 className="text-[40px] text-main font-[600]">Hvad kan vi hjælpe dig med?</h1>
        </div>
      </Reveal>

      <div className="w-[92%] mx-auto z-[1] grid grid-cols-2 gap-[30px] navigation:grid-cols-1">
        {serviceData.map((v) => (
          <ServiceCard Obj={v} key={v} />
        ))}
      </div>
    </section>
  );
}

const ServiceCard = (props: any) => {
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
