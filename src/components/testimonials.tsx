export default function Testimonials() {
    return (
        <div className="bg-second py-[100px] w-[96%] mx-auto rounded-[14px] my-[100px]">
            <div className="w-[95%] mx-auto">
                <h1 className="text-[40px] font-[600] text-main mb-[10px]">Kunde relationer fra øverste hylde</h1>
                <p className="mb-[50px] text-[22px] font-[400] text-gray-600">Vi lægger vægt i godt samarbejde</p>
            </div>
            <div className="w-[95%] mx-auto grid grid-cols-2 gap-[34px]">
                <div className="bg-white p-[60px] rounded-[14px]">
                    <img className="w-[100px] rounded-full mb-[40px]" src="/team/miklonborg.jpg"></img>
                    <h1 className="text-[28px] font-[600] text-main mb-[20px]">Sebastian Madsen</h1>
                    <p className="font-[400] text-gray-600 italic mb-[40px]">
                    "Makeable har været en fremragende leverandør i udviklingen af Safeticket-appen, hvor deres designmæssige kreativitet og tekniske ekspertise har omdannet vores tekniske krav og visionen om effektiv billethåndtering til virkelighed. Vi er imponerede over deres engagement og kompetencer – og ser frem til at fortsætte samarbejdet. Et aspekt, der særligt har imponeret os, er det smidige samarbejde og den konstruktive udveksling mellem vores udviklere og Makeables team. Hurtige justeringer og løsningsorienteret kommunikation har været centrale faktorer for samarbejdets succes. Vi har allerede de næste projekter i søen med dem."
                    </p>
                    <img className="w-[120px]" src="/coadlogo.png"></img>
                </div>
                <div className="bg-white p-[60px] rounded-[14px]">
                    <img className="w-[100px] rounded-full mb-[40px]" src="/team/miklonborg.jpg"></img>
                    <h1 className="text-[28px] font-[600] text-main mb-[20px]">Gustav Walsted</h1>
                    <p className="font-[400] text-gray-600 italic mb-[40px]">
                    "Makeable har været en fremragende leverandør i udviklingen af Safeticket-appen, hvor deres designmæssige kreativitet og tekniske ekspertise har omdannet vores tekniske krav og visionen om effektiv billethåndtering til virkelighed. Vi er imponerede over deres engagement og kompetencer – og ser frem til at fortsætte samarbejdet. Et aspekt, der særligt har imponeret os, er det smidige samarbejde og den konstruktive udveksling mellem vores udviklere og Makeables team. Hurtige justeringer og løsningsorienteret kommunikation har været centrale faktorer for samarbejdets succes. Vi har allerede de næste projekter i søen med dem."
                    </p>
                    <img className="w-[120px]" src="/coadlogo.png"></img>
                </div>
            </div>

        </div>

    )
}