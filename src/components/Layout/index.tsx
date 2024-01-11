import Footer from "./Footer";
import Cta from "./Cta";
import Meta from "./Meta";
import Navbar, { PAGES } from "./Navbar";
import Script from "next/script";
import Reviews from "../reviews";

export default function Layout({
  page,
  className,
  children,
}: {
  page: PAGES;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Script
          src="/js/script.js"
          data-domain="ungeivaerksattere.dk"
          strategy="lazyOnload"
        />
        <Meta />
        <Navbar page={page} />
        <div className={`${className}`}>{children}</div>
      </div>
      <Reviews />
      <Footer />
    </div>
  );
}
