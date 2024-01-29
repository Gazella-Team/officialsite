import SmallBlogCard from "@/components/Blog/SmallBlogCard";
import Layout from "@/components/Layout";
import Meta from "@/components/Layout/Meta";

export default function BlogItem(){
    return (
        <Layout>
            <Meta
                title="Sådan måler du effekten af brand awareness kampagner | Gazella Team"
                description="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
            >
                <link rel="canonical" href="https://gazellateam.com/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner" />
            </Meta>
            <div className="bg-white">
                <div className="pb-32 pt-24 bg-gradient-to-r from-[#062c63] via-main to-[#062c63] flex flex-col justify-center">
                    <div className="w-[90%] mx-auto max-w-2xl">
                        <div className="flex flex-col justify-center text-center items-center h-full gap-4">
                            <h1 className="text-4xl text-white font-medium">Sådan måler du effekten af brand awareness kampagner</h1>
                            <summary className="text-white/90 text-base text-medium">Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung.</summary>
                            <div className="flex justify-center">
                                <p className="text-white text-sm">February 14, 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[95%] py-8 pt-16 mx-auto max-w-main overflow-hidden flex flex-col md:flex-row gap-8">
                    <aside className="relative flex-shrink">
                        <div className="sticky top-2 flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-lg font-medium text-main">Indholdsfortegnelse</p>
                                <ul className="text-base text-gray-600">
                                    <li className="my-1.5 pl-2"><a className="hover:text-main font-medium transition-all" href="#hvad-er-brand-awareness">Hvad er brand awareness?</a></li>
                                    <li className="my-1.5 pl-2"><a className="hover:text-main font-medium transition-all" href="#hvordan-maler-du-effekten-af-brand-awareness">Hvordan måler du effekten af brand awareness?</a></li>
                                    <li className="my-1.5 pl-2"><a className="hover:text-main font-medium transition-all" href="#konklusion">Konklusion</a></li>
                                </ul>
                            </div>
                            <div className="h-[2px] bg-gray-200 rounded-full"/>
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-medium text-main">Forfattere</p>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <img alt={"Simon Maribo"} className="w-10 h-10 object-cover rounded-full border border-gray-300" src={"/simonmaribo.jpg"}/>
                                    </div>
                                    <div>
                                        <p className="text-main font-medium">Simon Maribo</p>
                                        <p className="text-gray-700 text-sm">Stifter</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article className="relative md:flex-1 w-full mx-auto max-w-none">
                        Wjhatu
                    </article>
                </div>
                <div className="w-[95%] py-8 mb-16 mx-auto max-w-main flex flex-col gap-2">
                    <p className="text-2xl font-medium text-main">Lignende artikler</p>
                    <div className="grid grid-cols-1 blogGrid2:grid-cols-2 blogGrid3:grid-cols-3 gap-x-6 gap-y-10">
                        <SmallBlogCard
                            date="February 14, 2023"
                            title="Sådan måler du effekten af brand awareness kampagner"
                            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
                            author="Mathias Kokfelt"
                            authorTitle="Marketing Manager"
                            authorImage="/simonmaribo.jpg"
                            image="/cases/organicmasterclass/organicmasterclass.jpg"
                            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
                        />
                        <SmallBlogCard
                            date="February 14, 2023"
                            title="Sådan måler du effekten af brand awareness kampagner"
                            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
                            author="Mathias Kokfelt"
                            authorTitle="Marketing Manager"
                            authorImage="/simonmaribo.jpg"
                            image="/cases/organicmasterclass/organicmasterclass.jpg"
                            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
                        />
                        <SmallBlogCard
                            date="February 14, 2023"
                            title="Sådan måler du effekten af brand awareness kampagner"
                            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
                            author="Mathias Kokfelt"
                            authorTitle="Marketing Manager"
                            authorImage="/simonmaribo.jpg"
                            image="/cases/organicmasterclass/organicmasterclass.jpg"
                            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}