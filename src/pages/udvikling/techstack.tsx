import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Tools from "@/components/tools";
import { FileStack } from "lucide-react";
import Meta from "@/components/Layout/Meta";

export default function TechStack() {
  return (
    <Layout>
      <Meta
        title="Tech stack - Se hvilke software vi anvender"
        description="Få et indblik i hvilke værktøjer samt eksterne software vi hver dag bruger til at udvikle de bedst mulige løsninger for vores kunder."
      />
      <Hero
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Tech stack"
        section="udvikling"
        icon={<FileStack color="#ffffff" size={70} />}
      />
      <Description description="Få et indblik i hvilke værktøjer samt eksterne software vi hver dag bruger til at udvikle de bedst mulige løsninger for vores kunder. Hos Gazella Team holder vi os konstant opdateret på de seneste teknologier, således vi altid sikrer top-kvalitets løsninger til vores kunder." />
      <Tools />
    </Layout>
  );
}
