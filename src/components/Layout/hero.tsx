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
    <section className={`pt-[20px] pb-[70px] w-[100%] mx-auto`}>
      <Reveal>
        <div className="w-[92%] mx-auto max-w-main">
          <img className="w-[500px] ml-[-100px] select-none" src="/hropattern.svg"></img>
          <div className="mt-[-300px]">
            <p className="mb-[14px] uppercase font-[400] text-main">/ {section}</p>
          <div className="flex items-center gap-[20px]">
            <h1 className="text-[80px] font-[500] w-[80%] leading-[80px] text-main lg:text-[60px] lg:leading-[70px]">
              {heading}
            </h1>
          </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
