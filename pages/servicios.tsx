import { NextPage } from "next";
import Head from "next/head";
import ServicesDropdown from "@components/services/ServicesDropdown";
import ContactSection from "@components/contact/ContactSection";
import CoverPicture from "@components/CoverPicture";

const Servicios: NextPage = () => {
  return (
    <>
      <Head>
        <title>Servicios | GIM</title>
      </Head>
      <style global jsx>{`
        html {
          scroll-behavior: auto;
        }
      `}</style>
      <main className="main">
        <CoverPicture src={"/img/encabezado2.png"} />
        <ServicesDropdown />
        <ContactSection />
      </main>
    </>
  );
};

export default Servicios;
