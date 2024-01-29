import { ArrowRight, ArrowRightToLine } from "lucide-react";
import Link from "next/link";

type LargeBlogCard = {
    date: string;
    title: string;
    summary: string;
    author: string;
    authorTitle: string;
    authorImage: string;
    image: string;
    href?: string;
}

export default function LargeBlogCard({ date, title, summary, author, authorTitle, authorImage, image, href }: LargeBlogCard){
    return (
        <Link href={href || "/blog"} passHref>
            <style jsx>{`
                .image-overlay{
                    background: linear-gradient(180deg, rgba(255,255,255,0) 50%, rgba(0,0,0,0.5) 75%);
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                }
            `}</style>
            <article className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center group rounded-lg transition-all">
                <div className="flex-1 relative overflow-hidden rounded-lg">
                    <img alt="Blog" className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-all" src={image}/>
                    <div className="z-[2] absolute bottom-0 right-0 p-4">
                        <p className="text-main font-medium text-xs bg-white py-1 px-2 rounded-md">6 min. læsning</p>
                    </div>
                    <div className="image-overlay"/>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                    <p className="text-sm text-gray-500">{date}</p>
                    <h2 className="text-xl font-semibold text-main">{title}</h2>
                    <p className="hidden md:inline pt-4 pb-4 text-gray-700 text-sm lg:text-base">{summary}</p>
                    <div className="hidden md:flex flex-row">
                        <div className="flex items-center gap-2 text-main font-medium hover:underline">
                            <p>Læs mere</p>
                            <ArrowRight size={20} />
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}