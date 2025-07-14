import ScrollToTop from "@/components/common/ScrollToTop";
import { Outlet } from "react-router";
import Header from "../common/Header";
import Footer from "../common/Footer";

const RootLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
