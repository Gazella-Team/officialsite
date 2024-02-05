import { Reveal } from "./Animations/Reveal";
import EstimateSheet from "./Modals/EstimateSheet";
import { ArrowUpRight } from "lucide-react";

export default function Description(props: any) {
  return (
    <div className="border-b-[1px]">
          <section className="py-[60px] w-[100%] mx-auto">
      <Reveal>
        <div className="w-[92%] mx-auto">
          <p className="text-[22px] text-gray-600 font-[400] w-[80%] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            {props.description}
          </p>
        </div>
      </Reveal>
    </section>
    </div>

  );
}
