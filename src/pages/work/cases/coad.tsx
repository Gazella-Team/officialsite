import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Coad() {
  return (
    <Layout>
      <section className="py-[160px]">
        <div className="w-[95%] mx-auto">
          <h1 className="text-[76px] font-[500] w-[60%] leading-[86px] mb-[100px] text-main">Web-development case with coad</h1>
          <p>

          </p>
          <img src="/cases/coad/coadcase.svg"></img>
        </div>
      </section>
    </Layout>
  );
}
