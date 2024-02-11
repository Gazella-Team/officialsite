import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { useState } from "react";
import { Opc } from "./Animations/Opc";

const memberData = [
  {
    name: "Lasse Osmann",
    position: "Founder & Developer",
    imageUrl: "/team/lasseosmann.jpg",
    secondImageUrl: "/team/lasseosmann.jpg",
    linkedIn: "https://www.linkedin.com/in/lasse-osmann-%F0%9F%91%8B-1b6ab9243/"
  },
  {
    name: "Simon Maribo",
    position: "Co-Founder & Developer",
    imageUrl: "/team/simonmaribo.jpg",
    secondImageUrl: "/team/simonmaribo.jpg",
    linkedIn: "https://www.linkedin.com/in/simonmaribo/"
  },
  {
    name: "Mik Lønborg",
    position: "Head of outbound",
    imageUrl: "/team/miklonborg.jpg",
    secondImageUrl: "/team/miklonborg.jpg",
    linkedIn: "https://www.linkedin.com/in/mik-l%C3%B8nborg/"
  },
  {
    name: "Malte Pedersen",
    position: "Lead Manager",
    imageUrl: "/emptymember.jpg",
    secondImageUrl: "/emptymember.jpg",
    linkedIn: "https://www.linkedin.com/in/malte-pedersen-2689772ab/"
  },
];

export default function Members() {
  return (
    <section className="py-[100px] pt-[50px]">
      <div className="w-[95%] mx-auto max-w-main">
        <div className="grid grid-cols-4 gap-x-[20px] gap-y-[50px] members:grid-cols-3 membersSm:grid-cols-2 membersSmallest:grid-cols-1">
          {memberData.map((v) => (
            <MemberCard key={v} Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const MemberCard = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link target="_blank" href={props.Obj.linkedIn} className="hover:opacity-70 transition-all">
      <div>
        <img
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="aspect-w-1 aspect-h-1 object-cover object-top mb-[20px] transition-all rounded-[14px]"
          src={isHovered ? props.Obj.secondImageUrl : props.Obj.imageUrl}
        ></img>

        <h1 className="text-[20px] font-[500] text-main">{props.Obj.name}</h1>
        <p className="text-gray-600 font-[400]">{props.Obj.position}</p>
      </div>
    </Link>
  );
};
