import Link from "next/link";

type SmallBlogCard = {
    date: string;
    title: string;
    summary: string;
    author: string;
    authorTitle: string;
    authorImage: string;
    image: string;
    href?: string;
}

export default function SmallBlogCard({ date, title, summary, author, authorTitle, authorImage, image, href }: SmallBlogCard){

    return (
        <Link href={href || "/blog"} passHref>
            <style jsx>{`
                article:hover{
                    background-color: #e4eefd;
                }
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
            <article 
                className={`active:scale-95 flex flex-col gap-4 items-center group hover:p-4 rounded-lg cursor-pointer transition-all`}
            >
                <div className="flex-1 relative">
                    <img alt="Blog" className="w-full h-auto object-cover rounded-lg" src={image}/>
                    <div className="z-[2] absolute bottom-0 right-0 p-4">
                        <p className="text-main font-medium text-xs bg-white py-1 px-2 rounded-md">6 min. læsning</p>
                    </div>
                    <div className="image-overlay"/>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-500">{date}</p>
                    <h2 className="text-xl font-semibold text-main">{title}</h2>
                </div>
            </article>
        </Link>
    )
}