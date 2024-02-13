import { Reveal } from "./Animations/Reveal";

const jobData = [{first:"default"}]

export default function Job() {
    return (
        <section className="py-[70px] bg-gray-50">
        <div className="w-[95%] max-w-main mx-auto grid grid-cols-features xl:grid-cols-1 lg:w-[90%]">
          <div className="grid grid-cols-1 gap-[20px] gap-y-[20px] mid:grid-cols-1">
            {jobData.length > 1 ? <div>{jobData.map(v => <JobCard key={v} Obj={v} />)}</div>:
            <div className="bg-white rounded-[14px] p-[50px]">
                <h1 className="text-[24px] mb-[14px] text-main font-[500]">There are no open positions at the moment</h1>
                <p className="text-[18px] font-[400] text-gray-600">You can still feel free to contact us by sending an application to hey@gazellateam.com</p>
            </div>
            
            }
          </div>
        </div>
      </section>
    )
}

  
  const JobCard = (props: any) => {
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