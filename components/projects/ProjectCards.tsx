import { Project } from "@components/projects/types";
import styles from "@styles/modules/ProjectCards.module.scss";
import ProjectCard from "@components/projects/ProjectCard";
import { FC } from "react";

type Props = {
  projects: Project[];
}

const ProjectCards:FC<Props> = ({projects}) => {
  return (
    <div className={styles.Projects}>
      <div className={styles.ProjectCards}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className={styles.ProjectsLoad}>
        <button className={"button " + styles.ProjectsLoadButton}>
          <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectCards;
