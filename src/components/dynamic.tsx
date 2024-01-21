import { Reveal } from "./Animations/Reveal";

export default function Dynamic() {
  return (
    <>
      <section className="py-[180px] pt-[260px] bg-gradient-to-r from-[#051d40] via-[#032252] to-[#051d40]">
        <div className="w-[90%] mx-auto max-w-main">
          <Reveal>
            <h1 className="text-[80px] leading-[90px] w-[76%] font-[500] text-white mb-[20px]">
              Organic Masterclass
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-white text-[18px]">
              En stilistisk web-app til forum management
            </p>
          </Reveal>
        </div>
      </section>
      <div className="w-[90%] mx-auto bg-white mt-[-140px] rounded-[6px] py-[50px] px-[50px] border-[1px] grid grid-cols-dynamic">
        <div className="py-[50px]">
          <div className="mb-[30px]">
            <h1 className="text-[24px] font-[600]">Klient</h1>
            <p className="text-gray-600">Organic Masterclass</p>
          </div>
          <div className="mb-[30px]">
            <h1 className="text-[24px] font-[600]">Kategori</h1>
            <p className="text-gray-600">Flot Landingsside</p>
          </div>
          <div className="mb-[30px]">
            <h1 className="text-[24px] font-[600]">Konsulenter</h1>
            <p>Lasse Osmann</p>
          </div>
        </div>
        <div>
          <Reveal>
            <video
              className="z-[0] rounded-[6px]"
              width="100%"
              height="100%"
              controls
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Reveal>
        </div>
      </div>
    </>
  );
}
