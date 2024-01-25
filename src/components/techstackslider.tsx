import { Reveal } from "./Animations/Reveal";
import Slider from "react-infinite-logo-slider";
import Link from "next/link";

const techStackSliderData = [
  "/mysql.png",
  "/mysql.png",
  "/mysql.png",
  "/mysql.png",
  "/mysql.png",
  "/mysql.png",
];

export default function TechStackSlider() {
  return (
    <section className="py-[60px] bg-gray-50 border-y-[1px] mt-[200px]">
      <div className="w-[100%] mx-auto">
        <Slider
          width="320px"
          duration={50}
          pauseOnHover={true}
          blurBorders={false}
          blurBoderColor={"#fff"}
        >
          {techStackSliderData.map((v) => (
            <Slider.Slide key={v}>
              <TechStackSliderCard image={v} />
            </Slider.Slide>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const TechStackSliderCard = ({ image }: { image: string }) => {
  return (
    <Link
      href={"/udvikling/techstack"}
      className="p-[20px] px-[70px] border-[1px] bg-white rounded-[8px]"
    >
      <img className="w-[150px]" src={image}></img>
    </Link>
  );
};
