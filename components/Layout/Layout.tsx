import { FC } from "react";
import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="whatsapp">A</div>
      <Footer />
    </>
  );
};

export default Layout;
