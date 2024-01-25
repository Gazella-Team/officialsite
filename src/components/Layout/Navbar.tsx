import Link from "next/link";
import { useState } from "react";
import { Opc } from "../Animations/Opc";
import { MenuAnimation } from "../Animations/MenuAnimation";

import { Menu, X } from "lucide-react";
import EstimateSheet from "../Modals/EstimateSheet";

export default function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white h-[90px] flex items-center z-[10]">
        <div className="w-[94%] mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <img className="w-[100px]" src="/logosvg.svg"></img>
          </Link>

          <div className="flex items-center gap-[40px]">
            <EstimateSheet>
              <div className="hidden md:flex cursor-pointer select-none px-6 py-2.5 font-semibold text-center transition-all bg-white border-2 rounded-full border-main text-main hover:text-white hover:bg-main">
                Få et estimat på dit projekt
              </div>
            </EstimateSheet>
            <div
              onClick={() => setMenuClicked(!menuClicked)}
              className="flex items-center gap-[8px] cursor-pointer"
            >
              <p className="font-light">Menu</p>
              {menuClicked ? <X /> : <Menu />}
            </div>
          </div>
        </div>
      </nav>
      {menuClicked ? (
        <Opc>
          <div className="overflow-y-auto fixed bg-white left-0 right-0 bottom-0 top-[90px] z-[1]">
            <div className="w-[90%] overflow-y-auto mx-auto flex text-main flex-col justify-between py-[50px] text-[80px] leading-[130px] hero:text-[70px] hero:leading-[110px]">
              <MenuAnimation dlay={0}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px]">
                  <h1>01.</h1>
                  <Link href={"/arbejde/cases"}>Arbejde</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.1}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px]">
                  <h1>02.</h1>
                  <Link href={"/ydelser"}>Ydelser</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.2}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px]">
                  <h1>03.</h1>
                  <Link href={"/om-os"}>Om os</Link>
                </div>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.3}>
                <div className="w-full border-b-[1px] flex items-center gap-[100px] font-[600] py-[0px]">
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
