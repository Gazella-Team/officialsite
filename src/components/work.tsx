import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

const workData = [
  {
    company: "COAD",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "bg-[linear-gradient(rgba(5,29,64,0.0),rgba(5,29,64,2)),url(/cases/coad/coad.jpg)]",
    url: "https://centox.io/",
    link: "/arbejde/cases/coad",
  },
  {
    company: "Organic Masterclass",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "bg-[linear-gradient(rgba(5,29,64,0.0),rgba(5,29,64,1)),url(/cases/organicmasterclass/organicmasterclass.jpg)]",
    url: "https://centox.io/",
    link: "/arbejde/cases/organicmasterclass",
  },
  {
    company: "Centox",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "bg-[linear-gradient(rgba(5,29,64,0.0),rgba(5,29,64,1)),url(/cases/organicmasterclass/organicmasterclass.jpg)]",
    url: "https://centox.io/",
    link: "/arbejde/cases/organicmasterclass",
  },
];

export default function Work() {
  return (
    <section className="py-[100px]">
      <div className="w-[92%] max-w-main z-[1] mx-auto grid grid-cols-3 gap-x-[20px] gap-y-[30px]  small:grid-cols-1">
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
        <div
          className={`${background} bg-main pt-[500px] pb-[30px] bg-cover bg-center cursor-pointer hover:opacity-[80%] transition-all`}
        >
          <div className="w-[86%] mx-auto">
            <p className="text-white font-[400]">{date}</p>
            <h1 className="text-white text-[30px] font-[300]">{heading}</h1>
          </div>
        </div>
      </Link>
    </Reveal>
  );
};
