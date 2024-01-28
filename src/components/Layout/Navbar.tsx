import Link from "next/link";
import { useState } from "react";
import { Opc } from "../Animations/Opc";
import { MenuAnimation } from "../Animations/MenuAnimation";
import { ArrowUpRight } from "lucide-react";
import { Menu, X } from "lucide-react";
import EstimateSheet from "../Modals/EstimateSheet";
import { Phone, Mail } from "lucide-react";
import { Reveal } from "../Animations/Reveal";

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <div className="bg-main flex items-center text-white h-[45px] fixed w-full z-[10]">
        <div className="w-[96%] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-[30px] font-light text-[14px]">
            <Reveal>
              <Link className="flex items-center gap-[6px]" href={"mail"}>
                <Mail size={16} />
                hey@gazellateam.com
              </Link>
            </Reveal>
            <Reveal>
              <Link className="flex items-center gap-[6px]" href={"mail"}>
                <Phone size={16} />
                +45 5069 5272
              </Link>
            </Reveal>
          </div>
          <div className="flex items-center gap-[20px] font-light text-[14px]">
            <Reveal>
              <Link href={"/hvorfor-os"}>Hvorfor Gazella Team</Link>
            </Reveal>
            <Reveal>
              <Link href={"/udvikling/techstack"}>Tech stack</Link>
            </Reveal>
            <Reveal>
              <Link href={"/anmeldelser"}>Anmeldelser</Link>
            </Reveal>
            <Reveal>
              <Link href={"/blog"}>Blog</Link>
            </Reveal>
            <Reveal>
              <Link href={"/legal"}>Juridisk</Link>
            </Reveal>
          </div>
        </div>
      </div>

      <nav className="fixed w-full bg-white h-[90px] top-[45px] flex items-center z-[10]">
        <div className="w-[94%] mx-auto flex justify-between items-center">
          <Reveal>
            <Link href={"/"}>
              <img className="w-[100px]" src="/logosvg.svg"></img>
            </Link>
          </Reveal>

          <div className="flex items-center gap-[40px]">
            <Reveal>
              <EstimateSheet>
                <div className="hidden md:flex cursor-pointer select-none px-6 py-2 font-medium flex items-center gap-[6px] text-center transition-all bg-white border-[1px] rounded-full text-main hover:text-white hover:bg-main">
                  <p className="font-light">Få et estimat på dit projekt</p>
                  <ArrowUpRight size={20} />
                </div>
              </EstimateSheet>
            </Reveal>
            <Reveal>
              <div
                onClick={() => setMenuClicked(!menuClicked)}
                className="flex items-center gap-[8px] cursor-pointer"
              >
                <p className="font-light">Menu</p>
                {menuClicked ? <X size={20} /> : <Menu size={20} />}
              </div>
            </Reveal>
          </div>
        </div>
      </nav>

      {menuClicked ? (
        <Opc>
          <div className="overflow-y-auto fixed bg-white left-0 right-0 bottom-0 top-[90px] z-[1]">
            <div className="w-[90%] overflow-y-auto mx-auto flex text-main flex-col justify-between py-[50px] text-[70px] leading-[130px] hero:text-[70px] hero:leading-[110px]">
              <MenuAnimation dlay={0}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] leading-[120px]">
                  <h1>01.</h1>
                  <Link href={"/arbejde/cases"}>Arbejde</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.1}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px] leading-[120px]">
                  <h1>02.</h1>
                  <Link href={"/ydelser"}>Ydelser</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.2}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px] leading-[120px]">
                  <h1>03.</h1>
                  <Link href={"/om-os"}>Om os</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.3}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px] leading-[120px]">
                  <h1>04.</h1>
                  <Link href={"/kontakt"}>Kontakt</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.4}>
                <EstimateSheet>
                  <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px] cursor-pointer">
                    <h1>05.</h1>
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
