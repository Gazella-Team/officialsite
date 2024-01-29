import { Reveal } from "@/components/Animations/Reveal";
import LargeBlogCard from "@/components/Blog/LargeBlogCard";
import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { BookCopy } from "lucide-react";
import SmallBlogCard from "@/components/Blog/SmallBlogCard";

export default function BlogList() {
  return (
    <Layout>
      <Meta
        title="Gazella Blogs - Lær hvordan du bygger din hjemmeside"
        description="Vi arbejder hele tiden på at skrive nye artikler, hvor vores team deler ud af tips & tricks i forhold til hvordan du laver din hjemmeside."
      />
      <Hero
        heading="Blog"
        section="læring"
        icon={<BookCopy color="#ffffff" size={70} />}
      />
      <Description description="Har du et projekt i tankerne, som kræver enten en webapp, hjemmeside eller et unikt design? Vi tilbyder dig en gratis samtale, hvor du kan stille dine ønsker og krav til netop den software-løsning du drømmer om. Vi vil undervejs komme med rådgivning og sparing." />
      <div className="w-[90%] mx-auto max-w-main py-[60px] flex flex-col gap-10">
        <div className="max-w-lg flex flex-col gap-2">
          <h1 className="text-main text-4xl font-semibold">Seneste artikler</h1>
          <p className="text-gray-600">
            Vi arbejder hele tiden på at skrive nye artikler, hvor vores team
            deler ud af tips & tricks i forhold til hvordan du laver din
            hjemmeside.
          </p>
        </div>
        <LargeBlogCard
          date="February 14, 2023"
          title="Sådan måler du effekten af brand awareness kampagner"
          summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
          author="Mathias Kokfelt"
          authorTitle="Marketing Manager"
          authorImage="/simonmaribo.jpg"
          image="/cases/organicmasterclass/organicmasterclass.jpg"
          href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
        />
        <div className="grid grid-cols-1 blogGrid2:grid-cols-2 blogGrid3:grid-cols-3 gap-x-6 gap-y-10">
          <SmallBlogCard
            date="February 14, 2023"
            title="Sådan måler du effekten af brand awareness kampagner"
            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
            author="Mathias Kokfelt"
            authorTitle="Marketing Manager"
            authorImage="/simonmaribo.jpg"
            image="/cases/organicmasterclass/organicmasterclass.jpg"
            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
          />
          <SmallBlogCard
            date="February 14, 2023"
            title="Sådan måler du effekten af brand awareness kampagner"
            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
            author="Mathias Kokfelt"
            authorTitle="Marketing Manager"
            authorImage="/simonmaribo.jpg"
            image="/cases/organicmasterclass/organicmasterclass.jpg"
            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
          />
          <SmallBlogCard
            date="February 14, 2023"
            title="Sådan måler du effekten af brand awareness kampagner"
            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
            author="Mathias Kokfelt"
            authorTitle="Marketing Manager"
            authorImage="/simonmaribo.jpg"
            image="/cases/organicmasterclass/organicmasterclass.jpg"
            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
          />
          <SmallBlogCard
            date="February 14, 2023"
            title="Sådan måler du effekten af brand awareness kampagner"
            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
            author="Mathias Kokfelt"
            authorTitle="Marketing Manager"
            authorImage="/simonmaribo.jpg"
            image="/cases/organicmasterclass/organicmasterclass.jpg"
            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
          />
          <SmallBlogCard
            date="February 14, 2023"
            title="Sådan måler du effekten af brand awareness kampagner"
            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
            author="Mathias Kokfelt"
            authorTitle="Marketing Manager"
            authorImage="/simonmaribo.jpg"
            image="/cases/organicmasterclass/organicmasterclass.jpg"
            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
          />
          <SmallBlogCard
            date="February 14, 2023"
            title="Sådan måler du effekten af brand awareness kampagner"
            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
            author="Mathias Kokfelt"
            authorTitle="Marketing Manager"
            authorImage="/simonmaribo.jpg"
            image="/cases/organicmasterclass/organicmasterclass.jpg"
            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
          />
        </div>
      </div>
    </Layout>
  );
}
