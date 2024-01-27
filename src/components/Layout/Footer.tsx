import Link from "next/link";
import { Reveal } from "../Animations/Reveal";

export default function Footer() {
  return (
    <>
      <footer className="py-[60px] border-t-[1px]">
        <div className="w-[90%] mx-auto max-w-main">
          <div className="flex justify-between border-b-[1px] pb-[60px] mb-[20px] footer:flex-col footer: gap-[80px]">
            <div className="w-[16%] footer:w-full">
              <img className="w-[100px] mb-[20px]" src="/logosvg.svg"></img>
              <p className="mb-[20px] text-gray-600">
                Vi udvikler brugbar software til virksomheder
              </p>
              <a href="tel:+4550695272" className="font-[500] text-main">
                +45 5069 5272
              </a>
            </div>
            <div className="flex gap-[70px] items-top justify-center footer:grid footer:grid-cols-2">
              <div>
                <h1 className="text-[18px] font-[600] mb-[20px] text-main">
                  Ydelser
                </h1>
                <div className="flex flex-col gap-[12px] text-gray-600">
                  <Link
                    className="transition-all hover:text-main"
                    href={"/ydelser/webudvikling"}
                  >
                    Web Udvikling
                  </Link>
                  <Link
                    className="transition-all hover:text-main"
                    href={"/ydelser/saas"}
                  >
                    SaaS
                  </Link>
                  <Link
                    className="transition-all hover:text-main"
                    href={"/ydelser/integrationer"}
                  >
                    Integrationer
                  </Link>
                  <Link
                    className="transition-all hover:text-main"
                    href={"/ydelser/automatisering"}
                  >
                    Automatisering
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] font-[600] mb-[20px] text-main">
                  Arbejde
                </h1>
                <div className="flex flex-col gap-[12px] text-gray-600">
                  <Link
                    className="transition-all hover:text-main"
                    href={"/arbejde/cases"}
                  >
                    Kunde Cases
                  </Link>
                  <Link
                    className="transition-all hover:text-main"
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
                    className="transition-all hover:text-main"
                    href={"/udvikling/arbejdsprocesser"}
                  >
                    Arbejdsprocesser
                  </Link>
                  <Link
                    className="transition-all hover:text-main"
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
                    className="transition-all hover:text-main"
                    href={"/om-os"}
                  >
                    Om Os
                  </Link>
                  <Link
                    className="transition-all hover:text-main"
                    href={"/kontakt"}
                  >
                    Kontakt
                  </Link>
                  <Link
                    className="transition-all hover:text-main"
                    href={"/support"}
                  >
                    Support
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="text-[18px] font-[600] mb-[20px] text-main">
                  Legal
                </h1>
                <div className="flex flex-col gap-[12px] text-gray-600">
                  <Link
                    className="transition-all hover:text-main"
                    href={"/legal/privatlivspolitik"}
                  >
                    Privatlivspolitik
                  </Link>
                  <Link
                    className="transition-all hover:text-main"
                    href={"/legal/cookies"}
                  >
                    Cookies
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              &#169; {new Date().getFullYear()} Gazella Team
            </p>
            <Link
              href={"https://www.linkedin.com/company/gazellateam/"}
              target="_blank"
            >
              <img className="w-[24px]" src="/linkedin.png"></img>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
