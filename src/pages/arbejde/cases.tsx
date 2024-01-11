import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Hero from "@/components/Layout/hero";
import Description from "@/components/description";
import { User2 } from "lucide-react";

export default function Cases() {
  return (
    <Layout page={PAGES.CASES}>
      <Hero
        heading="Kunde Cases"
        section="Arbejde"
        icon={<User2 color="#ffffff" size={70} />}
      />
      <Description description="Hos Gazella Team er kunden altid i fokus. Gennem hele processen fra ide til færdigt produkt, sørger vi for, at kundens vision og krav til projektet overholdes, i takt med at vi efter aftale supplerer med vores faglige viden og forslag til forbedring." />
      <div className="py-[60px] border-b-[1px]">
        <Reveal>
          <div className="w-[90%] mx-auto max-w-main grid grid-cols-cases">
            <div>
              <h1 className="text-[24px] font-[600] mb-[20px]">
                Skal dit projekt være vores første case?
              </h1>
              <p>
                Hos Gazella Team er kunden altid i fokus. Gennem hele processen
                fra ide til færdigt produkt, sørger vi for, at kundens vision og
                krav til projektet overholdes
              </p>
            </div>
            <button>Kontakt os</button>
          </div>
        </Reveal>
      </div>
    </Layout>
  );
}
