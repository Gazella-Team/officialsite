import Link from "next/link";
import { Reveal } from "@/components/Animations/Reveal";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export default function Index() {
  return (
    <>
      <Navbar />
      <section className="h-[100vh] flex flex-col pb-[100px] justify-end bg-[linear-gradient(rgba(5,29,64,0.50),rgba(5,29,64,0.9)),url(/flyout.jpg)] bg-center bg-cover">
        <Reveal>
          <div className="w-[90%] mx-auto max-w-main text-white">
            <h1 className="text-[66px] w-[65%] leading-[76px] font-[600] mb-[30px] text-white hero:text-[55px] hero:leading-[65px] hero:w-full heroSm:text-[45px] heroSm:leading-[55px]">
              Skrædersyede web-løsninger der skaber værdi
            </h1>
            <p className="text-[20px] w-[56%] mb-[40px] font-[500] text-white hero:text-[18px] hero:w-full">
              Vi specialiserer os i at udvikle kreative, funktionelle og unikke
              web-løsninger, som skaber værdi, til projekter og virksomheder af
              alle størrelser
            </p>
            <div className="flex items-center gap-[20px] text-white">
              <Link
                className="border-[1px] font-[600] border-white rounded-[50px] py-[10px] w-[170px] text-center hover:bg-white hover:text-main transition-all"
                href={"/kontakt"}
              >
                Snak med os
              </Link>
              <Link
                className="border-[1px] font-[600] border-white rounded-[50px] py-[10px] w-[170px] text-center hover:bg-white hover:text-main transition-all"
                href={"/arbejde/cases"}
              >
                Se vores arbejde
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
      <Footer />
    </>
  );
}
