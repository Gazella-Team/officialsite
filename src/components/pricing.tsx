import { Reveal } from "./Animations/Reveal";

export default function Pricing() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto max-w-main flex justify-between">
        <Reveal>
          <div>
            <h1 className="text-[32px] font-[600] mb-[14px] text-main">
              Priser til alles behov
            </h1>
            <p className="text-gray-600 text-[18px]">
              Find den prisplan som passer dig bedst
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex gap-[30px]">
            <div>
              <p className="bg-gray-50 border-l-[1px] border-r-[1px] border-t-[1px] text-center rounded-t-[6px] py-[10px] text-gray-600">
                Fullstack
              </p>
              <div className="bg-main p-[60px] border-[1px] border-main rounded-[6px] rounded-t-[0px]">
                <h1 className="text-[80px] text-white leading-[60px] mb-[10px]">
                  279
                </h1>
                <p className="text-[18px] text-gray-200">/ DKK Pr. time</p>
              </div>
            </div>
            <div>
              <p className="bg-gray-50 border-l-[1px] border-r-[1px] border-t-[1px] text-center rounded-t-[6px] py-[10px] text-gray-600">
                Kodning og udvikling
              </p>
              <div className="bg-gray-50 p-[60px] border-[1px] rounded-[6px] rounded-t-[0px]">
                <h1 className="text-[80px] text-main leading-[60px] mb-[10px]">
                  249
                </h1>
                <p className="text-[18px] text-gray-600">/ DKK Pr. time</p>
              </div>
            </div>

            <div>
              <p className="bg-gray-50 border-l-[1px] border-r-[1px] border-t-[1px] text-center rounded-t-[6px] py-[10px] text-gray-600">
                Design
              </p>
              <div className="bg-gray-50 p-[60px] border-[1px] rounded-[6px] rounded-t-[0px]">
                <h1 className="text-[80px] text-main leading-[60px] mb-[10px]">
                  199
                </h1>
                <p className="text-[18px] text-gray-600">/ DKK Pr. time</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
