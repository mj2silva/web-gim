import { FC } from "react";
import Header from "@components/Layout/Header/Header";

const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
