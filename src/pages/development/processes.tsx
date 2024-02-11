import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ArrowLeftRight } from "lucide-react";
import Meta from "@/components/Layout/Meta";
import Processes from "@/components/processes";

export default function Arbejdsprocesser() {
  return (
    <Layout>
                    <Meta
        title="Arbejdsprocesser | Gazella Team"
        description="Vi kombinerer funktionelle features, hurtige frameworks og intuitive unikke brugerflader for at skabe de bedste forudsætninger for dit kommende app-projekt."
      />
      <Hero
            description={<div className="w-[95%] mx-auto max-w-main flex items-center justify-end">
            <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
            Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
            </p>
          </div>}
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Processes."
        section="development"
        icon={<ArrowLeftRight strokeWidth={1.3} color="#ffffff" size={70} />}
      />
    <Processes />
    </Layout>
  );
}