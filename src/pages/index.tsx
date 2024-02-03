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
        <section
          style={{
            background:
              "linear-gradient(90deg, rgba(5,29,64,1) 0%, rgba(7,40,89,1) 49%, rgba(9,45,98,0.9) 74%, rgba(11,51,108,0.9) 100%), url(/flyout.jpg)",
            backgroundPosition: "center",
          }}
          className="pt-[360px] pb-[70px] h-[90vh] w-[96%] mx-auto rounded-[14px] max-w-[1500px]"
        >
          <Reveal>
            <div className="w-[90%] mx-auto max-w-main">
              <p className="text-white mb-[14px] uppercase">/ gazella team</p>
              <div className="text-white">
                <h1 className="text-[60px] font-[500] w-[60%] leading-[70px] text-white mb-[30px] lg:text-[60px] lg:leading-[70px]">
                  Et moderne software bureau med fokus på ny teknologi
                </h1>
                <p className="text-[20px] w-[60%] font-light">
                  Gazella Team udgør et hold af ambitiøse, nytænkende og
                  storsmilende programmøre og designere, som hver dag brænder
                  for at skabe unikke digitale produkter.
                </p>
              </div>
            </div>
          </Reveal>
        </section>
      </Layout>
    </>
  );
}
