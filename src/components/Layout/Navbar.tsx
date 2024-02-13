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
          <div className="flex items-center gap-[40px]">
            <div className="flex items-center justify-end gap-[20px] text-[15px] font-[500] text-main footer:hidden">
            <Flyout sublinks={[
  { name: 'Web development', description: 'Get a better understanding of your traffic', href: '/services/web-development', icon: null},
  { name: 'App development', description: 'Speak directly to your customers', href: '/services/app-development', icon: null},
]} linkName="Services" />
            <Flyout sublinks={[
  { name: 'Cases', description: 'Get a better understanding of your traffic', href: '/work/cases', icon: null},
  { name: 'Pricing', description: 'Speak directly to your customers', href: '/work/pricing', icon: null},
]} linkName="Work" /> 
              <Flyout sublinks={[
  { name: 'Tech stack', description: 'Get a better understanding of your traffic', href: '/development/techstack', icon: null},
  { name: 'Processes', description: 'Speak directly to your customers', href: '/development/processes', icon: null},
]} linkName="Development" />
              <Flyout sublinks={[
  { name: 'Team', description: 'Speak directly to your customers', href: '/company/team', icon: null},
  { name: 'Products', description: "Your customers' data will be safe and secure", href: '/company/products', icon: null},
  { name: 'Career', description: 'Connect with third-party tools', href: '/company/career', icon: null},

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
              <div className="hidden md:flex text-[15px] cursor-pointer font-[500] bg-main text-white select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main footer:hidden">
                <p>Estimate your project</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>
            <div className="flex items-center text-main gap-[6px] footer:hidden">
              <Link href={"/dansk"}>DK</Link>
              <p>|</p>
              <Link href={"/dansk"}>EN</Link>

            </div>
          </div>
          
        </div>
        
      </nav>

      {menuClicked ? (
        <Opc>
          <div className="hidden footer:flex fixed w-full bg-white top-[90px] bottom-0 py-[30px] z-20 overflow-auto">
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


              <div onClick={() => setDevClicked(!devClicked)} className="flex flex-col justify-center border-b-[1px] py-[30px] cursor-pointer text-main">
                <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-[500]">Development</h1>
                {devClicked ? <X />:<Plus />}
                </div>
                
                {devClicked ? <div className="mt-[20px] flex flex-col gap-[10px]">
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/development/techstack"}>Tech stack<span><ChevronRight strokeWidth={1.3}/></span></Link>
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/development/processes"}>Processes<span><ChevronRight strokeWidth={1.3}/></span></Link>
                </div>:null}
              </div>




              <div onClick={() => setCompanyClicked(!companyClicked)} className="flex flex-col justify-center border-b-[1px] py-[30px] cursor-pointer text-main">
                <div className="flex items-center justify-between">
                <h1 className="text-[20px] font-[500]">Company</h1>
                {companyClicked ? <X />:<Plus />}
                </div>
                
                {companyClicked ? <div className="mt-[20px] flex flex-col gap-[10px]">
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/company/team"}>Team<span><ChevronRight strokeWidth={1.3}/></span></Link>
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/company/products"}>Products<span><ChevronRight strokeWidth={1.3}/></span></Link>
                  <Link onClick={() => setMenuClicked(false)} className="text-[18px] flex items-center" href={"/company/products"}>Career<span><ChevronRight strokeWidth={1.3}/></span></Link>

                </div>:null}
              </div>


              <div className="flex flex-col justify-center border-b-[1px] py-[30px] cursor-pointer text-main">
                <div className="flex items-center justify-between">
                <Link onClick={() => setMenuClicked(false)} href={"/contact"} className="text-[20px] font-[500] flex items-center">Contact<span><ChevronRight strokeWidth={1.3}/></span></Link>
                </div>
              
              </div>
              <div className="flex flex-col gap-[20px] font-medium mt-[40px]">
            <EstimateSheet>
              <div className="hidden footer:flex text-[15px] cursor-pointer font-[500] bg-main text-white select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main ">
                <p>Estimate your project</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>
            <div className="flex items-center text-main gap-[6px]">
              <Link href={"/dansk"}>DK</Link>
              <p>|</p>
              <Link href={"/dansk"}>EN</Link>

            </div>
          </div>
              
              

            </div>
            
          </div>
        </Opc>
      ) : null}
    </>
  );
}
