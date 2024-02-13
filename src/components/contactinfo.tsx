import { Reveal } from "./Animations/Reveal";

export default function ContactInfo() {
  return (
    <section className="py-[70px] bg-gray-50">
      <Reveal>
        <div className="w-[95%] mx-auto max-w-main grid grid-cols-3 gap-[20px] footer:grid-cols-1 lg:w-[90%]">
        <div className="bg-white p-[50px] rounded-[14px]">
              <Reveal>
                <h1 className="font-[600] text-[24px] mb-[10px] text-main">
                  Phone
                </h1>
              </Reveal>

              <Reveal>
                <a href="tel:+4550695272" className="text-gray-600 text-[18px]">
                  +45 5069 5272
                </a>
              </Reveal>
            </div>
            <div className="bg-white p-[50px] rounded-[14px]">
              <Reveal>
                <h1 className="font-[600] text-[24px] mb-[10px] text-main">
                  Mail
                </h1>
              </Reveal>

              <Reveal>
                <a href="tel:+4550695272" className="text-gray-600 text-[18px]">
                  hey@gazellateam.com
                </a>
              </Reveal>
            </div>
            <div className="bg-white p-[50px] rounded-[14px]">
              <Reveal>
                <h1 className="font-[600] text-[24px] mb-[10px] text-main">
                  Location
                </h1>
              </Reveal>

              <Reveal>
                <a href="tel:+4550695272" className="text-gray-600 text-[18px]">
                  Islands Brygge 38F
                </a>
              </Reveal>
            </div>
        </div>
      </Reveal>
    </section>
  );
}
