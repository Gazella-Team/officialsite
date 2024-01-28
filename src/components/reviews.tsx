import { Reveal } from "./Animations/Reveal";
import Slider from "react-infinite-logo-slider";
import Link from "next/link";

const reviewData = [
  {
    image: "/fivestar.jpg",
    heading: "11/10 hvis muligt!",
    description:
      "Vi har førhen gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Medstifter, Organic Masterclass",
    founder: "/profile.jpg",
    name: "Sebastian Madsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales",
    description:
      "Vi har førhen gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Stifter, COAD",
    founder: "/profile.jpg",
    name: "Gustav Walsted",
  },
];

export default function Reviews() {
  return (
    <section className="py-[60px] w-full">
      <div className="w-[90%] mx-auto max-w-main grid grid-cols-2 gap-[30px] lg:grid-cols-1">
        {reviewData.map((v, index) => (
          <ReviewCard key={index} object={v} />
        ))}
      </div>
    </section>
  );
}

const ReviewCard = ({ object }: { object: any }) => {
  return (
    <Reveal>
      <div className="bg-gray-50 border-[1px] p-[30px] rounded-[6px] text-main">
        <img className="w-[120px] mb-[20px]" src={object.image}></img>
        <h1 className="text-[26px] font-[500] mb-[10px]">{object.heading}</h1>
        <p className="mb-[40px] text-[18px] text-gray-600 font-light">
          {object.description}
        </p>

        <div className="flex gap-[20px] items-center">
          <img
            className="w-[60px] h-[60px] object-cover rounded-[60px] object-top"
            src={object.founder}
          ></img>
          <div className="text-gray-600">
            <p className="text-[18px] text-main font-[500]">{object.name}</p>
            <p className="text-[18px] font-light">{object.position}</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
