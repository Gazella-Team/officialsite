import Layout from "@/components/Layout";
import { PAGES } from "@/components/Layout/Navbar";
import Dynamic from "@/components/dynamic";
export default function Coad() {
  return (
    <Layout page={PAGES.HOME}>
      <Dynamic />
    </Layout>
  );
}
