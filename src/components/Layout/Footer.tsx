import Link from "next/link";
import { Reveal } from "../Animations/Reveal";

export default function Footer() {
  return (
    <>
      <footer className="py-[60px] pb-[40px] bg-main text-white">
        <div className="w-[92%] mx-auto max-w-main">
          <div className="flex justify-between pb-[60px] mb-[20px] footer:flex-col footer: gap-[80px]">
            <div className="w-[16%] footer:w-full">
              <img className="w-[100px] mb-[20px]" src="/logo.svg"></img>
              <p className="mb-[20px] text-gray-200 font-[400]">
                Vi udvikler brugbar software til virksomheder
              </p>
              <a href="tel:+4550695272" className="font-[500] text-white">
                +45 5069 5272
              </a>
            </div>
            <div className="flex gap-[70px] items-top justify-center footer:grid footer:grid-cols-2">
              <div>
                <h1 className="text-[18px] font-[600] mb-[20px] text-white">
                  Ydelser
                </h1>
                <div className="flex flex-col gap-[12px] text-gray-200 font-[400]">
                  <Link
                    className="transition-all hover:text-white"
                    href={"/ydelser/webudvikling"}
                  >
                    Webudvikling
                  </Link>
                  <Link
                    className="transition-all hover:text-white"
                    href={"/ydelser/appudvikling"}
                  >
                    Appudvikling
                  </Link>
                  <Link
                    className="transition-all hover:text-white"
                    href={"/ydelser/saas"}
                  >
                    SaaS
                  </Link>

                </div>
              </div>
              <div>
                <h1 className="text-[18px] font-[600] mb-[20px] text-white">
                  Arbejde
                </h1>
                <div className="flex flex-col gap-[12px] text-gray-200 font-[400]">
                  <Link
                    className="transition-all hover:text-white"
                    href={"/arbejde/cases"}
                  >
                    Cases
                  </Link>
                  <Link
                    className="transition-all hover:text-white"
                    href={"/arbejde/priser"}
                  >
                    Priser
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] font-[600] mb-[20px] text-white">
                  Udvikling
                </h1>
                <div className="flex flex-col gap-[12px] text-gray-200 font-[400]">
                  <Link
                    className="transition-all hover:text-white"
                    href={"/udvikling/arbejdsprocesser"}
                  >
                    Arbejdsprocesser
                  </Link>
                  <Link
                    className="transition-all hover:text-white"
                    href={"/udvikling/techstack"}
                  >
                    Tech stack
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] font-[600] mb-[20px] text-white">
                  Virsomheden
                </h1>
                <div className="flex flex-col gap-[12px] text-gray-200 font-[400]">
                  <Link
                    className="transition-all hover:text-white"
                    href={"/team"}
                  >
                    Teamet
                  </Link>
                  <Link
                    className="transition-all hover:text-white"
                    href={"/kontakt"}
                  >
                    Kontakt
                  </Link>
                  <Link
                    className="transition-all hover:text-white"
                    href={"/support"}
                  >
                    Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between membersSm:flex-col membersSm:justify-start membersSm:items-start membersSm:gap-[40px]">
            <p className="text-gray-200">
              &#169; {new Date().getFullYear()} Gazella Team
            </p>
            <div className="flex items-center gap-[40px] text-gray-200">
              <div className="flex items-center gap-[30px] font-[400]">
                <Link target="_blank" href={"https://dk.trustpilot.com/review/gazellateam.com"}>Anmeldelser</Link>
                <Link href={"/partnere"}>Partnere</Link>
              </div>
              <Link
                href={"https://www.linkedin.com/company/gazellateam/"}
                target="_blank"
              >
                <img className="w-[24px]" src="/linkedin.png"></img>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
