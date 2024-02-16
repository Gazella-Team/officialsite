import { Reveal } from "../Animations/Reveal";
//
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
  description: string,
}) {
  return (
    <>
        <section className={`pt-[140px] pb-[100px] w-[100%] mx-auto bg-[url(/mainherobg.svg)] bg-cover bg-top min-h-[600px]`}>
      <Reveal>
        <div className="w-[95%] mx-auto max-w-main pb-[100px] lg:pb-0 lg:w-[90%]">
          <div>
            <p className="mb-[14px] uppercase font-[400] text-main">/ {section}</p>
          <div className="flex items-center gap-[20px]">
            <h1 className="text-[90px] font-[500] w-[100%] leading-[80px] text-main lg:text-[54px] lg:leading-[64px]">
              {heading}
            </h1>
          </div>
          </div>
        </div>
      </Reveal>
    </section>
    <section className="pb-[100px] mt-[-120px] lg:mt-[-230px]">
      <div className="flex justify-end w-[90%] mx-auto max-w-main">
        <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:w-full lg:text-[20px]">{description}</p>
      </div>
    </section>
    </>

  );
}
