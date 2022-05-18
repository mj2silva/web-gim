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
import { getSlidesHome, getSlidesMobile } from "data/slidesRepository";
import { Slide } from "data/types";
import BrandsCarousel from "@components/home/BrandsCarousel";

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects({ limit: 2 });
  const slidesHome = await getSlidesHome();
  const slidesMobile = await getSlidesMobile();
  return {
    props: {
      projects,
      slidesHome,
      slidesMobile,
    },
    revalidate: 1000,
  };
};

type Props = {
  projects: Project[];
  slidesHome: Slide[];
  slidesMobile: Slide[];
};

const Home: NextPage<Props> = ({ projects, slidesHome, slidesMobile }) => {
  return (
    <>
      <Head>
        <title>Home | GIM</title>
      </Head>
      <main>
        <Cover slides={slidesHome} slidesMobile={slidesMobile} />
        <Presentation />
        <ServicesPresentation />
        <ProjectsPresentation projects={projects} />
        <HighLights />
        <BrandsCarousel />
        <ContactSection />
      </main>
    </>
  );
};

export default Home;
