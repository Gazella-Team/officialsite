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
      <section className="py-[170px] pb-[20px] w-[100%] mx-auto max-w-none mb-[30px]">
      <Reveal>
        <div className="w-[92%] mx-auto max-w-main">
          <div className="flex flex-col justify-center gap-[20px] mb-[50px]">
          
            <h1 className="text-[70px] font-[500] text-main mb-[8px] w-[90%] leading-[70px] lg:text-[60px] lg:leading-[70px]">
              Unikke værdiskabende softwareløsninger til virksomheder
            </h1>
            <p className="text-[22px] text-gray-600 font-[400] w-[80%]">Hos Gazella Team specialiserer vi os i at udvikle skrædersyede softwareløsninger til virksomheder. </p>
          </div>
        </div>
      </Reveal>
    </section>
    <img className="w-full rounded-[50px]" src="/flyout.jpg"></img>
      </Layout>
    </>
  );
}
