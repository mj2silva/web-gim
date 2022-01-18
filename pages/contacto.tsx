import { NextPage } from "next";
import ContactSection from "@components/contact/ContactSection";
import Head from "next/head";

const Contacto: NextPage = () => {
  return (
    <>
      <Head>
        <title>Contacto | GIM</title>
      </Head>
      <main className="main">
        <ContactSection />
      </main>
    </>
  );
};

export default Contacto;
