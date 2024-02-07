import { CheckIcon, ChevronRight} from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Animations/Reveal";

export default function LandigServices() {
  return (
    <section className="py-[70px] bg-gray-50">
      <div className="w-[92%] max-w-main mx-auto grid grid-cols-features xl:grid-cols-1">
        <div className="grid grid-cols-3 gap-[20px] gap-y-[20px] lndserv:grid-cols-1">
        <Reveal>
      <div className="bg-white p-[50px] rounded-[14px] shadow-main">
        <h2 className="text-[24px] font-[500] mb-[14px] text-main">
          Webudvikling
        </h2>
        <p className="text-[18px] font-[400] text-gray-600">
        We bring together public and commercial healthcare sites
        </p>
        <div className="mt-[40px] flex flex-col gap-[20px] mb-[70px]">
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Layout & opstilling</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Skrædersyet design</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">SEO Optimering</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Hastighedsoptimering</p>
            </div>
        </div>
        <Link className="flex text-[18px] font-[500] border-[2px] rounded-full px-10 py-4 border-main text-main items-center justify-center hover:bg-main hover:text-white transition-all" href={"/ydelser/webudvikling"}>Læs mere</Link>
      </div>
    </Reveal>
    <Reveal>
      <div className="bg-white p-[50px] rounded-[14px] shadow-main">
        <h2 className="text-[24px] font-[500] mb-[14px] text-main">
          Appudvikling
        </h2>
        <p className="text-[18px] font-[400] text-gray-600">
        We bring together public and commercial healthcare sites
        </p>
        <div className="mt-[40px] flex flex-col gap-[20px] mb-[70px]">
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Dit projekt</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Dit projekt</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Dit projekt</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Dit projekt</p>
            </div>
        </div>
        <Link className="flex text-[18px] font-[500] border-[2px] rounded-full px-10 py-4 border-main text-main items-center justify-center hover:bg-main hover:text-white transition-all" href={"/ydelser/webudvikling"}>Læs mere</Link>
      </div>
    </Reveal>
    <Reveal>
      <div className="bg-white p-[50px] rounded-[14px] shadow-main">
        <h2 className="text-[24px] font-[500] mb-[14px] text-main">
          SaaS udvikling
        </h2>
        <p className="text-[18px] font-[400] text-gray-600">
        We bring together public and commercial healthcare sites
        </p>
        <div className="mt-[40px] flex flex-col gap-[20px] mb-[70px]">
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Dit projekt</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Dit projekt</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Dit projekt</p>
            </div>
            <div className="flex items-center gap-[14px]">
            <CheckIcon />
            <p className="text-[18px] text-main font-[500]">Dit projekt</p>
            </div>
        </div>
        <Link className="flex text-[18px] font-[500] border-[2px] rounded-full px-10 py-4 border-main text-main items-center justify-center hover:bg-main hover:text-white transition-all" href={"/ydelser/webudvikling"}>Læs mere</Link>
      </div>
    </Reveal>
        </div>
      </div>
    </section>
  );
}


