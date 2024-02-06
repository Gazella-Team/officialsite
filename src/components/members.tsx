import Link from "next/link";
import { Reveal } from "./Animations/Reveal";
import { useState } from "react";
import { Opc } from "./Animations/Opc";

const memberData = [
  {
    name: "Lasse Osmann",
    position: "Stifter & Frontend Udvikler",
    imageUrl: "/team/lasseosmann.jpg",
    secondImageUrl: "/team/lasseosmann.jpg",
  },
  {
    name: "Simon Maribo",
    position: "Medstifter & backend Udvikler",
    imageUrl: "/team/simonmaribo.jpg",
    secondImageUrl: "/team/simonmaribo.jpg",
  },
  {
    name: "Mik Lønborg",
    position: "Head of outbound",
    imageUrl: "/team/miklonborg.jpg",
    secondImageUrl: "/team/miklonborg.jpg",
  },
  {
    name: "Malte Pedersen",
    position: "Lead Manager",
    imageUrl: "/emptymember.jpg",
    secondImageUrl: "/emptymember.jpg",
  },
];

export default function Members() {
  return (
    <section className="py-[100px]">
      <div className="w-[92%] mx-auto max-w-main">
        <div className="grid grid-cols-4 gap-x-[30px] gap-y-[50px] members:grid-cols-3 membersSm:grid-cols-2 membersSmallest:grid-cols-1">
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
    <Reveal>
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
    </Reveal>
  );
};
