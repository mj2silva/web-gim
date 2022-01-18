import { NextPage } from "next";
import Head from "next/head";
import TeamCards from "@components/about-us/our-team/TeamCards";
import ContactSection from "@components/contact/ContactSection";

const NuestroEquipo: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nosotros - Nuestro Equipo | GIM</title>
      </Head>
      <main className="main">
        <TeamCards />
        <ContactSection />
      </main>
    </>
  );
};

export default NuestroEquipo;
