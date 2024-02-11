import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import ContactInfo from "@/components/contactinfo";
import { Send } from "lucide-react";
import Calembed from "@/components/calembed";
export default function Contact() {
  return (
    <Layout>
      <Hero
      description={<div className="w-[90%] mx-auto max-w-main flex items-center justify-end">
      <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
        Do you have a project in mind, that requires either a website, an app or a complete SaaS development? We'd love to discuss your idea. We offer you a free talk, where you can determine your vision and requirements for your coming project.   
      </p>
    </div>}
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Let's talk."
        section="kontakt"
        icon={<Send strokeWidth={1.3} color="#ffffff" size={70} />}
      />
      <ContactInfo />
    </Layout>
  );
}
