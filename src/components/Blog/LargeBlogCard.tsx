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
            <article className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
                <div className="flex-1">
                    <img alt="Blog" className="w-full h-auto object-cover rounded-lg border border-gray-300" src={image}/>
                </div>
                <div className="flex-1">
                    <p className="text-sm text-gray-500">{date}</p>
                    <h2 className="text-xl font-semibold text-main">{title}</h2>
                    <p className="pt-4 pb-10 text-gray-700">{summary}</p>
                    <div className="flex items-center gap-4">
                        <div>
                            <img alt={author} className="w-10 h-10 object-cover rounded-full border border-gray-300" src={authorImage}/>
                        </div>
                        <div>
                            <p className="text-main font-medium">{author}</p>
                            <p className="text-gray-700 text-xs">{authorTitle}</p>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}