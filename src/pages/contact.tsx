import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import ContactInfo from "@/components/contactinfo";
import { Send } from "lucide-react";
import Calembed from "@/components/calembed";
import Meta from "@/components/Layout/Meta";
export default function Contact() {
  return (
    <Layout>
      <Meta title="Contact | Gazella Team" description="Do you have a project in mind, that requires either a website, an app or a timeless design? We'd love to discuss your idea." />
      <Hero
      description="Do you have a project in mind, that requires either a website, an app or a timeless design? We'd love to discuss your idea. We offer you a free talk, where you can determine your vision and requirements for your coming project.   
      "
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Let's talk."
        section="kontakt"
        icon={<Send strokeWidth={1.3} color="#ffffff" size={70} />}
      />
      <ContactInfo />
    </Layout>
  );
}
