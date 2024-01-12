const processData = [
  {
    heading: "Opstartsmøde",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Opstartsmøde",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Opstartsmøde",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
  {
    heading: "Opstartsmøde",
    description:
      "Our data protection program encompasses data governance and security, proactive system maintenance, and threat response. From strategy through implementation, we have the resources  ",
  },
];

export default function Process() {
  return (
    <section className="py-[100px] border-b-[1px]">
      <div className="w-[90%] mx-auto flex justify-between gap-[170px]">
        <div className="w-[70%]">
          <h1 className="text-[32px] font-[600] text-main">
            Fra ide til produkt
          </h1>
        </div>

        <div className="grid grid-cols-2 gap-[60px] gap-y-[50px]">
          {processData.map((v) => (
            <ProcessCard key={v} Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProcessCard = (props: any) => {
  return (
    <div>
      <h1 className="font-[600] text-[22px] mb-[10px] text-main">
        {props.Obj.heading}
      </h1>
      <p className="text-gray-600 text-[18px]">{props.Obj.description}</p>
    </div>
  );
};
