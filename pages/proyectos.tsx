import { NextPage } from "next";
import CoverPicture from "@components/CoverPicture";
import ProjectCards from "@components/projects/ProjectCards";
import ContactSection from "@components/contact/ContactSection";

const Servicios: NextPage = () => {
  return (
    <main className="main">
      <CoverPicture
        src="/img/portada-proyectos.jpg"
        objectPosition="bottom"
        objectFit="cover"
      />
      <ProjectCards />
      <ContactSection />
    </main>
  );
};

export default Servicios;
