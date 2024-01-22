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
              <div className="cursor-pointer select-none px-6 py-2.5 font-semibold text-center transition-all bg-white border-2 rounded-full border-main text-main hover:text-white hover:bg-main">
                Få et estimat på dit projekt
              </div>
            </EstimateSheet>
            <div
              onClick={() => setMenuClicked(!menuClicked)}
              className="flex items-center gap-[8px] cursor-pointer"
            >
              <p className="font-medium">Menu</p>
              {menuClicked ? <X /> : <Menu />}
            </div>
          </div>
        </div>
      </nav>
      {menuClicked ? (
        <Opc>
          <div className="fixed bg-white left-0 right-0 bottom-0 top-[90px] z-[999]">
            <div className="flex items-center justify-center flex-col py-[40px] text-[90px] leading-[130px] hero:text-[70px] hero:leading-[110px]">
              <MenuAnimation dlay={0}>
                <Link className="font-[600]" href={"/arbejde/cases"}>
                  Arbejde
                </Link>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.1}>
                <Link className="font-[600]" href={"/ydelser"}>
                  Ydelser
                </Link>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.2}>
                <Link className="font-[600]" href={"/om-os"}>
                  Om os
                </Link>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.3}>
                <Link className="font-[600]" href={"/kontakt"}>
                  Kontakt
                </Link>
              </MenuAnimation>
            </div>
          </div>
        </Opc>
      ) : null}
    </>
  );
}
