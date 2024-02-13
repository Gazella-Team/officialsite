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
      "https://coad.dk/en",
    url: "https://centox.io/",
    link: "/cases/coad/coad.jpeg",
    tag: "hjemmeside",
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
    tag: "hjemmeside",
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
    tag: "hjemmeside",
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
    <Link target="_blank" href={props.background} className="hover:opacity-70 transition-all">
      <div className="aspect-w-1 aspect-h-1">
        <img
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="aspect-w-1 aspect-h-1 object-cover h-[400px] mb-[20px] w-full object-cover transition-all rounded-[14px]"
          src={props.link}
        ></img>

        <h1 className="text-[24px] font-[500] text-main mb-[4px]">{props.company}</h1>
        <p className="text-gray-600 text-[18px] font-[400]">{props.desc}</p>
      </div>
    </Link>
  );
};


