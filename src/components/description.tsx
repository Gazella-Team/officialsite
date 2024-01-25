import { Reveal } from "./Animations/Reveal";

export default function Description(props: any) {
  return (
    <section className="py-[60px] border-b-[1px]">
      <Reveal>
        <div className="w-[90%] mx-auto max-w-main">
          <p className="text-[24px] text-gray-600 font-[300] w-[80%] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            {props.description}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
