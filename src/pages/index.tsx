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
        <Hero
          icon={null}
          section="gazella team"
          heading="Et moderne software bureau med fokus på ny teknologi"
        />
      </Layout>
    </>
  );
}
