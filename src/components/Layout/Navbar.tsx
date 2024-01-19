import Link from "next/link";
import { useState } from "react";
import { Reveal } from "../Animations/Reveal";
import { Opc } from "../Animations/Opc";
import { MenuAnimation } from "../Animations/MenuAnimation";

import {
  ChevronUp,
  ChevronDown,
  Layers,
  LifeBuoy,
  Menu,
  X,
} from "lucide-react";

export enum PAGES {
  HOME,
  EVENTS,
  ABOUT,
  PARTNER,
  CONTACT,
  SOLUTIONS,
  TEAM,
  CASES,
}

const pages = [
  {
    name: "Forside",
    page: PAGES.HOME,
    link: "/",
  },
  {
    name: "Solutions",
    page: PAGES.SOLUTIONS,
    link: "/solutions",
  },
  {
    name: "About",
    page: PAGES.ABOUT,
    link: "/about",
  },
  {
    name: "Bliv partner",
    page: PAGES.PARTNER,
    link: "/partner",
  },
  {
    name: "Kontakt",
    page: PAGES.CONTACT,
    link: "/kontakt",
  },
  {
    name: "Team",
    page: PAGES.TEAM,
    link: "/team",
  },
  {
    name: "Cases",
    page: PAGES.CASES,
    link: "/cases",
  },
  {
    name: "WebApps",
    page: PAGES.SOLUTIONS,
    link: "/solutions/webapps",
  },
  {
    name: "Websites",
    page: PAGES.SOLUTIONS,
    link: "/solutions/hjemmesider",
  },
];

export default function Navbar({ page }: { page: PAGES }) {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white h-[90px] flex items-center">
        <div className="w-[94%] mx-auto flex justify-between items-center">
          <Link href={"/"}>
            <img className="w-[100px]" src="/logosvg.svg"></img>
          </Link>

          <div
            onClick={() => setMenuClicked(!menuClicked)}
            className="flex items-center gap-[8px] cursor-pointer"
          >
            <p className="font-[300]">Menu</p>
            {menuClicked ? <X /> : <Menu />}
          </div>
        </div>
      </nav>
      {menuClicked ? (
        <Opc>
          <div className="fixed bg-white left-0 right-0 bottom-0 top-[90px]">
            <div className="flex items-center justify-center flex-col py-[40px]">
              <MenuAnimation dlay={0}>
                <Link
                  className="text-[90px] leading-[130px] font-[600]"
                  href={"/"}
                >
                  Arbejde
                </Link>
              </MenuAnimation>
              <MenuAnimation dlay={0.1}>
                <Link
                  className="text-[90px] leading-[130px] font-[600]"
                  href={"/"}
                >
                  Ydelser
                </Link>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.2}>
                <Link
                  className="text-[90px] leading-[130px] font-[600]"
                  href={"/"}
                >
                  Om os
                </Link>
              </MenuAnimation>{" "}
              <MenuAnimation dlay={0.3}>
                <Link
                  className="text-[90px] leading-[130px] font-[600]"
                  href={"/"}
                >
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
