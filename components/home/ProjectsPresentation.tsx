import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionTitle from "@components/SectionTitle";

import styles from "@styles/modules/ProjectsPresentation.module.scss";
import CarouselProvider from "@components/Caroussel/CarouselContext";

const ProjectsPresentation: FC = () => {
  return (
    <section className={styles.ProjectsPresentation}>
      <div className={styles.ProjectsPresentationTitle}>
        <SectionTitle text="Conoce nuestros" highlightedText="proyectos" />
      </div>
      <CarouselProvider totalPages={1}>
        <div className={styles.ProjectsPresentationCarousel}>
          <div className={styles.ProjectsPresentationItems}>
            <div
              className={
                styles.ProjectsPresentationItem +
                " " +
                styles.ProjectsPresentationItem_first
              }
            >
              <Image alt="oxxo" src="/img/oxxo-color.jpg" layout="fill" />
            </div>
            <div
              className={
                styles.ProjectsPresentationItem +
                " " +
                styles.ProjectsPresentationItem_second
              }
            >
              <Image alt="oxxo" src="/img/tambo-color.jpg" layout="fill" />
            </div>
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
