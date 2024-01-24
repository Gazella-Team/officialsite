import { Reveal } from "./Animations/Reveal";

export default function Dynamic() {
  return (
    <>
      <section className="bg-[linear-gradient(rgba(5,29,64,0.80),rgba(5,29,64,1)),url(/cases/organicmasterclass/organicmasterclassbg.jpg)] bg-center bg-cover py-[180px] pt-[260px]">
        <div className="w-[90%] mx-auto max-w-main">
          <p className="text-white mb-[14px] uppercase">/ CASE</p>
          <Reveal>
            <h1 className="text-[80px] leading-[90px] w-[76%] font-[500] text-white mb-[20px]">
              Organic Masterclass
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-white text-[18px]">
              En stilistisk web-app til forum management
            </p>
          </Reveal>
        </div>
      </section>
      <div className="w-[90%] mx-auto bg-white mt-[-140px] rounded-[6px] py-[50px] px-[50px] border-[1px] grid grid-cols-1 gap-[30px]">
        <div className="flex items-center gap-[70px]">
          <div className="my-[30px]">
            <h1 className="text-[24px] font-[600]">Klient</h1>
            <p className="text-gray-600">Organic Masterclass</p>
          </div>
          <div className="my-[30px]">
            <h1 className="text-[24px] font-[600]">Kategori</h1>
            <p className="text-gray-600">Flot Landingsside</p>
          </div>
          <div className="my-[30px]">
            <h1 className="text-[24px] font-[600]">Konsulenter</h1>
            <p>Lasse Osmann</p>
          </div>
          <div className="my-[30px]">
            <h1 className="text-[24px] font-[600]">Se det færdige produkt</h1>
            <p>Lasse Osmann</p>
          </div>
        </div>

        <div>
          <Reveal>
            <div className="bg-gray-100 rounded-[6px] p-[100px]">
              <img className="w-[130px] mb-[40px]" src="/trust.png"></img>
              <div className="flex flex-col items-center justify-center">
                <h1 className="italic text-[20px] font-[300] text-gray-700 mb-[50px]">
                  " Vi hos Organic Masterclass har haft fornøjelsen af at
                  samarbejde med Gazella Team, og vi kan kun takke for den
                  fantastiske service og den imponerende hjemmeside, de har
                  skabt for vores vores virksomhed. Hele processen fra start til
                  slut var en glæde. Teamet hos Gazella Team viste en enestående
                  professionalisme, og de forstod virkelig at gribe vores vision
                  og omsætte den til en visuelt tiltalende og funktionel
                  hjemmeside. Hver detalje blev håndteret med omhu, de svarede
                  hurtigt på alle vores løbende forslag til ændringer og
                  leverede til slut et produkt der overgik alle vores
                  forventninger. "
                </h1>
              </div>

              <div className="flex items-center justify-center gap-[20px]">
                <img
                  className="w-[80px] h-[80px] object-cover rounded-[100px] object-top"
                  src="/lasseosmann.jpg"
                ></img>
                <div>
                  <h1 className="text-[20px] font-[600] text-main">
                    Lasse Osmann
                  </h1>
                  <p className="text-gray-600">
                    Medstifter, Organic Masterclass
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <section className="py-[180px]">
        <div className="w-[90%] mx-auto max-w-[700px]">
          <h1 className="text-[30px] font-[600] mb-[20px]">
            Hvilke udfordringer virksomheden stod over for
          </h1>
          <p>
            Vi bruger React i relation til web-udvikling for at skabe hurtige,
            interaktive og strukturerede web-løsninger. Med React har vi
            mulighed for at genbruge komponenter og optimere hjemmesidens
            hastighed, således at udviklingsfasen bliver mere effektiv, og
            brugeroplevelsen så god som overhovedet muligt. React er det mest
            moderne/fremtidssikrede web-framework, hvilket din løsning afspejler
            sig i.
          </p>
        </div>
      </section>
    </>
  );
}
