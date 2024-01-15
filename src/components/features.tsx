import { Reveal } from "./Animations/Reveal";

export default function Features(props: any) {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto grid grid-cols-features max-w-main xl:grid-cols-1">
        <div className="grid grid-cols-3 gap-[40px] gap-y-[40px] mid:grid-cols-1">
          {props.Obj.map((v: any) => (
            <FeatureCard key={v} Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const FeatureCard = (props: any) => {
  return (
    <Reveal>
      <div>
        <h2 className="text-[24px] font-[600] mb-[14px]">
          {props.Obj.heading}
        </h2>
        <p className="text-[18px] text-gray-600">{props.Obj.description}</p>
      </div>
    </Reveal>
  );
};
