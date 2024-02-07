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
    <section className="py-[200px] ">
      <div className="w-[100%] mx-auto">
        <Slider
          width="230px"
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
      className="p-[20px] px-[10px] bg-white rounded-[8px]"
    >
      <img className="w-[130px]" src={image}></img>
    </Link>
  );
};
