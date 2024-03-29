import Footer from "./Footer";
import Meta from "./Meta";
import Navbar from "./Navbar";
import Script from "next/script";
import Cta from "./Cta";
import Follower from "./follower";

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
          <div className="pt-[95px]">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
