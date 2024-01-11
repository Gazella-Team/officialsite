import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Udviklingside from "@/components/udviklingside";
export default function Ydelser() {
  return (
    <Layout page={PAGES.TEAM}>
      <Udviklingside />
    </Layout>
  );
}
