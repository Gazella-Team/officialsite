import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

const workData = [
  {
    company: "COAD",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "/cases/coad/coad.jpg",
    url: "https://centox.io/",
    link: "/arbejde/cases/coad",
  },
  {
    company: "Organic Masterclass",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "/cases/organicmasterclass/organicmasterclass.jpg",
    url: "https://centox.io/",
    link: "/arbejde/cases/organicmasterclass",
  },
  {
    company: "Centox",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
    "/cases/mobile.webp",
    url: "https://centox.io/",
    link: "/arbejde/cases/organicmasterclass",
  },
];

export default function Work() {
  return (
    <section className="py-[100px] pt-[50px]">
      <div className="w-[92%] max-w-main z-[1] mx-auto grid grid-cols-3 gap-x-[20px] gap-y-[50px] small:grid-cols-1">
        {workData.map((v, index) => (
          <WorkCard
            date={v.date}
            link={v.link}
            heading={v.company}
            background={v.imageUrl}
            key={index}
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
}: {
  background: any;
  heading: any;
  date: any;
  link: any;
}) => {
  return (
    <Reveal>
      <Link href={link}>
        <img className="h-[450px] w-full object-cover rounded-[14px] mb-[20px] hover:opacity-65 transition-all" src={background}></img>
        <h1 className="font-[600] text-[26px] text-main mb-[6px]">{heading}</h1>
        <p className="text-gray-600 text-[18px]">{date}</p>
      </Link>
    </Reveal>
  );
};
