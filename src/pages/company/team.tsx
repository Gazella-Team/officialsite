import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import Members from "@/components/members";
import { Users } from "lucide-react";
import Partners from "@/components/partners";
import Meta from "@/components/Layout/Meta";
export default function Team() {
  return (
    <Layout>
        <Meta
        title="Teamet | Gazella Team"
        description="Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere"
      />
      <Hero
<<<<<<< HEAD
            description={<div className="w-[90%] mx-auto max-w-main flex items-center justify-end mid:justify-start">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[20px] lg:leading-[34px] lg:w-[100%]">
            Gazella Team consists of a team of ambitious, innovative and smiling developers and designers who are passionate about creating unique digital solutions every day. We focus on tailormaking each solution to the specific project. Therefore you can expect a reliable competent partner who supplies with knowledge and delivers on time at the agreed price.
=======
            description={<div className="w-[95%] mx-auto max-w-main flex items-center justify-end">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[20px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[20px] mid:leading-[32px]">
            Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
            <br></br><br></br>
            Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
>>>>>>> 7a35b60 (jg)
            </p>
          </div>}
      background="bg-[linear-gradient(rgba(5,29,64,0.80),rgba(5,29,64,1)),url(/flyout.jpg)] bg-top bg-cover"
        heading="Our Team."
        section="company"
        icon={<Users strokeWidth={2} color="#ffffff" size={80} />}
      />
      <Members />
    </Layout>
  );
}
