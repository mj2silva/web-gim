import Head from "next/head";
import ContactSection from "@components/contact/ContactSection";
import Project from "@components/projects/singleProject/Project";

const ProjectPage = () => {
  return (
    <>
      <Head>
        <title>Proyecto | GIM</title>
      </Head>
      <main className="main">
        <Project />
        <ContactSection />
      </main>
    </>
  );
};

export default ProjectPage;
