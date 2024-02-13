import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { Heart } from "lucide-react";
import Meta from "@/components/Layout/Meta";
import Product from "@/components/product";
export default function Products() {
  return (
    <Layout>
          <Meta
        title="Products | Gazella Team"
        description="Read more about the projects that we've built internally"
      />
      <Hero
            description="As a company we build profitable solutions for our clients, while simultaneously building projects we believe in ourselves. Read more about the projects that we've built internally, that we manage and develop on a day-to-day basis."
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Products."
        section="company"
        icon={<Heart color="#ffffff" size={70} />}
      />
    <Product />
    </Layout>
  );
}
