import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

const workData = [
  {
    company: "Centox.io",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "bg-[linear-gradient(rgba(5,29,64,0.10),rgba(5,29,64,1)),url(/flyout.jpg)]",
    url: "https://centox.io/",
  },
  {
    company: "COAD Agency",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "bg-[linear-gradient(rgba(5,29,64,0.10),rgba(5,29,64,1)),url(/flyout.jpg)]",
    url: "https://centox.io/",
  },
  {
    company: "Organic Masterclass",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "bg-[linear-gradient(rgba(5,29,64,0.10),rgba(5,29,64,1)),url(/flyout.jpg)]",
    url: "https://centox.io/",
  },
  {
    company: "Centox.io",
    date: "01/01/2024",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl:
      "bg-[linear-gradient(rgba(5,29,64,0.10),rgba(5,29,64,1)),url(/flyout.jpg)]",
    url: "https://centox.io/",
  },
];

export default function Work() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] z-[1] mx-auto grid grid-cols-2 gap-x-[40px] gap-y-[40px] max-w-main small:grid-cols-1">
        {workData.map((v, index) => (
          <WorkCard
            date={v.date}
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
}: {
  background: any;
  heading: any;
  date: any;
}) => {
  return (
    <Reveal>
      <div
        className={`${background} bg-main pt-[300px] pb-[30px] rounded-[6px] bg-cover bg-center cursor-pointer`}
      >
        <div className="w-[86%] mx-auto">
          <p className="text-white">{date}</p>
          <h1 className="text-white text-[30px]">{heading}</h1>
        </div>
      </div>
    </Reveal>
  );
};
