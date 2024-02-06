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

export default function Index() {
  return (
    <>
      <Meta />
      <Layout>
      <section className="bg-[linear-gradient(rgba(5,29,64,1),rgba(5,29,64,1)),url(/flyout.jpg)] bg-top bg-cover py-[170px] w-[100%] mx-auto max-w-none mb-[100px]">
      <Reveal>
        <div className="w-[90%] mx-auto max-w-main">
          <div className="bg-white inline-block px-[30px] py-[8px] rounded-[8px] mb-[50px]">
            <p>trust</p>
          </div>
      
          <div className="flex flex-col justify-center gap-[20px]">
          
            <h1 className="text-[70px] font-[300] mb-[8px] w-[80%] leading-[70px] text-white  lg:text-[60px] lg:leading-[70px]">
              Et moderne software bureau med fokus på {" "}
              <span className="text-second">ny teknologi</span>
            </h1>
            <p className="text-white text-[22px] w-[70%]">Få et indblik i hvilke værktøjer samt eksterne software vi hver dag bruger til at udvikle de bedst mulige løsninger for vores kunder. Vi er Gazella Team</p>
          </div>
        </div>
      </Reveal>
    </section>
    <Testimonials />
      </Layout>
    </>
  );
}
