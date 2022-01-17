import type { NextPage } from "next";
import Cover from "@components/home/Cover/Cover";
import Presentation from "@components/home/Presentation";
import ServicesPresentation from "@components/home/ServicesPresentation";
import ProjectsPresentation from "@components/home/ProjectsPresentation";

const Home: NextPage = () => {
  return (
    <main>
      <Cover />
      <Presentation />
      <ServicesPresentation />
      <ProjectsPresentation />
    </main>
  );
};

export default Home;
