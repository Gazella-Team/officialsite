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
    <div className="bg-main text-center h-[100vh] text-white flex items-center flex-col justify-center">
      <p className="text-[60px] font-[600]">Coming soon</p>
      <p>Powered by Gazella Team</p>
    </div>
    </>
  );
}
