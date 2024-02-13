import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Projects from "@/components/projects";
import { FolderGit2 } from "lucide-react";

export default function InterneProjekter() {
  return (
    <Layout>
      <Hero
            description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
            "
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Interne Projekter"
        section="arbejde"
        icon={<FolderGit2 color="#ffffff" size={70} />}
      />
      <Projects />
    </Layout>
  );
}
