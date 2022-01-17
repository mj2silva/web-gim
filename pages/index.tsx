import type { NextPage } from "next";
import Cover from "@components/home/Cover/Cover";
import Presentation from "@components/home/Presentation";
import ServicesPresentation from "@components/home/ServicesPresentation";
import ProjectsPresentation from "@components/home/ProjectsPresentation";
import HighLights from "@components/home/HighLights";
import ContactSection from "@components/contact/ContactSection";

const Home: NextPage = () => {
  return (
    <main>
      <Cover />
      <Presentation />
      <ServicesPresentation />
      <ProjectsPresentation />
      <HighLights />
      <ContactSection />
    </main>
  );
};

export default Home;
