import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { useState } from "react";

const workData = [
  {
    company: "COAD",
    desc: "Agency landing page",
    description:
      "Cross-platform solution for managing micro-investments and savings",
    imageUrl:
      "/work/cases/coad",
    url: "https://centox.io/",
    link: "/cases/coad/coad.jpeg",
    tag: "Web",
  },
  {
    company: "Organic Masterclass",
    desc: "Online education landing page",
    description:
      "Cross-platform solution for managing micro-investments and savings",
    imageUrl:
      "https://site.organicmasterclass.com/",
    url: "https://centox.io/",
    link: "/cases/organicmasterclass/organicmasterclass.jpg",
    tag: "Web",
  },
    {
    company: "Centox",
    desc: "Forum website builder app",
    description:
      "Cross-platform solution for managing micro-investments and savings",
    imageUrl:
      "https://centox.io/",
    url: "https://centox.io/",
    link: "/flyout.jpg",
    tag: "Web App",
  },
];

export default function Work() {
  return (
    <section className="py-[100px] pt-[50px] ">
      <div className="w-[95%] max-w-main z-[1] mx-auto grid grid-cols-3 gap-x-[20px] gap-y-[50px] lg:w-[90%] lg:grid-cols-2 caselast:grid-cols-1 caselast:gap-y-[100px]">
        {workData.map((v, index) => (
          <WorkCard
            date={v.desc}
            link={v.link}
            heading={v.company}
            background={v.imageUrl}
            description={v.description}
            key={index}
            tag={v.tag}
            desc={v.desc}
            company={v.company}
          />
        ))}
      </div>
    </section>
  );
}

const WorkCard = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link style={{backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6)), url(${props.link})`}} href={props.background} className="hover:opacity-70 transition-all h-[600px] bg-cover bg-center flex flex-col rounded-[14px] justify-between">
      <div className="inline-block">
        <div className="bg-white text-main inline-block m-[20px] p-[10px] rounded-full">
          <p className="font-[500] text-[14px]">{props.tag}</p>
        </div>
      </div>
      <div className="p-[50px] text-white">
        <h1 className="text-[24px] font-[500]">{props.company}</h1>
        <p className="text-[18px] font-[300]">{props.desc}</p>
      </div>
    </Link>
  );
};


