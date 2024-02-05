import { Reveal } from "../Animations/Reveal";

export default function Hero({
  section,
  icon,
  heading,
  background,
}: {
  section: string;
  icon: React.ReactNode;
  heading: string;
  background: string,
}) {
  return (
    <section className={`${background} pt-[400px] pb-[70px] w-[100%] mx-auto`}>
      <Reveal>
        <div className="w-[92%] mx-auto">
          <p className="text-white mb-[14px] uppercase">/ {section}</p>
          <div className="flex items-center gap-[20px]">
            <div className="mid:hidden">{icon}</div>
            <h1 className="text-[80px] font-[600] w-[80%] leading-[80px] text-white  lg:text-[60px] lg:leading-[70px]">
              {heading}
            </h1>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
