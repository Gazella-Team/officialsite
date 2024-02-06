import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ArrowLeftRight } from "lucide-react";
import Processes from "@/components/processes";

export default function Arbejdsprocesser() {
  return (
    <Layout>
      <Hero
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        heading="Processer"
        section="udvikling"
        icon={<ArrowLeftRight strokeWidth={1.3} color="#ffffff" size={70} />}
      />
      <Description description="Få et indblik i, hvordan vi eksekverer udviklingen af din kommende web-løsning fra start til slut. For os er det altafgørende at have en struktureret process, som gør projektet så overskueligt og effektivt som muligt for begge parter. De bedste løsninger skabes af god planlægning." />
    </Layout>
  );
}
