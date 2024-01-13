import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { Layers, AppWindow, PaintBucket, GaugeCircle, Dot } from "lucide-react";

const toolData = [
  {
    tag: "web-development",
    image: "/react.png",
    headline: "React",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. React’s virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "web-development",
    image: "/next.png",
    headline: "NextJS",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. React’s virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "backend",
    image: "/mysql.png",
    headline: "MySQL",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. React’s virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "backend",
    image: "/nodejs.png",
    headline: "NodeJs",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. React’s virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "design",
    image: "/figma.png",
    headline: "Figma",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. React’s virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "design",
    image: "/canva.png",
    headline: "Canva",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. React’s virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "design",
    image: "/tailwind.png",
    headline: "Tailwind CSS",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. React’s virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
  {
    tag: "bug fixing",
    image: "/chatgpt.png",
    headline: "ChatGPT",
    description:
      "We use React for efficient web app development, creating intricate user interfaces by reusing components to reduce redundancy and simplify maintenance. React’s virtual DOM ensures fast updates, delivering a seamless user experience. Its declarative syntax aids debugging and collaboration, and the extensive ecosystem and community support enable us to build feature-rich apps effectively.",
  },
];

export default function Tools() {
  return (
    <section className="py-[60px] w-full border-b-[1px]">
      <div className="w-[90%] mx-auto max-w-main z-[1] grid grid-cols-2 gap-[30px] lg:grid-cols-1">
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
      <div className="border-[1px] bg-gray-50 rounded-[8px] p-[30px]">
        <div className="flex items-center mb-[30px] justify-between">
          <div className=" bg-white inline-block p-[10px] rounded-[8px] border-[1px]">
            <img
              className="w-[40px] h-[40px] object-cover"
              src={props.Obj.image}
            ></img>
          </div>
          <div className="flex items-center">
            <Dot color="#051d40" />
            <p className="text-gray-600">{props.Obj.tag}</p>
          </div>
        </div>

        <h1 className="text-[24px] font-[500] mb-[20px]">
          {props.Obj.headline}
        </h1>
        <p className="text-[18px] text-gray-600">{props.Obj.description}</p>
      </div>
    </Reveal>
  );
};
