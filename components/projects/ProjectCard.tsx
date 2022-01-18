import { FC } from "react";
import { Project } from "@components/projects/types";
import Image from "next/image";

import styles from "@styles/modules/ProjectCards.module.scss";
interface Props {
  project: Project;
}

const ProjectCard: FC<Props> = ({ project }) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ProjectCardImage}>
        <Image src={project.pictureUrl} alt={project.name} layout="fill" />
      </div>
      <div className={styles.ProjectCardInfo}>
        <h4 className={styles.ProjectCardName}>{project.name.toUpperCase()}</h4>
        <h6 className={styles.ProjectCardLocation}>{project.location}</h6>
      </div>
    </div>
  );
};

export default ProjectCard;
