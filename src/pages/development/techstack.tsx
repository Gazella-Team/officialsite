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
      description="Learn about the various technologies we use everyday to build the best possible solutions for our customers. By combining the latest frameworks and the best design applications on the market, we're able to provide unique solutions efficiently."
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Tech stack."
        section="development"
        icon={<FileStack strokeWidth={1.3} color="#ffffff" size={70} />}
      />
      <Tools />
    </Layout>
  );
}
