import { Reveal } from '@/components/Animations/Reveal'
import LargeBlogCard from '@/components/Blog/LargeBlogCard'
import Layout from '@/components/Layout'
import Meta from '@/components/Layout/Meta'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import Hero from '@/components/Layout/hero'
import Description from '@/components/description'
import { BookCopy } from 'lucide-react'
import SmallBlogCard from '@/components/Blog/SmallBlogCard'
import {
    GetStaticProps,
    GetStaticPropsContext,
    InferGetStaticPropsType,
} from 'next'
import { prettyDate } from '@/utils/date'

export default function BlogList({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            <Meta
                title="Gazella Blogs - Lær hvordan du bygger din hjemmeside"
                description="Vi arbejder hele tiden på at skrive nye artikler, hvor vores team deler ud af tips & tricks i forhold til hvordan du laver din hjemmeside."
            />
            <Hero
                description="            By collaborating with companies and organizations doing what they do best, we're able to deliver the best possible results for our customers. We live by the philosophy that nothing great is created alone, which is why we value long-term relations with both customers and partners.
                "
                background="bg-[linear-gradient(rgba(5,29,64,0.30),rgba(5,29,64,1)),url(/herobg/blog.jpg)] bg-center bg-cover"
                heading="Blog"
                section="læring"
                icon={
                    <BookCopy
                        strokeWidth={1.3}
                        fontWeight={100}
                        color="#ffffff"
                        size={70}
                    />
                }
            />
            <div className="w-[92%] max-w-main mx-auto py-[60px] flex flex-col gap-10">
                <div className="max-w-lg flex flex-col gap-2">
                    <h1 className="text-main text-4xl font-[600]">
                        Latest articles
                    </h1>
                </div>
                {posts.length > 0 && (
                    <LargeBlogCard
                        date={prettyDate(posts[0].publishedAt)}
                        title={posts[0].title}
                        summary={posts[0].summary || ''}
                        author="Simon Maribo"
                        authorTitle="Co-Founder"
                        authorImage="/simonmaribo.jpg"
                        image={posts[0].coverURL || ''}
                        href={`/blog/${posts[0].slug}`}
                    />
                )}
                {posts.length > 1 && (
                    <div className="grid grid-cols-1 blogGrid2:grid-cols-2 blogGrid3:grid-cols-3 gap-x-6 gap-y-10">
                        {posts.slice(1).map((post) => (
                            <SmallBlogCard
                                key={post.id}
                                date={prettyDate(post.publishedAt)}
                                title={post.title}
                                summary={post.summary || ''}
                                author="Simon Maribo"
                                authorTitle="Co-Founder"
                                authorImage="/simonmaribo.jpg"
                                image={post.coverURL || ''}
                                href={`/blog/${post.slug}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    )
}

type PostListItem = {
    id: string
    title: string
    summary: string | null
    slug: string
    coverURL: string | null
    publishedAt: Date
    createdAt: Date
}

export const getStaticProps: GetStaticProps<{ posts: PostListItem[] }> = async (
    context: GetStaticPropsContext
) => {
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
            notFound: true,
        }
    }
    if (data.status !== 200) {
        return {
            notFound: true,
        }
    }

    let posts = await data.json()

    return {
        props: {
            posts,
        },
        revalidate: 10,
    }
}
