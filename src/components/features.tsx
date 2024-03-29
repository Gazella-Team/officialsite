import { Reveal } from "./Animations/Reveal";

export default function Features(props: any) {
  return (
    <section className="py-[70px] bg-gray-50">
      <div className="w-[95%] max-w-main mx-auto lg:w-[90%]">
        <div className="grid grid-cols-3 gap-[20px] gap-y-[20px] lndserv:grid-cols-1">
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
      <div className="bg-white p-[50px] rounded-[14px] shadow-main">
        <h2 className="text-[24px] font-[500] mb-[14px] text-main">
          {props.Obj.heading}
        </h2>
        <p className="text-[18px] font-[400] text-gray-600">
          {props.Obj.description}
        </p>
      </div>
    </Reveal>
  );
};
