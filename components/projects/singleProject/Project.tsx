import { FC, useState } from "react";
import Link from "next/link";
import cn from "classnames";

import styles from "@styles/ProjectPage.module.scss";
import SectionSubtitle from "@components/SectionSubtitle";
import ProjectImageSlider from "@components/projects/singleProject/ProjectImageSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Project } from "@components/projects/types";

interface Props {
  project: Project;
}

const Project: FC<Props> = ({ project }) => {
  const [showMore, setShowMore] = useState(false);
  const icon = showMore ? faMinus : faPlus;
  const descriptionClassName = cn(styles.ProjectDescription, {
    [styles.ProjectDescription_closed]: !showMore,
  });

  const handleShowMore = () => {
    setShowMore((sm) => !sm);
  };

  return (
    <section className={styles.Project}>
      <div className={styles.ProjectContainer}>
        {project.images && (
          <ProjectImageSlider
            className={styles.ProjectSlider}
            images={[
              { src: project.coverImage, alt: project.title + "cover" },
              ...project.images?.map((image, index) => ({
                src: image,
                alt: project.title + index,
              })),
            ]}
          />
        )}
        <div className={styles.ProjectPresentation}>
          <div className={styles.ProjectTitle}>
            <SectionSubtitle title={project.title} />
          </div>
          <div
            className={descriptionClassName}
            style={{
              maxHeight: showMore ? "initial" : "12rem",
              overflow: "hidden",
            }}
          >
            {project.text?.map((par, index) => (
              <p key={`par-${project.id}-${index}`}>{par}</p>
            ))}
          </div>
          <button onClick={handleShowMore} className={styles.ProjectPlus}>
            <FontAwesomeIcon icon={icon} />
          </button>
        </div>
      </div>
      <div className={styles.ProjectButton}>
        <Link href="/proyectos ">
          <a className={"button"}>Ver más proyectos</a>
        </Link>
      </div>
    </section>
  );
};

export default Project;
