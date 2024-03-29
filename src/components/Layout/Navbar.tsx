import Link from "next/link";
import { use, useState } from "react";
import { Opc } from "../Animations/Opc";
import { MenuAnimation } from "../Animations/MenuAnimation";
import { ArrowUpRight, ChevronRight, Plus } from "lucide-react";
import { Menu, X } from "lucide-react";
import EstimateSheet from "../Modals/EstimateSheet";
import { Phone, Mail } from "lucide-react";
import { Reveal } from "../Animations/Reveal";
import { Globe } from "lucide-react";
import Flyout from "../flyout";

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [servicesClicked, setServicesClicked] = useState(false);
  const [workClicked, setWorkClicked] = useState(false);
  const [devClicked, setDevClicked] = useState(false);
  const [companyClicked, setCompanyClicked] = useState(false);

  return (
    <>

      <nav className="fixed w-full bg-white h-[95px] flex items-center z-[10]">
        <div className="w-[95%] mx-auto max-w-[1500px] flex justify-between items-center phoneSm:w-[92%]">
          <Link href={"/"}>
            <img className="w-[90px]" src="/logowhitebg.svg"></img>
          </Link>
          <div className="flex items-center gap-[60px]">
          <div className="flex items-center gap-[40px]">
            <div className="flex items-center justify-end gap-[20px] text-[15px] font-[500] text-main footer:hidden">
            <Flyout sublinks={[
  { name: 'Web development', description: 'Functional web-solutions from A-Z', href: '/services/web-development', icon: null},
  { name: 'App development', description: 'Scaleable cross-platform development', href: '/services/app-development', icon: null},
]} linkName="Services" />
            <Flyout sublinks={[
  { name: 'Cases', description: "Work we're proud of", href: '/work/cases', icon: null},
  { name: 'Pricing', description: 'How much does a project cost?', href: '/work/pricing', icon: null},
]} linkName="Work" /> 
              <Flyout sublinks={[
  { name: 'Team', description: 'People behind Gazella Team', href: '/company/team', icon: null},
  { name: 'Processes', description: 'From idea to functioning solution', href: '/company/processes', icon: null},
  { name: 'Career', description: 'Become a part of our team', href: '/company/career', icon: null},

]} linkName="Company" />
<Link href={"/contact"}>Contact</Link>
            </div>

          <div
              onClick={() => setMenuClicked(!menuClicked)}
              className="hidden footer:flex items-center gap-[8px] cursor-pointer text-main"
            >
              {menuClicked ? <X size={24} /> : <Menu size={24} />}
            </div>
          </div>
          <div className="flex items-center gap-[20px] font-medium footer:hidden">
            <EstimateSheet>
              <div className="hidden md:flex text-[13px] cursor-pointer font-[500] bg-main text-white select-none px-4 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main footer:hidden">
                <p>Estimate your project</p>
                <ArrowUpRight size={16} />
              </div>
            </EstimateSheet>
          </div>
          </div>
          
          
        </div>
        
      </nav>

      {menuClicked ? (
        <Opc>
        
          <div className="hidden footer:flex fixed w-full bg-white top-[90px] bottom-0 py-[30px] z-20 overflow-auto">
          <style jsx>{`
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
            <div className="w-[95%] mx-auto phoneSm:w-[92%]">
            <div onClick={() => setServicesClicked(!servicesClicked)} className="flex flex-col justify-center border-b-[1px] py-[30px] cursor-pointer text-main">
                <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-[500]">Services</h1>
                {servicesClicked ? <X />:<Plus />}
                </div>
                
                {servicesClicked ? <div className="mt-[20px] flex flex-col gap-[10px]">
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/services/web-development"}>Web development<span><ChevronRight strokeWidth={1.3}/></span></Link>
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/services/app-development"}>App development<span><ChevronRight strokeWidth={1.3}/></span></Link>
                </div>:null}
              </div>


              <div onClick={() => setWorkClicked(!workClicked)} className="flex flex-col justify-center border-b-[1px] py-[30px] cursor-pointer text-main">
                <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-[500]">Work</h1>
                {workClicked ? <X />:<Plus />}
                </div>
                
                {workClicked ? <div className="mt-[20px] flex flex-col gap-[10px]">
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/work/cases"}>Cases<span><ChevronRight strokeWidth={1.3}/></span></Link>
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/work/pricing"}>Pricing<span><ChevronRight strokeWidth={1.3}/></span></Link>
                </div>:null}
              </div>

              <div onClick={() => setCompanyClicked(!companyClicked)} className="flex flex-col justify-center border-b-[1px] py-[30px] cursor-pointer text-main">
                <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-[500]">Company</h1>
                {companyClicked ? <X />:<Plus />}
                </div>
                
                {companyClicked ? <div className="mt-[20px] flex flex-col gap-[10px]">
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/company/team"}>Team<span><ChevronRight strokeWidth={1.3}/></span></Link>
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/company/processes"}>Processes<span><ChevronRight strokeWidth={1.3}/></span></Link>
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/company/career"}>Career<span><ChevronRight strokeWidth={1.3}/></span></Link>

                </div>:null}
              </div>


              <div className="flex flex-col justify-center border-b-[1px] py-[30px] cursor-pointer text-main">
                <div className="flex items-center justify-between">
                <Link onClick={() => setMenuClicked(false)} href={"/contact"} className="text-[20px] font-[500] flex items-center">Contact<span><ChevronRight strokeWidth={1.3}/></span></Link>
                </div>
              
              </div>
              <div className="flex flex-col gap-[20px] font-medium mt-[40px]">
            <EstimateSheet>
              <div className="hidden mb-[60px] footer:flex text-[15px] cursor-pointer font-[500] bg-main text-white select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main ">
                <p>Estimate your project</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>
          </div>
              
              

            </div>
            
          </div>
        </Opc>
      ) : null}
    </>
  );
}
