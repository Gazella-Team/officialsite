import { Reveal } from "./Animations/Reveal";

const projectData = [
  {
    heading: "Founder & Failing",
    description:
      "Hos Gazella Team er kunden altid i fokus. Gennem hele processen fra ide til færdigt produkt, sørger vi for, at kundens vision og krav til projektet overholdes, i takt med at vi efter aftale supplerer med vores faglige viden og forslag til forbedring.",
    image: "/defaul",
  },
];

export default function Projects(props: any) {
  return (
    <section className="py-[60px] border-b-[1px]">
      <div className="w-[90%] mx-auto max-w-main">
        <div className="grid grid-cols-1 gap-[40px] gap-y-[50px]">
          {projectData.map((v) => (
            <ProjectCard key={v} Obj={v} />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = (props: any) => {
  return (
    <Reveal>
      <div className="border-[1px] rounded-[6px] bg-gray-50">
        <div className="p-[50px]">
          <h1 className="text-[30px] mb-[20px]">{props.Obj.heading}</h1>
          <p className="w-[80%]">{props.Obj.description}</p>
        </div>
      </div>
    </Reveal>
  );
};
