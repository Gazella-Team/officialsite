import { Reveal } from "./Animations/Reveal";
import FAQ from "./faq";

export default function Pricing() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto max-w-main">
        <Reveal>
          <div className="grid grid-cols-3 gap-[30px] lg:grid-cols-1">
            <div>
              <p className="bg-gray-50 border-l-[1px] border-r-[1px] border-t-[1px] text-center rounded-t-[6px] py-[10px] text-gray-600">
                Fullstack fra
              </p>
              <div className="bg-gray-50 p-[60px] border-[1px] rounded-[6px] rounded-t-[0px] text-center">
                <h1 className="text-[80px] text-main leading-[60px] mb-[10px]">
                  279
                </h1>
                <p className="mt-4 text-[18px] text-gray-600">/ DKK pr. time</p>
              </div>
            </div>
            <div>
              <p className="bg-gray-50 border-l-[1px] border-r-[1px] border-t-[1px] text-center rounded-t-[6px] py-[10px] text-gray-600">
                Udvikling fra
              </p>
              <div className="bg-gray-50 p-[60px] border-[1px] rounded-[6px] rounded-t-[0px] text-center">
                <h1 className="text-[80px] text-main leading-[60px] mb-[10px]">
                  249
                </h1>
                <p className="mt-4 text-[18px] text-gray-600">/ DKK pr. time</p>
              </div>
            </div>

            <div>
              <p className="bg-gray-50 border-l-[1px] border-r-[1px] border-t-[1px] text-center rounded-t-[6px] py-[10px] text-gray-600">
                Design fra
              </p>
              <div className="bg-gray-50 p-[60px] border-[1px] rounded-[6px] rounded-t-[0px] text-center">
                <h1 className="text-[80px] text-main leading-[60px] mb-[10px]">
                  199
                </h1>
                <p className="mt-4 text-[18px] text-gray-600">/ DKK pr. time</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <FAQ />
    </section>
  );
}
