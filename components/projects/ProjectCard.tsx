import { FC } from "react";
import { Project } from "@components/projects/types";
import Image from "next/image";
import Link from "next/link";

import styles from "@styles/modules/ProjectCards.module.scss";
interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <Link href="/proyectos/casa-villanueva" passHref>
      <a className={styles.ProjectCard}>
        <div className={styles.ProjectCardImage}>
          <Image src={project.pictureUrl} alt={project.name} layout="fill" />
        </div>
        <div className={styles.ProjectCardInfo}>
          <h4 className={styles.ProjectCardName}>
            {project.name.toUpperCase()}
          </h4>
          <h6 className={styles.ProjectCardLocation}>{project.location}</h6>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
