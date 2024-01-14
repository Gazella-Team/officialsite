export default function Dynamic() {
  return (
    <>
      <section className="py-[180px] pt-[260px] bg-gradient-to-r from-[#051d40] via-[#032252] to-[#051d40]">
        <div className="w-[90%] mx-auto max-w-main">
          <h1 className="text-[80px] leading-[90px] w-[76%] font-[500] text-white mb-[20px]">
            Centox
          </h1>
          <p className="text-white text-[18px]">
            En stilistisk web-app til forum management
          </p>
        </div>
      </section>
      <div className="w-[90%] mx-auto bg-white mb-[1000px] mt-[-140px] rounded-[6px] px-[100px] py-[100px] flex items-center justify-between border-[1px]">
        <div>
          <h1 className="tex">Klient</h1>
          <p>Centox</p>
        </div>
        <div>
          <h1 className="tex">Virksomhedstype</h1>
          <p>Digitalt bureau</p>
        </div>
        <div>
          <h1 className="tex">Ydelseskategori</h1>
          <p>Web Applikation</p>
        </div>
      </div>
    </>
  );
}
