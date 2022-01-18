import { Project } from "@components/projects/types";

const Projects: Project[] = [
  {
    id: 1,
    name: "Coolbox",
    pictureUrl: "/img/oxxo-color.jpg",
    location: "Plaza Norte",
  },
  {
    id: 2,
    name: "Oxxo",
    pictureUrl: "/img/oxxo-color.jpg",
    location: "Plaza Norte",
  },
  {
    id: 3,
    name: "Tambo",
    pictureUrl: "/img/oxxo-color.jpg",
    location: "Plaza Norte",
  },
  {
    id: 4,
    name: "Oxxo",
    pictureUrl: "/img/oxxo-color.jpg",
    location: "Plaza Norte",
  },
  {
    id: 5,
    name: "Tambo",
    pictureUrl: "/img/oxxo-color.jpg",
    location: "Plaza Norte",
  },
  {
    id: 6,
    name: "Coolbox",
    pictureUrl: "/img/oxxo-color.jpg",
    location: "Plaza Norte",
  },
];

import styles from "@styles/ProjectCards.module.scss";
import ProjectCard from "@components/projects/ProjectCard";

const ProjectCards = () => {
  return (
    <div className={styles.Projects}>
      <div className={styles.ProjectCards}>
        {Projects.map((project) => (
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
