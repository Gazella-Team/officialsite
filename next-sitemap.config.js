/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://gazellateam.com",
    generateRobotsTxt: true,
    robotsTxtOptions: {
      additionalSitemaps: [
        "https://gazellateam.com/sitemap-1.xml",
      ],
    }
  }