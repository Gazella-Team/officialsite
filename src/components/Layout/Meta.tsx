import Head from "next/head";

const Meta = ({
  title = "Gazella Team ┃ Unikke web-løsninger til din virksomhed",
  keywords = "Unikke web-løsninger til din virksomhed",
  description = "Unikke web-løsninger til din virksomhed",
  icon = "/favicon.ico",
  banner = "/seo/banner.png",
  url = "https://gazellateam.com",
}: {
  title?: string;
  keywords?: string;
  description?: string;
  icon?: string;
  banner?: string;
  url?: string;
}) => {
  return (
    <Head>
      <meta name="theme-color" content={"#051d40"} key="theme-color" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
        key="viewport"
      />
      <meta name="keywords" content={keywords} key="keyword" />
      <meta name="description" content={description} key="description" />

      <meta name="Language" content="en" key="lang" />
      <meta httpEquiv="Content-Language" content="en" key="content-lang" />

      <meta charSet="utf-8" key="charset" />
      <link rel="icon" href={icon} key="icon" />
      <title key="title">{title}</title>

      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:site_name"
        content="Unge Iværksættere"
        key="og:site_name"
      />
      <meta property="og:url" content={url} key="og:url" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:image" content={banner} key="og:image" />

      <meta
        property="twitter:card"
        content="summary_large_image"
        key="twitter:card"
      />
      <meta property="twitter:url" content={url} key="twitter:url" />
      <meta property="twitter:title" content={title} key="twitter:title" />
      <meta
        property="twitter:description"
        content={description}
        key="twitter:description"
      />
      <meta property="twitter:image" content={banner} key="twitter:banner" />
    </Head>
  );
};

export default Meta;
