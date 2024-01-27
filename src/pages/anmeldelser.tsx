import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import ContactInfo from "@/components/contactinfo";
import Reviews from "@/components/reviews";
import { Star } from "lucide-react";
export default function Anmeldelser() {
  return (
    <Layout>
      <Hero
        heading="Anmeldelser"
        section="kunder"
        icon={<Star color="#ffffff" size={70} />}
      />
      <Description description="Hos Gazella Team er glade kunder vores drivkraft. Derfor er kunden hos os altid i fokus, og du kan forvente et samarbejde af forståelse bygget i øjenhøjde med dine ønsker og behov." />
      <Reviews />
    </Layout>
  );
}
