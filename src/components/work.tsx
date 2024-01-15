import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

const workData = [
  {
    company: "Centox.io",
    date: "En discord-fokuseret webapp til ledelse af applikationer",
    description:
      "Cross-platform solution for managing micro-investments and savings, compatible with SAMA fintech regulations including multi-factor authorization and KYC verification",
    imageUrl: "/centox.jpg",
    url: "https://centox.io/",
  },
];

export default function Work() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] z-[1] mx-auto grid grid-cols-1 gap-x-[40px] gap-y-[40px] max-w-main small:grid-cols-1">
        {workData.map((v) => (
          <WorkCard Obj={v} key={v} />
        ))}
      </div>
    </section>
  );
}

const WorkCard = (props: any) => {
  return (
    <Reveal>
      <div className="bg-main h-[400px]">
        <div className="w-[86%] mx-auto">
          <h1>hey</h1>
        </div>
      </div>
    </Reveal>
  );
};
