import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

const workData = [
  {
    company: "COAD",
    desc: "Unik bureau landingsside",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "/cases/coad/coad.jpg",
    url: "https://centox.io/",
    link: "/work/cases/coad",
    tag: "hjemmeside",
  },
  {
    company: "Organic Masterclass",
    desc: "Forside til sals af onlinekursus",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "bg-[url(/herobg/auto.jpg)]",
    url: "https://centox.io/",
    link: "/work/cases/organicmasterclass",
    tag: "hjemmeside",
  },
  {
    company: "Centox",
    desc: "Web-baseret forum website builder",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
    "/cases/centox/centox.jpg",
    url: "https://centox.io/",
    link: "/arbejde/cases/organicmasterclass",
    tag: "web-app",
  },
];

export default function Work() {
  return (
    <section className="py-[100px] pt-[50px] ">
      <div className="w-[95%] max-w-main z-[1] mx-auto grid grid-cols-3 gap-x-[20px] gap-y-[50px] small:grid-cols-1 lg:w-[90%]">
        {workData.map((v, index) => (
          <WorkCard
            date={v.desc}
            link={v.link}
            heading={v.company}
            background={v.imageUrl}
            key={index}
            tag={v.tag}
          />
        ))}
      </div>
    </section>
  );
}

const WorkCard = ({
  background,
  heading,
  date,
  link,
  tag,
}: {
  background: any;
  heading: any;
  date: any;
  link: any;
  tag: any;
}) => {
  return (
    <Reveal>
      <Link href={link} className={`bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.70)),url(/cases/centox/centox.jpg)] h-[600px] bg-cover bg-center flex flex-col justify-end hover:opacity-90 transition-all rounded-[14px]`}>
        <div className="p-[40px]">
        <h1 className="font-[500] text-[26px] text-white mb-[4px]">{heading}</h1>
        <p className="text-gray-200 font-[400] text-[18px]">{date}</p>
        </div>
      </Link>
    </Reveal>
  );
};
