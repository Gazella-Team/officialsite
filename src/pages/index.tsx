import Link from 'next/link'
import { Reveal } from '@/components/Animations/Reveal'
import Meta from '@/components/Layout/Meta'
import Layout from '@/components/Layout'
import { ChevronRight } from 'lucide-react'
import Mission from '@/components/mission'
import Features from '@/components/features'

export default function Index() {
    return (
        <>
            <Meta />
            <Layout>
                <section className="py-[100px] bg-[url(/heropatternsvg.svg)] bg-cover pb-[300px] w-[100%] mx-auto max-w-none hro:mt-0 hro:bg-[#f1faff] hro:py-[100px] hro:mb-[100px]">
                    <Reveal>
                        <div className="w-[95%] mx-auto max-w-main lg:w-[90%]">
                            <div className="flex flex-col justify-center gap-[20px] mb-[50px]">
                                <h1 className="text-[80px] font-[500] text-main mb-[8px] w-[76%] leading-[80px] lg:text-[60px] lg:leading-[70px] hro:w-full mid:text-[40px] mid:leading-[40px]">
                                    A software agency wih passion for profitable
                                    solutions.
                                </h1>
                                <p className="text-[22px] text-gray-600 font-[400] mb-[30px] w-[40%] hro:w-full mid:text-[18px]">
                                    We specialise in building unique, useful and
                                    profitable software for businesses and
                                    projects.
                                </p>
                                <div className="flex items-center gap-[14px]">
                                    <Link
                                        className="inline-block cursor-pointer font-[500] select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-white bg-main"
                                        href={'/work/cases'}
                                    >
                                        See our work
                                    </Link>
                                    <Link
                                        className="flex cursor-pointer font-[500] select-none px-6 py-2 items-center gap-[6px] text-center transition-all border-[2px] border-main rounded-full text-main"
                                        href={'/contact'}
                                    >
                                        Contact us
                                        <ChevronRight size={22} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </section>
                <Mission />
                <Features
                    Obj={[
                        {
                            heading: 'Guaranteed satisfaction',
                            description:
                                "We refund all your money, if you're not satisfied with our work.",
                        },
                        {
                            heading: 'Fast delivery',
                            description:
                                'With optimized work processes, we ensure to delivery on record-time.',
                        },
                        {
                            heading: 'Firm digital partner',
                            description:
                                'We support your digital situation both past and post collaboration.',
                        },
                        {
                            heading: 'Latest technology',
                            description:
                                'All solutions we offer, are build using the best technology on the market.',
                        },
                        {
                            heading: 'Non-binding',
                            description:
                                "All collaboration is non-binding, and you can abort if you're dissatisfied.",
                        },
                        {
                            heading: 'Everyday support',
                            description:
                                'We offer customers 14 hours digital support all days of the week.',
                        },
                    ]}
                />
            </Layout>
        </>
    )
}
