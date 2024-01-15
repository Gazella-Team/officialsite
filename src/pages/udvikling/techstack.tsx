import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Tools from "@/components/tools";
import { FileStack } from "lucide-react";

export default function TechStack() {
  return (
    <Layout page={PAGES.TEAM}>
      <Hero
        heading="Tech Stack"
        section="udvikling"
        icon={<FileStack color="#ffffff" size={70} />}
      />
      <Description description="Få et indblik i hvilke værktøjer samt eksterne software vi hver dag bruger til at udvikle de bedst mulige løsninger for vores kunder. Hos Gazella Team holder vi os konstant opdateret på de seneste teknologier, således vi altid sikrer top-kvalitets løsninger til vores kunder." />
      <Tools />
    </Layout>
  );
}
