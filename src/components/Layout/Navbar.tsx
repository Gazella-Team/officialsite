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
      <nav className="fixed w-full bg-white h-[95px] flex items-center z-[10] membersSm:top-0">
        <div className="w-[96%] mx-auto max-w-[1500px] flex justify-between items-center phoneSm:w-[90%]">
          <Link href={"/"}>
            <img className="w-[90px]" src="/logosvg.svg"></img>
          </Link>
          <div className="flex items-center gap-[40px] font-[400]">
            <div className="flex items-center justify-end gap-[30px] text-[16px] font-[400] lg:hidden">
              <Link href={"/ydelser"}>Ydelser</Link>
              <Link href={"/arbejde/cases"}>Arbejde</Link>
              <Link href={"/team"}>Teamet</Link>
              <Link href={"/blog"}>Blog</Link>
              <Link href={"/kontakt"}>Kontakt</Link>
            </div>
          <div className="flex items-center gap-[40px] font-medium ">
            <EstimateSheet>
              <div className="hidden md:flex cursor-pointer select-none px-6 py-2 font-medium items-center gap-[6px] text-center transition-all bg-main rounded-full text-white">
                <p className="font-[400]">Få et estimat på dit projekt</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>
          </div>
          <div
              onClick={() => setMenuClicked(!menuClicked)}
              className="hidden lg:flex items-center gap-[8px] cursor-pointer"
            >
              <p className="font-light">Menu</p>
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
                  <h1>01.</h1>
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
