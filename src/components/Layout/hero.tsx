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
    <>
        <section className={`pt-[140px] pb-[100px] w-[100%] mx-auto bg-[url(/mainherobg.svg)] bg-cover bg-top min-h-[600px]`}>
      <Reveal>
        <div className="w-[95%] mx-auto max-w-main pb-[100px] lg:pb-0 hro:w-[90%]">
          <div>
            <p className="mb-[14px] uppercase font-[400] text-main font-[Inter]">/ {section}</p>
          <div className="flex items-center gap-[20px]">
            <h1 className="text-[80px] font-[500] w-[80%] font-[Martel] leading-[80px] text-main lg:text-[60px] lg:leading-[70px]">
              {heading}
            </h1>
          </div>
          </div>
        </div>
      </Reveal>
    </section>
    <section className="pb-[100px] mt-[-120px] lg:mt-[-230px]">
      <div className="flex justify-end w-[90%] mx-auto">
        <p className="text-[22px] w-[68%] font-[300] lg:w-full lg:text-[20px]">Gazella Team consists of a team of ambitious, innovative and smiling developers and designers who are passionate about creating unique digital solutions every day. We focus on tailormaking each solution to the specific project. Therefore you can expect a reliable competent partner who supplies with knowledge and delivers on time at the agreed price.</p>
      </div>
    </section>
    </>

  );
}
