import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import Stepper from "./Stepper"
import SelectableBadge from "./SelectableBadge";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, Check, Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Loading from "@/components/Animations/Loading";

type EstimateSheetData = {
    type?: "APP" | "WEBSITE" | "WEBAPP" | "OTHER";
    budget?: number[];
    description?: string;

    name?: string;
    companyName?: string;
    tlf?: string;
    email?: string;
}


export default function EstimateSheet({ children }: { children: React.ReactNode }) {

    const [step, setStep] = useState(1)
    const [submitting, setSubmitting] = useState(false)
    const [sent, setSent] = useState(false)
    const [data, setData] = useState<EstimateSheetData>({
        budget: [10000]
    })

    function selectAppType(type: "APP" | "WEBSITE" | "WEBAPP" | "OTHER") {
        setData({ ...data, type })
        setStep(2)
    }

    function NextButton(){
        return (
            <div className="flex flex-row justify-end">
                <button onClick={() => setStep(step+1)} className="p-2 transition-all border-2 rounded-md border-main text-main hover:bg-main hover:text-white">
                    <ArrowRight size={20} />
                </button>
            </div>
        )
    }

    async function submit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(submitting) return
        setSubmitting(true)
        let res = await fetch("/api/estimate", {
            method: "POST",
            body: JSON.stringify(data)
        })
        if(res.status != 200){
            setSubmitting(false)
            alert("Der skete en fejl, prøv igen senere.")
            return
        }

        setSubmitting(false)
        setSent(true)
    }

    return (
        <Sheet onOpenChange={(open) => {
            if(open == false){
                setStep(1)
                setSent(false)
                setData({
                    budget: [10000]
                })
            }
        }}>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="p-10 z-[100] w-[600px] overflow-y-scroll">
                {
                    sent == false ? (
                
                        <form className="flex flex-col gap-8 mt-8" onSubmit={submit}>
                            <div>
                                <Stepper steps={4} step={step} setStep={setStep} />
                            </div>
                            <div>
                                <h1 className="text-4xl font-semibold text-main">Estimér dit projekt</h1>
                                <p className="mt-2 text-gray-500 text-md">
                                    Udfyld formularen og få et estimat på dit projekt
                                </p>
                                <hr className="mt-4 border-gray-200" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <h2 onClick={() => setStep(1)} className={cn("text-lg font-medium text-main", step != 1 && "opacity-50 font-medium cursor-pointer")}>Hvilken type produkt er der tale om?</h2>
                                    { 
                                        step == 1 && (
                                            <div className="flex flex-col gap-2">
                                                <p className="mt-2 text-gray-500 text-mds">
                                                    De forskellige typer af produkter har forskellige kompleksiteter og derfor forskellige priser.
                                                </p>
                                                <div className="flex flex-row flex-wrap items-center gap-4 mt-4">
                                                    <SelectableBadge 
                                                        tooltip="En app er en applikation som kan downloades fra App Store eller Google Play Store."
                                                        selected={data.type == "APP"} 
                                                        text="App" onSelect={() => selectAppType("APP")}
                                                    />
                                                    <SelectableBadge 
                                                        tooltip="En almindelig hjemmeside uden login eller andre komplekse funktioner, fx. marketing bureauer."
                                                        selected={data.type == "WEBSITE"} 
                                                        text="Website" 
                                                        onSelect={() => selectAppType("WEBSITE")}
                                                    />
                                                    <SelectableBadge 
                                                        tooltip="Hjemmeside med større komplekse funktioner, fx. webshops, SaaS-platforme, m.m."
                                                        selected={data.type == "WEBAPP"}
                                                        text="Web app" 
                                                        onSelect={() => selectAppType("WEBAPP")} 
                                                    />
                                                    <SelectableBadge 
                                                        tooltip="Har du et projekt som ikke passer ind i nogle af de andre kategorier, så vælg denne."
                                                        selected={data.type == "OTHER"} 
                                                        text="Andet" 
                                                        onSelect={() => selectAppType("OTHER")} 
                                                    />
                                                </div>
                                                <NextButton />
                                            </div>
                                        )
                                    }
                                </div>
                                <div>
                                    <h2 onClick={() => setStep(2)} className={cn("text-lg font-medium text-main", step != 2 && "opacity-50 font-medium cursor-pointer")}>Hvad er dit budget?</h2>
                                    { 
                                        step == 2 && (
                                            <div className="flex flex-col gap-2">
                                                <p className="mt-2 text-gray-500 text-mds">
                                                    Det er vigtigt at have et realistisk budget, da det hjælper os med at give et mere præcist estimat.
                                                </p>
                                                <div className="flex flex-col gap-3 mt-4">
                                                    <Slider
                                                        min={1000}
                                                        max={250000}
                                                        step={1000}
                                                        value={data.budget}
                                                        onValueChange={(value) => setData({ ...data, budget: value })}
                                                    />
                                                    <p className="font-medium text-main">{data.budget?.[0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} kr.</p>
                                                </div>
                                                <NextButton />
                                            </div>
                                        )
                                    }
                                </div>
                                <div>
                                    <h2 onClick={() => setStep(3)} className={cn("text-lg font-medium text-main", step != 3 && "opacity-50 font-medium cursor-pointer")}>Beskriv dit projekt</h2>
                                    { 
                                        step == 3 && (
                                            <div className="flex flex-col gap-2">
                                                <p className="mt-2 text-gray-500 text-mds">
                                                    Giv os flest mulige detaljer omkring dit projekt, så vi kan give dig et mere præcist estimat.
                                                </p>
                                                <div className="flex items-center gap-4 mt-2 mb-2">
                                                    <Textarea 
                                                        placeholder="Beskriv dit projekt..."
                                                        value={data.description}
                                                        onChange={(e) => setData({ ...data, description: e.target.value })}
                                                        rows={5}
                                                    />
                                                </div>
                                                <NextButton />
                                            </div>
                                        )
                                    }
                                </div>
                                <div>
                                    <h2 onClick={() => setStep(4)} className={cn("text-lg font-medium text-main", step != 4 && "opacity-50 font-medium cursor-pointer")}>Kontakt oplysninger</h2>
                                    { 
                                        step == 4 && (
                                            <div className="flex flex-col gap-2">
                                                <p className="mt-2 text-gray-500 text-mds">
                                                    Vi vil vende hurtigst muligt tilbage til dig med et estimat på dit projekt.
                                                </p>
                                                <div className="flex flex-col items-center gap-2 mt-2 mb-2 md:gap-4">
                                                    <div className="flex flex-col w-full gap-2 md:flex-row">
                                                        <Input 
                                                            className="flex-1"
                                                            placeholder="Navn"
                                                            required
                                                            value={data.name}
                                                            onChange={(e) => setData({ ...data, name: e.target.value })}
                                                        />
                                                        <Input 
                                                            className="flex-1"
                                                            placeholder="Firma"
                                                            required
                                                            value={data.companyName}
                                                            onChange={(e) => setData({ ...data, companyName: e.target.value })}
                                                        />
                                                    </div>
                                                    <div className="flex flex-col w-full gap-2 md:flex-row">
                                                        <Input 
                                                            className="flex-1"
                                                            placeholder="Tlf. nr."
                                                            required
                                                            type="tel"
                                                            value={data.tlf}
                                                            onChange={(e) => setData({ ...data, tlf: e.target.value })}
                                                        />
                                                        <Input 
                                                            className="flex-1"
                                                            placeholder="E-mail"
                                                            required
                                                            type="email"
                                                            value={data.email}
                                                            onChange={(e) => setData({ ...data, email: e.target.value })}
                                                        />
                                                    </div>

                                                </div>
                                                <div className="flex flex-row justify-end mt-4 md:mt-0">
                                                    <button type="submit" className={cn("flex flex-row items-center justify-center gap-2 p-2 px-6 transition-all border-2 rounded-md border-main text-main hover:bg-main hover:text-white", submitting && "bg-main cursor-wait text-white")}>
                                                        {
                                                            submitting ? (
                                                                <Loading size={"xs"} color="#ffffff" />
                                                            ) : (
                                                                <>
                                                                    <p className="font-medium">Send forespørgsel</p>
                                                                    <Send size={20} />
                                                                </>
                                                            )
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div> 
                        </form>
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full gap-4">
                            <div className="flex flex-col items-center justify-center gap-2">
                                <div>
                                    <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-main">
                                        <Check size={32} color="white" />
                                    </div>
                                </div>
                                <h2 className="text-2xl font-semibold text-main">Tak for din forespørgsel!</h2>
                                <p className="text-gray-500 text-mds">
                                    Vi vil vende hurtigst muligt tilbage til dig med et estimat på dit projekt.
                                </p>
                            </div>
                        </div>
                    )}
            </SheetContent>
        </Sheet>
    )
}