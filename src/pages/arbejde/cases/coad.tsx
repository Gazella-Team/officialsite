import { Reveal } from "@/components/Animations/Reveal";
import Layout from "@/components/Layout";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function Coad() {
  return (
    <Layout>
      <>
        <section className="bg-[linear-gradient(rgba(5,29,64,0.80),rgba(5,29,64,1)),url(/cases/organicmasterclass/organicmasterclass.jpg)] bg-center bg-cover py-[180px] pt-[260px]">
          <div className="w-[90%] mx-auto max-w-main">
            <Reveal>
              <p className="text-white mb-[14px] uppercase">/ CASE</p>
            </Reveal>

            <Reveal>
              <h1 className="text-[80px] leading-[90px] w-[76%] font-[500] text-white mb-[20px]">
                COAD Agency
              </h1>
            </Reveal>
          </div>
        </section>
        <div className="w-[90%] mx-auto bg-white mt-[-140px] mb-[60px] rounded-[6px] py-[50px] px-[50px] border-[1px] grid grid-cols-1 gap-[30px]">
          <div className="grid grid-cols-4 gap-[20px]">
            <Reveal>
              <div className="bg-gray-100 rounded-[6px] p-[30px] border-[1px]">
                <h1 className="font-[600] text-[20px] mb-[6px]">Klient</h1>
                <p className="text-gray-600">COAD</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-gray-100 rounded-[6px] p-[30px] border-[1px]">
                <h1 className="font-[600] text-[20px] mb-[6px]">Ydelse</h1>
                <p className="text-gray-600">Landingsside</p>
              </div>
            </Reveal>
            <Reveal>
              <div className="bg-gray-100 rounded-[6px] p-[30px] border-[1px]">
                <h1 className="font-[600] text-[20px] mb-[6px]">Dato</h1>
                <p className="text-gray-600">25/01/2024</p>
              </div>
            </Reveal>

            <Link
              target="_blank"
              href={"https://site.organicmasterclass.com/"}
              className="bg-main rounded-[6px] p-[30px] flex items-center justify-center cursor-pointer"
            >
              <h1 className="font-[600] text-[20px] mb-[6px] text-white flex items-center gap-[10px]">
                <p>Se case</p>
                <ExternalLink size={30} />
              </h1>
            </Link>
          </div>

          <div>
            <Reveal>
              <div className="bg-gray-100 rounded-[6px] p-[100px] border-[1px]">
                <Reveal>
                  <img className="w-[130px] mb-[40px]" src="/trust.png"></img>
                </Reveal>
                <div className="flex flex-col items-center justify-center">
                  <Reveal>
                    <h1 className="italic text-[20px] font-[300] text-gray-700 mb-[50px]">
                      " Vi hos Organic Masterclass har haft fornøjelsen af at
                      samarbejde med Gazella Team, og vi kan kun takke for den
                      fantastiske service og den imponerende hjemmeside, de har
                      skabt for vores vores virksomhed. Hele processen fra start
                      til slut var en glæde. Teamet hos Gazella Team viste en
                      enestående professionalisme, og de forstod virkelig at
                      gribe vores vision og omsætte den til en visuelt
                      tiltalende og funktionel hjemmeside. Hver detalje blev
                      håndteret med omhu, de svarede hurtigt på alle vores
                      løbende forslag til ændringer og leverede til slut et
                      produkt der overgik alle vores forventninger. "
                    </h1>
                  </Reveal>
                </div>

                <div className="flex items-center justify-center gap-[20px]">
                  <Reveal>
                    <img
                      className="w-[80px] h-[80px] object-cover rounded-[100px] object-top"
                      src="/lasseosmann.jpg"
                    ></img>
                  </Reveal>
                  <Reveal>
                    <div>
                      <h1 className="text-[20px] font-[600] text-main">
                        Gustav Walsted
                      </h1>
                      <p className="text-gray-600">Stifter, COAD</p>
                    </div>
                  </Reveal>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </>
    </Layout>
  );
}
