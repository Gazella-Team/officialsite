import Link from "next/link";
import { Reveal } from "@/components/Animations/Reveal";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import TechStackSlider from "@/components/techstackslider";
import Cta from "@/components/Layout/Cta";
import Meta from "@/components/Layout/Meta";
import Hero from "@/components/Layout/hero";
import Layout from "@/components/Layout";

export default function Index() {
  return (
    <>
      <Meta />
      <Layout>
      <section className="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/flyout.jpg)] bg-top bg-cover pt-[400px] pb-[70px] w-[100%] mx-auto max-w-none">
      <Reveal>
        <div className="w-[90%] mx-auto max-w-main">
          <p className="text-white mb-[14px] uppercase">/ Gazella Team</p>
          <div className="flex items-center gap-[20px]">
          
            <h1 className="text-[80px] font-[500] w-[80%] leading-[80px] text-white  lg:text-[60px] lg:leading-[70px]">
              Et moderne software bureau med fokus på ny teknologi
            </h1>
          </div>
        </div>
      </Reveal>
    </section>
      </Layout>
    </>
  );
}
