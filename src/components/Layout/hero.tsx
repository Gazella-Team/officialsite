import { Reveal } from "../Animations/Reveal";

export default function Hero({
  section,
  icon,
  heading,
  background,
  description,
}: {
  section: string;
  icon: React.ReactNode;
  heading: string;
  background: string,
  description: JSX.Element
}) {
  return (
    <section className={`pt-[140px] pb-[10px] w-[100%] mx-auto bg-[url(/mainherobg.svg)] bg-cover bg-center`}>
      <Reveal>
        <div className="w-[92%] mx-auto max-w-main pb-[100px]">
          <div>
            <p className="mb-[14px] uppercase font-[400] text-main">/ {section}</p>
          <div className="flex items-center gap-[20px]">
            <h1 className="text-[80px] font-[500] w-[80%] leading-[80px] text-main lg:text-[60px] lg:leading-[70px]">
              {heading}
            </h1>
          </div>
          </div>
        </div>
      </Reveal>
      <div className="mb-[100px] mt-[100px]">
          <section className="py-[60px] pt-[0px] w-[100%] mx-auto">
      <Reveal>
        {description}
      </Reveal>
    </section>
    </div>
    </section>
  );
}
