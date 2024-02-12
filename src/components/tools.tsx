import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { Layers, AppWindow, PaintBucket, GaugeCircle, Dot } from "lucide-react";

const toolData = [
  {
    tag: "web development",
    image: "/react.png",
    headline: "React",
    description:
      "We use React in relation to web development to create fast, interactive and structured web solutions. With React, we have the opportunity to reuse components and optimize the speed of the website, so that the development phase becomes more efficient and the user experience as good as possible. React is the most modern / future-proof web framework.",
  },
  {
    tag: "web development",
    image: "/next.png",
    headline: "NextJS",
    description:
      "Building on React, Next.js is a popular React-based framework designed to facilitate the development of modern web applications. With Next.js we have the possibility to build advanced web applications, with server-side rendering and static website generation. Here we can improve the user experience by providing faster loading times, as well as SEO optimization on Google.",
  },
  {
    tag: "data & backend",
    image: "/mysql.png",
    headline: "MySQL",
    description:
      "MySQL is a client/server program that consists of a server and many different client programs. For more functional projects, we use MySQL to structure and store data in a clear, efficient and secure way. Here we have the opportunity to connect and save user data, settings and other information for your web solution, thereby delivering a functional product tailored to your needs.",
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
    <section className="py-[70px] bg-gray-50 w-full">
      <div className="w-[95%] mx-auto z-[1] grid grid-cols-2 gap-[20px] lg:grid-cols-1">
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
      <div className=" bg-white rounded-[14px] p-[50px] h-full lg:h-full">
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
        <p className="text-[18px] font-[400] text-gray-600">
          {props.Obj.description}
        </p>
      </div>
    </Reveal>
  );
};
