import { FC } from "react";
import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer";
import FloatingButton from "@components/Layout/FloatingButton";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <FloatingButton />
      <Footer />
    </>
  );
};

export default Layout;
