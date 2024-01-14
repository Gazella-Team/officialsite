import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Reveal } from "@/components/Animations/Reveal";
import Deal from "@/components/deal";

export default function Index() {
  return (
    <Layout page={PAGES.HOME}>
      <section className="py-[180px] pt-[260px] bg-[linear-gradient(rgba(5,29,64,0.80),rgba(5,29,64,1)),url(/flyout.jpg)] bg-cover">
        <Reveal>
          <div className="w-[90%] mx-auto max-w-main text-white">
            <h1 className="text-[86px] w-[85%] leading-[96px] font-[400] mb-[30px] text-white">
              Skrædersyede web-løsninger der skaber værdi
            </h1>
            <p className="text-[20px] w-[56%] mb-[40px] font-[400] text-white">
              Vi specialiserer os i at udvikle kreative, funktionelle og unikke
              web-løsninger, som skaber værdi, til projekter og virksomheder af
              alle størrelser
            </p>

            <div className="flex items-center gap-[20px]">
              <button className="bg-white text-main p-[20px] py-[10px] rounded-[50px] font-[600]">
                Snak med os
              </button>
              <button className="text-white">Se cases</button>
            </div>
          </div>
        </Reveal>
      </section>
    </Layout>
  );
}
