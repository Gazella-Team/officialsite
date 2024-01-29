import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { ArrowLeftRight } from "lucide-react";
import Processes from "@/components/processes";

export default function Arbejdsprocesser() {
  return (
    <Layout>
      <Hero
        heading="Processer"
        section="udvikling"
        icon={<ArrowLeftRight color="#ffffff" size={70} />}
      />
      <Description description="Få et indblik i, hvordan vi eksekverer udviklingen af din kommende web-løsning fra start til slut. For os er det altafgørende at have en struktureret process, som gør projektet så overskueligt og effektivt som muligt for begge parter. De bedste løsninger skabes af god planlægning." />
    </Layout>
  );
}
