import { FC, useState } from "react";
import Link from "next/link";

import styles from "@styles/ProjectPage.module.scss";
import SectionSubtitle from "@components/SectionSubtitle";
import ProjectImageSlider from "@components/projects/singleProject/ProjectImageSlider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

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
  const [showMore, setShowMore] = useState(false);
  const icon = showMore ? faMinus : faPlus;

  const handleShowMore = () => {
    setShowMore((sm) => !sm);
  };

  return (
    <section className={styles.Project}>
      <div className={styles.ProjectContainer}>
        <ProjectImageSlider className={styles.ProjectSlider} images={images} />
        <div className={styles.ProjectPresentation}>
          <div className={styles.ProjectTitle}>
            <SectionSubtitle title="Casa Villanueva" />
          </div>
          <div
            className={styles.ProjectDescription}
            style={{
              maxHeight: showMore ? "initial" : "12rem",
              overflow: "hidden",
            }}
          >
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
