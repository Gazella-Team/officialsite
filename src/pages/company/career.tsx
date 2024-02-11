import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { Heart } from "lucide-react";
import Partners from "@/components/partners";
export default function Career() {
  return (
    <Layout>
      <Hero
            description={<div className="w-[95%] mx-auto max-w-main flex items-center justify-end">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
            </p>
          </div>}
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Join us."
        section="company"
        icon={<Heart color="#ffffff" size={70} />}
      />
    <Partners />
    </Layout>
  );
}