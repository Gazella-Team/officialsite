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

      <section className="py-[100px] bg-[url(/heropatternsvg.svg)] bg-cover pb-[300px] w-[100%] mx-auto max-w-none hro:mt-0 hro:bg-[#f1faff] hro:py-[100px] hro:mb-[100px]">
      <Reveal>
        <div className="w-[92%] mx-auto max-w-main">
          <div className="flex flex-col justify-center gap-[20px] mb-[50px]">
          
            <h1 className="text-[80px] font-[500] text-main mb-[8px] w-[76%] leading-[80px] lg:text-[60px] lg:leading-[70px] hro:w-full">
              A software agency wih passion for profitable solutions
            </h1>
            <p className="text-[22px] text-gray-600 font-[400] mb-[30px] w-[40%] hro:w-full">We specialise in building unique, useful and profitable software for businesses and projects.</p>
            <div className="flex items-center gap-[14px]">
              <Link className="inline-block cursor-pointer font-[500] select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-white bg-main" href={"/work/cases"}>See our work</Link>
              <Link className="flex cursor-pointer font-[500] select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main" href={"/contact"}>Contact us<ChevronRight size={22}/></Link>
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
