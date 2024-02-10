import Link from "next/link";
import { useState } from "react";
import { Opc } from "../Animations/Opc";
import { MenuAnimation } from "../Animations/MenuAnimation";
import { ArrowUpRight } from "lucide-react";
import { Menu, X } from "lucide-react";
import EstimateSheet from "../Modals/EstimateSheet";
import { Phone, Mail } from "lucide-react";
import { Reveal } from "../Animations/Reveal";
import { Globe } from "lucide-react";
import Flyout from "../flyout";

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
    <section className="fixed top-0 left-0 right-0 h-[42px] bg-main flex items-center justify-between z-[999]">
    <div className="w-[96%] mx-auto max-w-[1500px] text-white flex items-center justify-between gap-[10px]">
      <Link href={"/"}>{null}</Link>
      <div className="flex items-center gap-[20px]">
      <Link className="flex items-center text-white text-[13px] gap-[6px]" href={"https://officialsitedanish.vercel.app/"}>
              Blog
            </Link>
      <Link className="flex items-center text-white text-[13px] gap-[6px]" href={"https://officialsitedanish.vercel.app/"}>
              Support
            </Link>
      <Link className="flex items-center text-white text-[13px] gap-[6px]" href={"https://officialsitedanish.vercel.app/"}>
            <Globe size={16} />
              Danish
            </Link>
      </div>
    </div>
    </section>

      <nav className="fixed w-full bg-white h-[95px] top-[42px] flex items-center z-[10]">
        <div className="w-[96%] mx-auto max-w-[1500px] flex justify-between items-center phoneSm:w-[92%]">
          <Link href={"/"}>
            <img className="w-[200px]" src="/bluesvg.svg"></img>
          </Link>
          <div className="flex items-center gap-[40px]">
            <div className="flex items-center justify-end gap-[20px] text-[15px] font-[500] text-main footer:hidden">
            <Flyout sublinks={[
  { name: 'Web development', description: 'Get a better understanding of your traffic', href: '/services/web-development', icon: null, },
  { name: 'App development', description: 'Speak directly to your customers', href: '/services/app-development', icon: null, },
  { name: 'SaaS', description: "Your customers' data will be safe and secure", href: '/services/saas', icon: null, },
]} linkName="Services" />
            <Flyout sublinks={[
  { name: 'Cases', description: 'Get a better understanding of your traffic', href: '/work/cases', icon: null, },
  { name: 'Pricing', description: 'Speak directly to your customers', href: '/work/pricing', icon: null, },
]} linkName="Work" /> 
              <Flyout sublinks={[
  { name: 'Tech stack', description: 'Get a better understanding of your traffic', href: '/development/techstack', icon: null, },
  { name: 'Processes', description: 'Speak directly to your customers', href: '/development/processes', icon: null, },
]} linkName="Development" />
              <Flyout sublinks={[
  { name: 'Team', description: 'Get a better understanding of your traffic', href: '/company/team', icon: null, },
  { name: 'Partners', description: 'Speak directly to your customers', href: '/company/partners', icon: null, },
  { name: 'Recommendations', description: "Your customers' data will be safe and secure", href: '/company/recommendations', icon: null, },
  { name: 'Support', description: 'Connect with third-party tools', href: '/company/support', icon: null },
]} linkName="Company" />
<Link href={"/contact"}>Contact</Link>
            </div>
          <div className="flex items-center gap-[20px] font-medium ">
            <EstimateSheet>
              <div className="hidden md:flex text-[15px] cursor-pointer font-[500] select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main">
                <p>Estimate your project</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>
          </div>
          <div
              onClick={() => setMenuClicked(!menuClicked)}
              className="hidden footer:flex items-center gap-[8px] cursor-pointer"
            >
              <p className="font-[500]">Menu</p>
              {menuClicked ? <X size={20} /> : <Menu size={20} />}
            </div>
          </div>
        </div>
      </nav>

      {menuClicked ? (
        <Opc>
          <div className="overflow-y-auto fixed bg-white left-0 right-0 bottom-0 top-[90px] z-[5]">
            <div className="w-[90%] max-w-[1400px] overflow-y-auto mx-auto flex text-main flex-col justify-between py-[50px] text-[70px] leading-[130px] hero:text-[70px] hero:leading-[110px] membersSm:text-[50px] phoneSm:text-[30px] phoneSm:leading-[70px]">
              <MenuAnimation dlay={0.0}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px] leading-[120px] membersSm:leading-[100px] phoneSm:leading-[70px]">
  
                  <Link href={"/ydelser"}>Ydelser</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.1}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] leading-[120px] membersSm:leading-[100px] phoneSm:leading-[70px]">
                  <h1>02.</h1>
                  <Link href={"/arbejde"}>Arbejde</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.1}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] leading-[120px] membersSm:leading-[100px] phoneSm:leading-[70px]">
                  <h1>03.</h1>
                  <Link href={"/udvikling"}>Udvikling</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.2}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px] leading-[120px] membersSm:leading-[100px] phoneSm:leading-[70px]">
                  <h1>04.</h1>
                  <Link href={"/om-os"}>Om os</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.3}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px] leading-[120px] membersSm:leading-[100px] phoneSm:leading-[70px]">
                  <h1>05.</h1>
                  <Link href={"/kontakt"}>Kontakt</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.4}>
                <EstimateSheet>
                  <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px] cursor-pointer membersSm:leading-[100px] phoneSm:leading-[70px]">
                    <h1>06.</h1>
                    <h1>Estimér pris</h1>
                  </div>
                </EstimateSheet>
              </MenuAnimation>
            </div>
          </div>
        </Opc>
      ) : null}
    </>
  );
}
