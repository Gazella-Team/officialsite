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
        <div className="w-[92%] mx-auto max-w-main flex items-center justify-end">
          <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
          Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
          </p>
        </div>
      </Reveal>
    </section>
    </div>
    </section>
  );
}
