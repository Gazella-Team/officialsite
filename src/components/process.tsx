import { Reveal } from "./Animations/Reveal";

const processData = [
  {
    heading: "Opstartsmøde",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Vi forstår dit projekt",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Vi designer dit projekt",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Udvikling af din ide",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Produkt Launch",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Yderligere vedligeholdelse",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
];

export default function Process() {
  return (
    <section className="py-[100px] border-b-[1px]">
      <div className="w-[90%] mx-auto flex max-w-main justify-between gap-[170px]">
        <div className="w-[74%]">
          <Reveal>
            <div>
              <h1 className="text-[32px] font-[600] text-main mb-[10px]">
                Fra ide til produkt
              </h1>
              <p className="text-gray-600 text-[18px]">
                Vores process sikrer, at dit projekt bliver eksekveret bedst
                muligt
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-[60px] gap-y-[50px]">
          {processData.map((v, index) => (
            <ProcessCard key={index} Obj={v} count={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProcessCard = (props: any) => {
  return (
    <Reveal>
      <div>
        <h1 className="font-[600] text-[22px] mb-[10px] text-main">
          {props.count}. {props.Obj.heading}
        </h1>
        <p className="text-gray-600 text-[18px]">{props.Obj.description}</p>
      </div>
    </Reveal>
  );
};
