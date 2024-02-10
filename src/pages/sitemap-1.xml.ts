import { ServerResponse } from "http";

function generateSiteMap(routes: { url: string; lastModified: Date }[]) {
    return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${(routes.map(route => {
        return `
        <url>
            <loc>${route.url}</loc>
            <lastmod>${new Date(route.lastModified).toISOString()}</lastmod>
        </url>
        `;
    }).join(""))}
   </urlset>
 `;
}

function SiteMap() {
    // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: ServerResponse }) {

    let pages: {
        url: string;
        lastModified: Date;
    }[] = []

    try {
        const data = await fetch(`https://easyblogs-api.gazellateam.com/api/posts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.EASYBLOG_API_KEY}`
            }
        })
        const posts = await data.json()
        posts.forEach((post: any) => {
            pages.push({
                url: `https://gazellateam.com/blog/${post.slug}`,
                lastModified: post.publishedAt,
            })
        })

    } catch (error) {
        console.log(error)
    }

    const routes = [...pages];

    // We generate the XML sitemap with the posts data
    const sitemap = generateSiteMap(routes);

    res.setHeader('Content-Type', 'text/xml');
    // we send the XML to the browser
    res.write(sitemap);
    res.end();

    return {
        props: {},
        revalidate: 10,
    };
}

export default SiteMap;