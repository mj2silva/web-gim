import type { GetStaticProps, NextPage } from "next";
import Cover from "@components/home/Cover/Cover";
import Presentation from "@components/home/Presentation";
import ServicesPresentation from "@components/home/ServicesPresentation";
import ProjectsPresentation from "@components/home/ProjectsPresentation";
import HighLights from "@components/home/HighLights";
import ContactSection from "@components/contact/ContactSection";
import Head from "next/head";
import { getProjects } from "data/projectsRepository";
import { Project } from "@components/projects/types";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects({limit: 2});
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

const Home: NextPage<Props> = ({ projects }) => {

  return (
    <>
      <Head>
        <title>Home | GIM</title>
      </Head>
      <main>
        <Cover />
        <Presentation />
        <ServicesPresentation />
        <ProjectsPresentation projects={projects} />
        <HighLights />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
