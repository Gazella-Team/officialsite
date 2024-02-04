import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import ContactInfo from "@/components/contactinfo";
import Reviews from "@/components/reviews";
import { Star } from "lucide-react";
import Meta from "@/components/Layout/Meta";

export default function Anmeldelser() {
  return (
    <Layout>
      <Meta
        title="Anmeldelser - Hør hvad vores kunder synes om vores arbejde"
        description="Vi arbejder hele tiden på at skrive nye artikler, hvor vores team deler ud af tips & tricks i forhold til hvordan du laver din hjemmeside."
      />
      <Hero
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Anmeldelser"
        section="kunder"
        icon={<Star color="#ffffff" size={70} />}
      />
      <Description description="Hos Gazella Team er glade kunder vores drivkraft. Derfor er kunden hos os altid i fokus, og du kan forvente et samarbejde af forståelse bygget i øjenhøjde med dine ønsker og behov." />
      <Reviews />
    </Layout>
  );
}
