import { Reveal } from "./Animations/Reveal";

const processData = [
  {
    heading: "Konceptfasen",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Designfasen",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Udviklingsfasen",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Launch",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Drift og bug-fixing",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Yderligere drift",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
];


export default function Processes(props: any) {
  return (
    <section className="py-[70px] bg-gray-50">
      <div className="w-[92%] max-w-main mx-auto grid grid-cols-features xl:grid-cols-1">
        <div className="grid grid-cols-3 gap-[20px] gap-y-[20px] mid:grid-cols-1">
          {processData.map((v: any, index:any) => (
            <ProcessCard key={v} Obj={v} count={index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProcessCard = (props: any) => {
  return (
    <Reveal>
      <div className="bg-white p-[50px] rounded-[14px] shadow-main">
        <h2 className="text-[24px] font-[500] mb-[14px] text-main">
          {props.count}.{" "}
          {props.Obj.heading}
        </h2>
        <p className="text-[18px] font-[400] text-gray-600">
          {props.Obj.description}
        </p>
      </div>
    </Reveal>
  );
};

