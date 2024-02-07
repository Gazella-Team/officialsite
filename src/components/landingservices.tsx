import { CheckIcon} from "lucide-react"
import Link from "next/link"

export default function LandigServices() {
    return (
        <section className="py-[100px] pt-0">
            <div className="w-[92%] mx-auto max-w-main">
                <h1 className="text-[36px] font-[600] text-main">Software udvikling vi tilbyder</h1>
                <p className="text-gray-600 text-[20px] mb-[60px]">Skrædersyede løsninger til alle projekter og budgeter</p>
                <div className="grid grid-cols-3 gap-[20px] small:grid-cols-1">
                    <div className="bg-white shadow-xl rounded-[14px] p-[30px] small:mb-[60px]">
                        <h1 className="text-[22px] font-[600] text-main mb-[10px]">Webudvikling</h1>
                        <p className="text-[16px] text-gray-600 mb-[40px]">Unikke løsninger med alt fra simple landingssider til funktionelle web-apps</p>
                        <div className="flex flex-col justify-center gap-[14px] mb-[50px]">
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Hosting & domain</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Backend funktioner</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Skrædersyet design</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">SEO-optimering</p>
                            </div>
                        </div>
                        <Link className="bg-main flex text-white p-[10px] text-[15px] font-[500] rounded-[14px] items-center justify-center" href={"/ydelser/webudvikling"}>Læs mere</Link>
                    </div>
                    <div className="bg-white shadow-xl rounded-[14px] p-[30px] small:mb-[60px]">
                        <h1 className="text-[22px] font-[600] text-main mb-[10px]">Webudvikling</h1>
                        <p className="text-[16px] text-gray-600 mb-[40px]">Unikke løsninger med alt fra simple landingssider til funktionelle web-apps</p>
                        <div className="flex flex-col justify-center gap-[14px] mb-[50px]">
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Hosting & domain</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Backend funktioner</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Skrædersyet design</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">SEO-optimering</p>
                            </div>
                        </div>
                        <Link className="bg-main flex text-white p-[10px] text-[15px] font-[500] rounded-[14px] items-center justify-center" href={"/ydelser/webudvikling"}>Læs mere</Link>
                    </div>
                    <div className="bg-white shadow-xl rounded-[14px] p-[30px]">
                        <h1 className="text-[22px] font-[600] text-main mb-[10px]">Webudvikling</h1>
                        <p className="text-[16px] text-gray-600 mb-[40px]">Unikke løsninger med alt fra simple landingssider til funktionelle web-apps</p>
                        <div className="flex flex-col justify-center gap-[14px] mb-[50px]">
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Hosting & domain</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Backend funktioner</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">Skrædersyet design</p>
                            </div>
                            <div className="flex items-center gap-[10px]">
                                <CheckIcon color="#051d40" />
                                <p className="text-main font-[500]">SEO-optimering</p>
                            </div>
                        </div>
                        <Link className="bg-main flex text-white p-[10px] text-[15px] font-[500] rounded-[14px] items-center justify-center" href={"/ydelser/webudvikling"}>Læs mere</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}