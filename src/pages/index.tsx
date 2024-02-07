import Link from "next/link";
import { Reveal } from "@/components/Animations/Reveal";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import TechStackSlider from "@/components/techstackslider";
import Cta from "@/components/Layout/Cta";
import Meta from "@/components/Layout/Meta";
import Hero from "@/components/Layout/hero";
import Layout from "@/components/Layout";
import Testimonials from "@/components/testimonials";
import Typewrite from "@/components/typewrite";
import EstimateSheet from "@/components/Modals/EstimateSheet";
import { ArrowUpRight } from "lucide-react";
import Work from "@/components/work";
import { ChevronRight } from "lucide-react";
import LandigServices from "@/components/landingservices";

export default function Index() {
  return (
    <>
      <Meta />
      <Layout>
      <img className="select-none mt-[-500px] ml-[-200px] items-end w-[1300px] xl:w-[1600px] hro:hidden" src="/heropattern.webp"></img>
      <section className="py-[100px] pb-[0px] w-[100%] mx-auto max-w-none mt-[-780px] xl:mt-[-1000px] xl:mb-[600px] mb-[400px] hro:mt-0 hro:bg-[#f1faff] hro:py-[100px] hro:mb-[100px]">
      <Reveal>
        <div className="w-[92%] mx-auto max-w-main">
          <div className="flex flex-col justify-center gap-[20px] mb-[50px]">
          
            <h1 className="text-[70px] font-[500] text-main mb-[8px] w-[76%] leading-[70px] lg:text-[60px] lg:leading-[70px] hro:w-full">
              Et software bureau med passion for meningsfulde løsninger.
            </h1>
            <p className="text-[22px] text-gray-600 font-[400] mb-[30px] w-[40%] hro:w-full">Hos Gazella Team specialiserer vi os i at udvikle skrædersyede softwareløsninger til virksomheder. </p>
            <div className="flex items-center gap-[14px]">
              <Link className="inline-block cursor-pointer font-[500] select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-white bg-main" href={"/arbejde/cases"}>Se vores arbejde</Link>
              <Link className="flex cursor-pointer font-[500] select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main" href={"/kontakt"}>Kontakt os <ChevronRight size={22}/></Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
    <LandigServices />
      </Layout>
    </>
  );
}
