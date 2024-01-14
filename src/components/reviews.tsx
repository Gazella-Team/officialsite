import { Reveal } from "./Animations/Reveal";
import Slider from "react-infinite-logo-slider";
import Link from "next/link";

const reviewData = [
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhen gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Founder COAD",
    founder: "/profile.jpg",
    name: "Gustav Walsted",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhen gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhen gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhen gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
  {
    image: "/fivestar.jpg",
    heading: "Kan stærkt anbefales!",
    description:
      "Vi har førhen gjort brug af et anden firma til at markedsføre for os som var ekstremt dårlige… vi ignorerede stort set alle henvendelser efterfølgende da vi ikke ønskede at prøve igen.",
    position: "Co-Founder Leve.",
    founder: "/profile.jpg",
    name: "Jonas Larsen",
  },
];
export default function Reviews() {
  return (
    <section className="py-[100px] pb-[5px] bg-[linear-gradient(rgba(5,29,64,0.90),rgba(5,29,64,0.90)),url(/flyout.jpg)] bg-center bg-cover">
      <Reveal>
        <div>
          <Slider
            width="500px"
            duration={50}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={"#fff"}
          >
            {reviewData.map((v) => (
              <Slider.Slide key={v}>
                <ReviewCard object={v} />
              </Slider.Slide>
            ))}
          </Slider>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex justify-center mb-[100px]">
          <Link
            className="p-[10px] font-[500] px-[16px] rounded-[100px] text-white border-[2px] hover:bg-white hover:text-main transition-all"
            href={"https://dk.trustpilot.com/review/gazellateam.com"}
          >
            Se alle anmeldelser
          </Link>
        </div>
      </Reveal>
    </section>
  );
}

const ReviewCard = ({ object }: { object: any }) => {
  return (
    <div className="mr-[40px] mb-[100px] bg-white shadow-lg p-[30px] rounded-[6px]">
      <img className="w-[120px] mb-[20px]" src={object.image}></img>
      <h1 className="text-[26px] font-[600] mb-[10px]">{object.heading}</h1>
      <p className="mb-[40px] text-[18px]">{object.description}</p>

      <div className="flex gap-[20px] items-center">
        <img
          className="w-[60px] h-[60px] object-cover rounded-[60px] object-top"
          src={object.founder}
        ></img>
        <div className="text-gray-600">
          <p className="text-[18px] ">{object.name}</p>
          <p className="text-[18px]">{object.position}</p>
        </div>
      </div>
    </div>
  );
};
