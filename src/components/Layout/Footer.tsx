import Link from "next/link";
import { Reveal } from "../Animations/Reveal";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const currentPath = router.pathname;

  const IdentifySection = () => {
    if (currentPath === "/services/app-development") {
      return "an app"
    }
    else if (currentPath === "/services/saas") {
      return "a SaaS project"
    }
    else if (currentPath === "/services/web-development") {
      return "a web-project"
    }
    else { 
      return "a project"
    }
  }
  return (
    <footer className="bg-main pt-[130px] pb-[40px]">
      <div className="w-[95%] mx-auto text-white mb-[180px] mid:mb-[100px] lg:w-[90%] max-w-main">
        <h1 className="text-[40px] leading-[50px] mb-[40px] font-[500] mid:text-[30px] mid:leading-[40px]">Do you have an idea<br></br> for {IdentifySection()}?</h1>
        <div className="text-[20px] flex flex-col gap-[4px] font-[400] mid:text-[16px]">
        <p>+45 5069 5272</p>
        <p>hey@gazellateam.com</p>
        </div>
      </div>

      <div className="w-[95%] mx-auto flex items-center justify-between max-w-main gap-[20px] text-gray-200 lg:w-[90%] lg:flex-col lg:items-start">
        <div className="flex items-center gap-[20px] mid:flex-col mid:items-start mid:mb-[40px]">
        <p>Gazella Team © {new Date().getFullYear()}</p>
        <p>Islands Brygge 38F st th</p>
        </div>


        <div className="flex items-center gap-[20px]">
        <Link href={"/blog"}>Blog</Link>
        <Link target="_blank" href={"https://dk.trustpilot.com/review/gazellateam.com"}>Recommendations</Link>
        </div>
      </div>
    </footer>
  );
}
