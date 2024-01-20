import Link from "next/link";
import { Reveal } from "../Animations/Reveal";

export default function Footer() {
  return (
    <>
      <footer className="py-[60px]">
        <Reveal>
          <div className="w-[90%] mx-auto max-w-main">
            <div className="flex justify-between border-b-[1px] pb-[60px] mb-[20px] footer:flex-col footer: gap-[80px]">
              <div className="w-[16%] footer:w-full">
                <img className="w-[100px] mb-[20px]" src="/logosvg.svg"></img>
                <p className="mb-[20px] text-gray-600">
                  Vi udvikler brugbar software til virksomheder
                </p>
                <p className="font-[500]">+45 5069 5272</p>
              </div>
              <div className="flex gap-[100px] items-top justify-center footer:grid footer:grid-cols-2">
                <div>
                  <h1 className="text-[18px] font-[600] mb-[20px] text-main">
                    Ydelser
                  </h1>
                  <div className="flex flex-col gap-[12px] text-gray-600">
                    <Link
                      className="hover:text-main transition-all"
                      href={"/ydelser/webudvikling"}
                    >
                      Web Udvikling
                    </Link>
                    <Link
                      className="hover:text-main transition-all"
                      href={"/ydelser/uiux"}
                    >
                      UI/UX Design
                    </Link>
                    <Link
                      className="hover:text-main transition-all"
                      href={"/ydelser/hastighedsoptimering"}
                    >
                      Hastighedsoptimering
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className="text-[18px] font-[600] mb-[20px] text-main">
                    Arbejde
                  </h1>
                  <div className="flex flex-col gap-[12px] text-gray-600">
                    <Link
                      className="hover:text-main transition-all"
                      href={"/arbejde/cases"}
                    >
                      Kunde Cases
                    </Link>
                    <Link
                      className="hover:text-main transition-all"
                      href={"/arbejde/priser"}
                    >
                      Priser
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className="text-[18px] font-[600] mb-[20px] text-main">
                    Udvikling
                  </h1>
                  <div className="flex flex-col gap-[12px] text-gray-600">
                    <Link
                      className="hover:text-main transition-all"
                      href={"/udvikling/arbejdsprocesser"}
                    >
                      Arbejdsprocesser
                    </Link>
                    <Link
                      className="hover:text-main transition-all"
                      href={"/udvikling/techstack"}
                    >
                      Tech Stack
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className="text-[18px] font-[600] mb-[20px] text-main">
                    Virsomheden
                  </h1>
                  <div className="flex flex-col gap-[12px] text-gray-600">
                    <Link
                      className="hover:text-main transition-all"
                      href={"/om-os"}
                    >
                      Om Os
                    </Link>
                    <Link
                      className="hover:text-main transition-all"
                      href={"/kontakt"}
                    >
                      Kontakt
                    </Link>
                    <Link
                      className="hover:text-main transition-all"
                      href={"/support"}
                    >
                      Support
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                &#169; {new Date().getFullYear()} Gazella Team
              </p>
              <Link href={"https://www.linkedin.com/company/gazellateam/"}>
                <img className="w-[24px]" src="/linkedin.png"></img>
              </Link>
            </div>
          </div>
        </Reveal>
      </footer>
    </>
  );
}
