import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Services from "@/components/services";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
export default function Ydelser() {
  return (
    <div>
      <Navbar page={PAGES.HOME} />
      <Services />
      <Footer />
    </div>
  );
}
