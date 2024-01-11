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
      <nav className="py-[14px] fixed w-full bg-white shadow-md z-[2]">
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

          <div className="flex items-center gap-[30px]">
            <div>
              <Link className="flex items-center gap-[10px]" href={"support"}>
                <LifeBuoy size={20} />
                Support
              </Link>
            </div>

            <Link
              className="bg-main text-white p-[10px] px-[20px] text-[14px] rounded-[100px]"
              href={"/kontakt"}
            >
              Book et møde
            </Link>
          </div>

          <img
            onClick={() => setMenuClicked(!menuClicked)}
            className="hidden w-[22px] cursor-pointer xl:inline"
            src={menuClicked ? "/cross.png" : "/menu.png"}
          ></img>
        </div>
      </nav>
    </>
  );
}
