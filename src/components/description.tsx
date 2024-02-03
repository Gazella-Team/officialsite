import { Reveal } from "./Animations/Reveal";
import EstimateSheet from "./Modals/EstimateSheet";
import { ArrowUpRight } from "lucide-react";

export default function Description(props: any) {
  return (
    <section className="py-[60px] border-b-[1px] w-[96%] mx-auto">
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
