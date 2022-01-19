import { FC } from "react";
import styles from "@styles/ProjectPage.module.scss";
import SectionSubtitle from "@components/SectionSubtitle";
import ProjectImageSlider from "@components/projects/singleProject/ProjectImageSlider";

const images = [
  {
    src: "/img/casa.png",
    alt: "casa villanueva",
  },
  {
    src: "/img/int1.png",
    alt: "casa villanueva",
  },
  {
    src: "/img/int2.png",
    alt: "casa villanueva",
  },
  {
    src: "/img/int3.png",
    alt: "casa villanueva",
  },
  {
    src: "/img/int4.png",
    alt: "casa villanueva",
  },
  {
    src: "/img/int5.png",
    alt: "casa villanueva",
  },
];

const Project: FC = () => {
  return (
    <section className={styles.Project}>
      <div className={styles.ProjectContainer}>
        <ProjectImageSlider className={styles.ProjectSlider} images={images} />
        <div className={styles.ProjectPresentation}>
          <div className={styles.ProjectTitle}>
            <SectionSubtitle title="Casa Villanueva" />
          </div>
          <div className={styles.ProjectDescription}>
            <p>
              Somos profesionales dedicados al Servicios de la Gesti6n
              lnmobiliaria, Municipal y de Construcción, que asegura la apertura
              de sus edificaciones comerciales y/o cualquier otro producto que
              su entidad requiera.
            </p>
            <p>
              Comprendemos las necesidades que su empresa está enfrentando y
              reconocemos la única oportunidad para gestionar eficientemente los
              expedientes de licencias de obra, licencias de funcionamiento,
              autorizaci6n de anuncios, asesorias para inspecciones de INDECI,
              conformidad de obra y declaratoria de fábrica, Inscripci6n
              registral y saneamiento fisico legal de sus locales comerciales.
            </p>
            <p>
              Somos profesionales dedicados al Servicios de la Gesti6n
              lnmobiliaria, Municipal y de Construcción, que asegura la apertura
              de sus edificaciones comerciales y/o cualquier otro producto que
              su entidad requiera.
            </p>
            <p>
              Comprendemos las necesidades que su empresa está enfrentando y
              reconocemos la única oportunidad para gestionar eficientemente los
              expedientes de licencias de obra, licencias de funcionamiento,
              autorizaci6n de anuncios, asesorias para inspecciones de INDECI,
              conformidad de obra y declaratoria de fábrica, Inscripci6n
              registral y saneamiento fisico legal de sus locales comerciales.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.ProjectButton}>
        <button className={"button"}>Ver más proyectos</button>
      </div>
    </section>
  );
};

export default Project;
