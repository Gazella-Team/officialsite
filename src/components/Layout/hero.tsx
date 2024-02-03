import { Reveal } from "../Animations/Reveal";

export default function Hero({
  section,
  icon,
  heading,
}: {
  section: string;
  icon: React.ReactNode;
  heading: string;
}) {
  return (
    <section className="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/flyout.jpg)] bg-center bg-cover pt-[300px] pb-[70px] w-[96%] mx-auto max-w-[1500px] rounded-[14px]">
      <Reveal>
        <div className="w-[90%] mx-auto max-w-main">
          <p className="text-white mb-[14px] uppercase">/ {section}</p>
          <div className="flex items-center gap-[20px]">
            <div className="mid:hidden">{icon}</div>
            <h1 className="text-[80px] font-[500] w-[80%] leading-[80px] text-white  lg:text-[60px] lg:leading-[70px]">
              {heading}
            </h1>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
