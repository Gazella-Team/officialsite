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
    link: "/arbejde/cases/coad",
    tag: "hjemmeside",
  },
  {
    company: "Organic Masterclass",
    desc: "Forside til sals af onlinekursus",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "/cases/organicmasterclass/organicmasterclass.jpg",
    url: "https://centox.io/",
    link: "/arbejde/cases/organicmasterclass",
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
      <div className="w-[92%] max-w-main z-[1] mx-auto grid grid-cols-3 gap-x-[20px] gap-y-[50px] small:grid-cols-1">
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
      <Link href={link}>
      <div className="flex items-center justify-end absolute">
          <p className="p-[10px] rounded-br-[14px] rounded-tl-[13px] bg-[#f1faff]">{tag}</p>
        </div>
        <img className="h-[450px] w-full object-cover rounded-[14px] mb-[20px]" src={background}></img>
        <h1 className="font-[600] text-[26px] text-main mb-[4px]">{heading}</h1>
        <p className="text-gray-600 text-[18px]">{date}</p>
      </Link>
    </Reveal>
  );
};
