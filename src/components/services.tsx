import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { DatabaseBackup, Layers, Workflow, Laptop } from "lucide-react";

const serviceData = [
  {
    icon: <Layers size={40} />,
    headline: "Web Udvikling",
    link: "/ydelser/webudvikling",
  },
  {
    icon: <Laptop size={40} />,
    headline: "SaaS",
    link: "/ydelser/saas",
  },
  {
    icon: <Workflow size={40} />,
    headline: "API integrationer",
    link: "/ydelser/integrationer",
  },
  {
    icon: <DatabaseBackup size={40} />,
    headline: "Automatisering",
    link: "/ydelser/automatisering",
  },
];

export default function Services() {
  return (
    <section className="py-[60px] w-full">
      <Reveal>
        <div className="mt-[76px] w-[90%] mx-auto max-w-main py-[60px]">
          <h1 className="text-[40px]">Hvad kan vi hjælpe dig med?</h1>
        </div>
      </Reveal>

      <div className="w-[90%] mx-auto max-w-main z-[1] grid grid-cols-2 gap-[30px] navigation:grid-cols-1">
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
        className="border-[1px] bg-gray-50 rounded-[8px] p-[20px] py-[80px] flex items-center flex-col justify-center"
      >
        <div className="mb-[20px]">{props.Obj.icon}</div>
        <h1 className="text-[24px] font-[500]">{props.Obj.headline}</h1>
      </Link>
    </Reveal>
  );
};
