import { Reveal } from "./Animations/Reveal";

export default function ContactInfo() {
  return (
    <section className="py-[50px] bg-[#f2f2f5]">
      <Reveal>
        <div className="w-[92%] mx-auto max-w-main grid grid-cols-contact mid:grid-cols-1">
          <div className="mid:mb-[60px]">
            <h1 className="text-[32px] font-[600] mb-[14px] text-main">
              Kontakt os
            </h1>
            <p className="text-gray-600 text-[18px]">
              Vi glæder os til at høre fra dig
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-[60px] contactSm:grid-cols-1 contactSm:grid-rows-1 contactSm:gap-y-[40px]">
            <div>
              <Reveal>
                <h1 className="font-[600] text-[22px] mb-[10px] text-main">
                  Kontakt
                </h1>
              </Reveal>
              <Reveal>
                <a
                  href="mailto:kontakt@gazellateam.com"
                  className="text-gray-600 text-[18px]"
                >
                  hey@gazellateam.com
                </a>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h1 className="font-[600] text-[22px] mb-[10px] text-main">
                  Support
                </h1>
              </Reveal>

              <Reveal>
                <a
                  href="mailto:info@gazellateam.com"
                  className="text-gray-600 text-[18px]"
                >
                  admin@gazellateam.com
                </a>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h1 className="font-[600] text-[22px] mb-[10px] text-main">
                  Lokation
                </h1>
              </Reveal>

              <Reveal>
                <a
                  href="mailto:job@gazellateam.com"
                  className="text-gray-600 text-[18px]"
                >
                  Islands Brygge 38F <br></br>2300 København S
                </a>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <h1 className="font-[600] text-[22px] mb-[10px] text-main">
                  Ring til os
                </h1>
              </Reveal>

              <Reveal>
                <a href="tel:+4550695272" className="text-gray-600 text-[18px]">
                  +45 5069 5272
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
