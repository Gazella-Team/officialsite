import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import WorkOps from "@/components/workops";
export default function Ydelser() {
  return (
    <Layout page={PAGES.TEAM}>
      <WorkOps />
    </Layout>
  );
}
