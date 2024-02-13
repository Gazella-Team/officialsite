import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import { Heart } from "lucide-react";
import Job from "@/components/job";
import Meta from "@/components/Layout/Meta";


export default function Career() {
  return (
    <Layout>
      <Meta
        title="Career | Gazella Team"
        description="Do you have a flair for software development? Gazella Team offers you a flexible workplace, where you get to develop your professional and personal skills"
      />
      <Hero
            description="Do you have a flair for software development? Gazella Team offers you a flexible workplace, where you get to develop your professional and personal skills by working with exciting projects and bright people."
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Join us."
        section="company"
        icon={<Heart color="#ffffff" size={70} />}
      />
    <Job />
    </Layout>
  );
}
