import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@components/SectionTitle";

import styles from "@styles/modules/ProjectsPresentation.module.scss";
import CarouselProvider from "@components/Caroussel/CarouselContext";
import { Project } from "@components/projects/types";

type Props = {
  projects: Project[];
};

const ProjectsPresentation: FC<Props> = ({ projects }) => {
  return (
    <section className={styles.ProjectsPresentation}>
      <div className={styles.ProjectsPresentationTitle}>
        <SectionTitle text="Conoce nuestros" highlightedText="proyectos" />
      </div>
      <CarouselProvider totalPages={1}>
        <div className={styles.ProjectsPresentationCarousel}>
          <div className={styles.ProjectsPresentationItems}>
            {projects.map((project, index) => (
              <Link
                href={`/proyectos/${project.slug}`}
                passHref
                key={project.id}
              >
                <a
                  className={
                    styles.ProjectsPresentationItem +
                    " " +
                    (index % 2 === 0
                      ? styles.ProjectsPresentationItem_second
                      : styles.ProjectsPresentationItem_first)
                  }
                >
                  <Image
                    alt={project.title}
                    src={project.coverImage}
                    layout="fill"
                  />
                </a>
              </Link>
            ))}
          </div>
          <div className={styles.ProjectsPresentationControlsContainer}>
            <div className={styles.ProjectsPresentationDecorator_left} />
            <div className={styles.ProjectsPresentationControls}>
              <button className={styles.ProjectsPresentationControl} />
            </div>
            <div className={styles.ProjectsPresentationDecorator_right} />
          </div>
        </div>
      </CarouselProvider>
      <Link href="/proyectos" passHref>
        <a className={styles.ProjectsPresentationButton + " button"}>
          Ver más proyectos
        </a>
      </Link>
    </section>
  );
};

export default ProjectsPresentation;
