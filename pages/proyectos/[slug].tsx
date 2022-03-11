import Head from "next/head";
import ContactSection from "@components/contact/ContactSection";
import Project from "@components/projects/singleProject/Project";
import type { Project as ProjectType } from "../../components/projects/types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import {
  getProjectBySlug,
  getProjectsSlugs,
} from "../../data/projectsRepository";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const project = slug && (await getProjectBySlug(slug as string));
  return {
    props: {
      project: JSON.stringify(project),
    },
    revalidate: 5000,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getProjectsSlugs();
  const paths = projects.map((slug) => ({
    params: { slug },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

interface Props {
  project: string;
}

const ProjectPage: NextPage<Props> = ({ project }) => {
  return (
    <>
      <Head>
        <title>Proyecto | GIM</title>
      </Head>
      <main className="main">
        <Project project={JSON.parse(project) as ProjectType} />
        <ContactSection />
      </main>
    </>
  );
};

export default ProjectPage;
