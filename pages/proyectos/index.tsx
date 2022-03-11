import { GetStaticProps, NextPage } from "next";
import CoverPicture from "@components/CoverPicture";
import ProjectCards from "@components/projects/ProjectCards";
import ContactSection from "@components/contact/ContactSection";
import Head from "next/head";
import { Project } from "@components/projects/types";
import { getProjects } from "data/projectsRepository";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects,
    },
    revalidate: 1000,
  }
};

type Props = {
  projects: Project[];
}

const Servicios: NextPage<Props> = ({projects}) => {
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
        <ProjectCards projects={projects} />
        <ContactSection />
      </main>
    </>
  );
};

export default Servicios;
