import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { Layers, AppWindow, PaintBucket, GaugeCircle, Dot } from "lucide-react";

const toolData = [
  {
    tag: "web-development",
    image: "/react.png",
    headline: "React",
    description:
      "Vi bruger React i relation til web-udvikling for at skabe hurtige, interaktive og strukturerede web-løsninger. Med React har vi mulighed for at genbruge komponenter og optimere hjemmesidens hastighed, således at udviklingsfasen bliver mere effektiv, og brugeroplevelsen så god som overhovedet muligt. React er det mest moderne / fremtidssikrede web-framework, hvilket din løsning afspejler sig i.",
  },
  {
    tag: "web-development",
    image: "/next.png",
    headline: "NextJS",
    description:
      "Next.js bygger videre på React og er et populært React-baseret framework, designet til at lette udviklingen af moderne webapplikationer. Med Next.js har vi mulighed for at bygge avancerede webapplikationer, med server-side rendering og statisk websteds generering. Her kan vi forbedre brugeroplevelsen ved at levere hurtigere indlæsningstider, samt SEO-optimering på Google.",
  },
  {
    tag: "backend",
    image: "/mysql.png",
    headline: "MySQL",
    description:
      "Ved mere funktionelle projekter anvender vi MySQL til at strukturere og opbevare data på en overskuelig, effektiv og sikker måde. Her har vi mulighed for at tilkoble og gemme brugerdata, indstillinger og andre oplysninger til din webløsning, og hermed levere et funktionelt produkt skræddersyet efter dine behov.",
  },
  {
    tag: "backend",
    image: "/nodejs.png",
    headline: "NodeJs",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. Reacts virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "design",
    image: "/figma.png",
    headline: "Figma",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. Reacts virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "design",
    image: "/canva.png",
    headline: "Canva",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. Reacts virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "design",
    image: "/tail.png",
    headline: "Tailwind CSS",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. Reacts virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "bug fixing",
    image: "/chatgpt.png",
    headline: "Chat GPT",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. Reacts virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
];

export default function Tools() {
  return (
    <section className="py-[100px] w-full">
      <div className="w-[92%] mx-auto z-[1] grid grid-cols-2 gap-[30px] lg:grid-cols-1">
        {toolData.map((v) => (
          <ToolCard Obj={v} key={v} />
        ))}
      </div>
    </section>
  );
}

const ToolCard = (props: any) => {
  return (
    <Reveal>
      <div className="border-[1px] bg-gray-50 rounded-[8px] p-[30px] h-full lg:h-full">
        <div className="flex items-center mb-[30px] justify-between">
          <div className=" bg-white inline-block p-[10px] rounded-[8px] border-[1px]">
            <img
              className="w-[40px] h-[40px] object-cover"
              src={props.Obj.image}
              alt="image"
            ></img>
          </div>
          <div className="flex items-center">
            <Dot color="#051d40" />
            <p className="text-gray-600">{props.Obj.tag}</p>
          </div>
        </div>

        <h1 className="text-[24px] font-[500] text-main mb-[20px]">
          {props.Obj.headline}
        </h1>
        <p className="text-[18px] font-[300] text-gray-600">
          {props.Obj.description}
        </p>
      </div>
    </Reveal>
  );
};
