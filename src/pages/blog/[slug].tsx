import SmallBlogCard from '@/components/Blog/SmallBlogCard'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import { motion, useScroll } from 'framer-motion'
import {
    GetStaticProps,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from 'next'

import styles from './[slug].module.css'
import { prettyDate } from '@/utils/date'
import { useMemo } from 'react'
import { createTableOfContents, Heading } from '@/utils/toc'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

function TocItem({ item }: { item: Heading }) {
    return (
        <li className="my-2.5 pl-2">
            <a
                className="hover:text-main font-medium transition-all"
                href={`#${item.content}`}
            >
                {item.content}
            </a>
            {item.children.length > 0 && (
                <ul className="text-gray-600 ml-2">
                    {item.children.map((child) => (
                        <TocItem key={child.content} item={child} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default function BlogPost({
    post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    const { scrollYProgress } = useScroll()

    const toc = useMemo(
        () => createTableOfContents(post?.html || ''),
        [post?.html]
    )

    // take all headings and add id="#<content>" to them without using DOMParser, should use Regex
    const formattedHtml = useMemo(() => {
        if (!post?.html) {
            return null
        }

        const regex = /<(h[1-3])>(.*?)<\/\1>/g
        return post.html.replace(regex, `<$1 id="$2">$2</$1>`)
    }, [post?.html])

    if (!post) {
        return null
    }

    return (
        <Layout>
            <Meta title={post.title} description={post.summary || ''}>
                <link
                    rel="canonical"
                    href={`https://gazellateam.com/blog/${post.slug}`}
                />
            </Meta>
            <style jsx>{`
                .active {
                    color: #062c63;
                }
            `}</style>
            <div className="bg-white relative">
                <div className="py-12 flex flex-col justify-center">
                    <div className="w-[90%] mx-auto max-w-4xl">
                        <div className="flex flex-col justify-center text-center items-center h-full gap-4">
                            <div>
                                <Link
                                    href="/blog"
                                    className="flex flex-row gap-2 items-center active:scale-[0.98] justify-center text-main font-medium hover:underline transition-all"
                                >
                                    <ArrowLeft size={20} />
                                    <p className="font-medium">Back to blogs</p>
                                </Link>
                            </div>
                            <h1 className="text-3xl secondLg:text-4xl font-bold text-main">
                                {post.title}
                            </h1>
                            <summary className="max-w-2xl mx-auto font-medium text-base secondLg:text-lg text-main">
                                {post.summary || ''}
                            </summary>
                            <div className="flex justify-center">
                                <p className="text-gray-700 font-semibold text-sm">
                                    {prettyDate(post.publishedAt)}
                                </p>
                            </div>
                        </div>
                    </div>
                    {post.coverURL && (
                        <div className="w-[90%] flex secondLg:grid secondLg:grid-cols-[192px_minmax(0px,1fr)_192px] max-w-[1300px] mx-auto gap-14">
                            <div />
                            <div className="mx-auto w-full h-full mt-8">
                                <img
                                    alt={post.title}
                                    className="w-full object-cover rounded-lg"
                                    src={post.coverURL}
                                />
                            </div>
                            <div />
                        </div>
                    )}
                </div>
                {/*
                    <motion.div
                        className="h-[10px] bg-main origin-left sticky top-0 z-[80]"
                        style={{ scaleX: scrollYProgress }}
                    />
                */}
                <div className="w-[95%] mx-auto py-8 flex flex-col md:grid md:grid-cols-[300px_minmax(0px,1fr)_0px] secondLg:grid-cols-[300px_minmax(0px,1fr)_100px] max-w-[1300px] gap-14">
                    <aside className="relative flex-shrink">
                        <div className="sticky top-48 flex flex-col gap-4">
                            <div className="flex flex-col gap-1">
                                <p className="text-2xl font-semibold text-main">
                                    Table of Contents
                                </p>
                                <ul className="text-base  text-gray-600">
                                    {toc.map((item) => (
                                        <TocItem
                                            key={item.content}
                                            item={item}
                                        />
                                    ))}
                                </ul>
                            </div>
                            <div className="h-[2px] bg-gray-200 rounded-full" />
                            <div className="flex flex-col gap-2">
                                <p className="text-lg font-semibold text-main">
                                    Authors
                                </p>
                                <div className="flex items-center gap-4">
                                    <div>
                                        <img
                                            alt={'Simon Maribo'}
                                            className="w-10 h-10 object-cover rounded-full border border-gray-300"
                                            src={'/team/simonmaribo.jpg'}
                                        />
                                    </div>
                                    <div>
                                        <p className="text-main font-medium">
                                            Simon Maribo
                                        </p>
                                        <p className="text-gray-700 text-sm">
                                            Co-Founder
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <article
                        className={styles.blog}
                        dangerouslySetInnerHTML={{
                            __html: formattedHtml || '',
                        }}
                    />
                    <div />
                </div>
                <div className="w-[95%] py-8 mb-16 mx-auto max-w-main flex flex-col gap-6">
                    <p className="text-2xl font-medium text-main">
                        Lignende artikler
                    </p>
                    <div className="grid grid-cols-1 blogGrid2:grid-cols-2 blogGrid3:grid-cols-3 gap-x-6 gap-y-10">
                        <SmallBlogCard
                            date="February 14, 2023"
                            title="Sådan måler du effekten af brand awareness kampagner"
                            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
                            author="Mathias Kokfelt"
                            authorTitle="Marketing Manager"
                            authorImage="/team/simonmaribo.jpg"
                            image="/cases/organicmasterclass/organicmasterclass.jpg"
                            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
                        />
                        <SmallBlogCard
                            date="February 14, 2023"
                            title="Sådan måler du effekten af brand awareness kampagner"
                            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
                            author="Mathias Kokfelt"
                            authorTitle="Marketing Manager"
                            authorImage="/team/simonmaribo.jpg"
                            image="/cases/organicmasterclass/organicmasterclass.jpg"
                            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
                        />
                        <SmallBlogCard
                            date="February 14, 2023"
                            title="Sådan måler du effekten af brand awareness kampagner"
                            summary="Har du problemer med at måle effekten af dine brand awareness influencer kampagner? I dette indlæg gennemgår jeg 4 metoder hvorpå du kan måle effekten af din brand awareness, uden at skulle frem med den helt store pengepung."
                            author="Mathias Kokfelt"
                            authorTitle="Marketing Manager"
                            authorImage="/team/simonmaribo.jpg"
                            image="/cases/organicmasterclass/organicmasterclass.jpg"
                            href="/blog/soadan-maler-du-effekten-af-brand-awareness-kampagner"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    try {
        var data = await fetch(
            `https://easyblogs-api.gazellateam.com/api/posts`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.EASYBLOG_API_KEY}`,
                },
            }
        )
    } catch (error) {
        return {
            paths: [],
            fallback: true,
        }
    }
    if (data.status !== 200) {
        return {
            paths: [],
            fallback: true,
        }
    }

    let posts = await data.json()
    const paths = posts.map((post: { slug: string }) => ({
        params: { slug: post.slug },
    }))

    return {
        paths,
        fallback: true,
    }
}

type Post = {
    id: string
    title: string
    summary: string | null
    slug: string
    content: string | null
    coverURL: string | null
    publishedAt: string
    createdAt: Date
    html?: string
}

export const getStaticProps: GetStaticProps<{ post: Post }> = async (
    context: GetStaticPropsContext
) => {
    const slug = context.params?.slug

    try {
        var data = await fetch(
            `https://easyblogs-api.gazellateam.com/api/posts/${slug}?html=true`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${process.env.EASYBLOG_API_KEY}`,
                },
            }
        )
    } catch (error) {
        return {
            notFound: true,
        }
    }
    if (data.status !== 200) {
        return {
            notFound: true,
        }
    }

    let post = await data.json()

    return {
        props: {
            post,
        },
        revalidate: 10,
    }
}
