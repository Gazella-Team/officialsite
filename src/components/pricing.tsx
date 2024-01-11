export default function Pricing() {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto max-w-main flex justify-between">
        <div>
          <h1>Pris</h1>
          <p>Pris beskrivelse</p>
        </div>
        <div>
          <h1 className="text-[80px] text-main leading-[60px] mb-[10px]">
            249
          </h1>
          <p className="text-[18px] text-gray-600">/ DKK Pr. time</p>
        </div>
      </div>
    </section>
  );
}
