import { Reveal } from "./Animations/Reveal";

export default function Features(props: any) {
  return (
    <section className="py-[70px] bg-[#f2f2f5]">
      <div className="w-[92%] max-w-main mx-auto grid grid-cols-features xl:grid-cols-1">
        <div className="grid grid-cols-3 gap-[30px] gap-y-[30px] mid:grid-cols-1">
          {props.Obj.map((v: any, index: any) => (
            <FeatureCard key={v} Obj={v} count={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = (props: any) => {
  return (
    <Reveal>
      <div className="bg-white p-[50px] rounded-[8px] shadow-main">
        <h2 className="text-[24px] font-[500] mb-[14px]">
          {props.Obj.heading}
        </h2>
        <p className="text-[18px] font-[400] text-gray-600">
          {props.Obj.description}
        </p>
      </div>
    </Reveal>
  );
};
