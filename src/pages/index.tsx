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

export default function Index() {
  return (
    <>
      <Meta />
      <Layout>
      <section className="bg-[linear-gradient(rgba(5,29,64,0.9),rgba(5,29,64,1)),url(/herobg/i.jpg)] bg-center bg-cover py-[170px] w-[100%] mx-auto max-w-none mb-[100px]">
      <Reveal>
        <div className="w-[92%] mx-auto max-w-main">
          <div className="flex flex-col justify-center gap-[20px] mb-[50px]">
          
            <h1 className="text-[70px] font-[300] mb-[8px] w-[80%] leading-[70px] text-white  lg:text-[60px] lg:leading-[70px]">
              Unikke værdiskabende softwareløsninger til {<div className="inline-block"><Typewrite /></div>}
            </h1>
            <p className="text-white text-[22px] font-[300] w-[50%] ">Hos Gazella Team specialiserer vi os i at udvikle skrædersyede softwareløsninger til virksomheder. </p>
          </div>

          <div className="flex items-center gap-[20px]">
          <EstimateSheet>
              <div className="text-white flex gap-[10px] border-[1px] rounded-full px-[30px] py-[10px] font-[400] hover:bg-white hover:text-main transition-all">
                <p className="font-[400]">Få et estimat på dit projekt</p>
                <ArrowUpRight size={20} />
              </div>
            </EstimateSheet>
            <Link className="text-white border-[1px] rounded-full px-[30px] py-[10px] font-[400] hover:bg-white hover:text-main transition-all" href={"/arbejde/cases"}>Se vores arbejde</Link>
          </div>
        </div>
      </Reveal>
    </section>
      </Layout>
    </>
  );
}
