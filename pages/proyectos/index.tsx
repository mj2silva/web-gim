import { NextPage } from "next";
import CoverPicture from "@components/CoverPicture";
import ProjectCards from "@components/projects/ProjectCards";
import ContactSection from "@components/contact/ContactSection";
import Head from "next/head";

const Servicios: NextPage = () => {
  return (
    <>
      <Head>
        <title>Proyectos | GIM</title>
      </Head>
      <main className="main">
        <CoverPicture
          src="/img/encabezado.png"
          objectPosition="bottom"
          objectFit="cover"
        />
        <ProjectCards />
        <ContactSection />
      </main>
    </>
  );
};

export default Servicios;
