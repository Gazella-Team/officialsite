import Footer from "./Footer";
import Cta from "./Cta";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Script from "next/script";
import Reviews from "../reviews";

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div>
        <Script
          src="/js/script.js"
          data-domain="ungeivaerksattere.dk"
          strategy="lazyOnload"
        />
        <Meta />

        <div className={`${className}`}>
          <Meta />

          <Navbar />
          <div className="pt-[90px]">
            {children}

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
