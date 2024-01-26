import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import BlogPosts from "@/components/blogposts";
import Description from "@/components/description";
import Members from "@/components/members";
import { BookCopy } from "lucide-react";
export default function Blog() {
  return (
    <Layout>
      <Hero
        heading="Blog"
        section="læring"
        icon={<BookCopy color="#ffffff" size={70} />}
      />
      <Description description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris." />
      <BlogPosts />
    </Layout>
  );
}
