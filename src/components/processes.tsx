import { Reveal } from "./Animations/Reveal";

const processData = [
  {
    heading: "Concept phase",
    description:
      "We understand your vision and requirements, and we develop a structured plan and time schedule for your project.",
  },
  {
    heading: "Design phase",
    description:
      "We design your solution by applying a custom made interface along with a user-friendly system, ensuring a great user experience.",
  },
  {
    heading: "Development phase",
    description:
      "We develop your solution by connecting your requested functionalities with the agreed design, to ensure a satisfying product.",
  },
  {
    heading: "Launch",
    description:
      "When you’re satisfied with the result, we launch your solution on your preferred platforms and media, depending on your project.",
  },
  {
    heading: "Maintenance",
    description:
      "We follow up with the latest technology, and ensure to continuously update your solution, so that it remains bug-free and up to date.",
  },
  {
    heading: "Further development",
    description:
      "But it doesn’t end here. We’re ready to help you with any further changes or implementations you'll need in the future.",
  },
];


export default function Processes(props: any) {
  return (
    <section className="py-[70px] bg-gray-50">
      <div className="w-[95%] max-w-main mx-auto grid grid-cols-features xl:grid-cols-1">
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

