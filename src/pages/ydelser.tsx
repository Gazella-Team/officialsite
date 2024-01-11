import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Services from "@/components/services";
export default function Ydelser() {
  return (
    <Layout page={PAGES.TEAM}>
      <Services />
    </Layout>
  );
}
