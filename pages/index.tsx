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
import { getSlidesHome } from "data/slidesRepository";
import { Slide } from "data/types";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects({limit: 2});
  const slidesHome = await getSlidesHome();
  return {
    props: {
      projects,
      slidesHome,
    },
    revalidate: 1000,
  }
};

type Props = {
  projects: Project[];
  slidesHome: Slide[];
}

const Home: NextPage<Props> = ({ projects, slidesHome }) => {
  return (
    <>
      <Head>
        <title>Home | GIM</title>
      </Head>
      <main>
        <Cover slides={slidesHome} />
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
