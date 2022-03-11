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
    <Link href={`/proyectos/${project.slug}`} passHref>
      <a className={styles.ProjectCard}>
        <div className={styles.ProjectCardImage}>
          <Image src={project.coverImage} alt={project.title} layout="fill" />
        </div>
        <div className={styles.ProjectCardInfo}>
          <h4 className={styles.ProjectCardName}>
            {project.title.toUpperCase()}
          </h4>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
