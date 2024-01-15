import Link from "next/link";
import { useState } from "react";
import { Reveal } from "../Animations/Reveal";
import { Opc } from "../Animations/Opc";

import { ChevronUp, ChevronDown, Layers, LifeBuoy } from "lucide-react";

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
      <nav className="py-[14px] fixed w-full bg-white shadow-md z-[10]">
        <div className="w-[98%] mx-auto max-w-[1400px] flex items-center justify-between">
          <div className="flex items-center gap-[90px]">
            <Link href={"/"}>
              {" "}
              <img
                alt="gazella logo"
                src="/logosvg.svg"
                className="w-[100px]"
              ></img>
            </Link>

            <div className="flex items-center gap-[40px] xl:hidden">
              <Link href={"/ydelser"}>Ydelser</Link>
              <Link href={"/arbejde"}>Arbejde</Link>
              <Link href={"/udvikling"}>Udvikling</Link>
              <Link href={"/om-os"}>Om os</Link>
              <Link href={"/kontakt"}>Kontakt</Link>
            </div>
          </div>

          <div className="flex items-center gap-[30px] xl:hidden">
            <Link
              className="bg-main text-white p-[10px] px-[20px] text-[14px] rounded-[100px] hover:text-gray-400"
              href={"/kontakt"}
            >
              Snak med os
            </Link>
          </div>

          <img
            onClick={() => setMenuClicked(!menuClicked)}
            className="hidden w-[22px] cursor-pointer xl:inline"
            src={menuClicked ? "/cross.png" : "/menu.png"}
          ></img>
        </div>
      </nav>
      {menuClicked ? (
        <div className="fixed z-[9] bg-white top-[79px] w-full shadow-md py-[100px] smaller:hidden">
          <Reveal>
            <div className="w-[90%] mx-auto max-w-main flex flex-col gap-[20px] text-[40px] text-main font-[500] text-center">
              <Link href={"/ydelser"}>Ydelser</Link>
              <Link href={"/arbejde"}>Arbejde</Link>
              <Link href={"/udvikling"}>Udvikling</Link>
              <Link href={"/om-os"}>Om os</Link>
              <Link href={"/kontakt"}>Kontakt</Link>
            </div>
          </Reveal>
        </div>
      ) : null}
    </>
  );
}
