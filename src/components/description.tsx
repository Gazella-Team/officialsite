import { Reveal } from "./Animations/Reveal";
import EstimateSheet from "./Modals/EstimateSheet";
import { ArrowUpRight } from "lucide-react";

export default function Description(props: any) {
  return (
    <div className="mb-[100px]">
          <section className="py-[60px] pt-[0px] w-[100%] mx-auto">
      <Reveal>
        <div className="w-[92%] mx-auto max-w-main flex items-center justify-end">
          <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            {props.description}
          </p>
        </div>
      </Reveal>
    </section>
    </div>

  );
}
