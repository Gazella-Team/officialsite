import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import { BookLock } from "lucide-react";
import { Reveal } from "@/components/Animations/Reveal";
import Meta from "@/components/Layout/Meta";

export default function Privatlivspolitik() {
  return (
    <Layout>
      <Meta
        title="Privatlivspolitik - Gazella Team"
        description="Vi arbejder hele tiden på at skrive nye artikler, hvor vores team deler ud af tips & tricks i forhold til hvordan du laver din hjemmeside."
      />
      <Hero
                description="policy"
                
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        icon={<BookLock strokeWidth={1.3} color="#ffffff" size={70} />}
        section="legal"
        heading="Privacy policy"
      />
      <section className="py-[10px] bg-gray-50 border-y-[1px]">
        <div className="w-[92%] mx-auto max-w-main">
          <Reveal>
            <p className="text-gray-600">Senest opdateret d. 25.1.2024</p>
          </Reveal>
        </div>
      </section>
      <section className="py-[100px] text-main">
        <div className="w-[92%] mx-auto max-w-main">
          <h1 className="text-[30px] font-[600] mb-[30px]">
            Hvordan dit privatliv beskyttes
          </h1>
          <p className="text-[18px] font-[300] text-gray-600">
            Som mange andre virksomheder og hjemmesider anvender vi
            'cookie-teknologi' på vores hjemmeside. Cookies er stykker af
            information, som en hjemmeside gemmer på den besøgendes harddisk
            mhp. at holde øje med brugerens færdsel på siden (Dvs. hvilke sider
            du besøger på vores hjemmeside). Cookies er med til at forbedre din
            online-oplevelse ved at gemme præferencer, når du besøger en bestemt
            hjemmeside. Disse cookies indeholder ingen personligt
            indentificerbare informationer. De kan ikke danne en profil af dit
            system eller indsamle oplysninger om din harddisk.<br></br>
            <br></br> Når du kigger på vores hjemmeside, kan vi gemme en
            "cookie" på din computer. Midlertidige cookies anvendes til formål
            såsom at tælle antallet af besøgende på vores hjemmeside. Disse
            midlertidige cookies slettes, når du lukker din browser. En
            permanent cookie kan desuden gemmes på din computer af din browser.
            Når du logger på, fortæller denne type cookie os, om du har besøgt
            os før, eller om du er en ny besøgende. Denne cookie indsamler ikke
            nogen personlige informationer om dig eller giver os
            kontaktinformation for dig, og den trækker ikke informationer ud af
            din computer.<br></br>
            <br></br> Vi bruger denne cookie til at hjælpe os med at
            identificere de funktioner og informationer på hjemmesiden, som du
            har størst interesse i, så vi kan give dig mere af det, du ønsker. I
            de fleste browsere vil "Hjælp"-sektionen i værktøjslinjen fortælle
            dig, hvordan du kan forhindre, at din browser accepterer nye
            cookies, hvordan du kan få browseren til at fortælle dig, når du
            modtager en ny cookie, eller hvordan du deaktiverer alle cookies.
            Husk dog på, at cookies lader dig bedst udnytte alle Sde nyeste
            funktioner på vores hjemmeside.
          </p>
        </div>
      </section>
    </Layout>
  );
}
