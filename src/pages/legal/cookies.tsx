import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import Hero from "@/components/Layout/hero";
import { Cookie } from "lucide-react";
import Meta from "@/components/Layout/Meta";

export default function Cookies() {
  return (
    <Layout>
      <Meta
        title="Cookiepolitik - Gazella Team"
        description="Vi arbejder hele tiden på at skrive nye artikler, hvor vores team deler ud af tips & tricks i forhold til hvordan du laver din hjemmeside."
      />
      <Hero
                  description={<div className="w-[92%] mx-auto max-w-main flex items-center justify-end">
                  <p className="text-[22px] w-[68%] text-gray-600 font-[400] lg:text-[24px] lg:leading-[34px] lg:w-[90%] mid:w-full mid:text-[22px] mid:leading-[32px]">
                  Gazella Team udgør et hold af ambitiøse, nytænkende og storsmilende programmøre og designere, som hver dag brænder for at skabe unikke digitale produkter. Vi fokuserer på, at tilpasse hver enkel løsning til det pågældende projekt. Derfor kan du hos os forvente en fast kompetent sparingspartner, som supplerer med viden og leverer til tiden til den aftalte pris.
                  </p>
                </div>}
      background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/webdev.jpg)] bg-top bg-cover"
        icon={<Cookie strokeWidth={1.3} color="#ffffff" size={70} />}
        section="legal"
        heading="Cookies"
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
            Derfor bruger vi cookies
          </h1>
          <p className="text-[18px] text-gray-600 font-[300]">
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
