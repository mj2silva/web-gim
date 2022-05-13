import { FC } from "react";
import Image from "next/image";
import styles from "@styles/OurTeam.module.scss";
import SectionSubtitle from "@components/SectionSubtitle";

const OurTeam: FC = () => {
  return (
    <section className={styles.OurTeam}>
      <div className={styles.OurTeamPresentation}>
        <div className={styles.OurTeamTitle}>
          <SectionSubtitle title="Conozca nuestro equipo" />
        </div>
        <div className={styles.OurTeamDescription}>
          <p>
            Somos profesionales dedicados al Servicios de la Gestión
            Inmobiliaria, Municipal y de Construcción, que asegura la apertura
            de sus edificaciones comerciales y/o cualquier otro producto que su
            entidad requiera.
          </p>
          <p>
            Comprendemos las necesidades que su empresa está enfrentando y
            reconocemos la única oportunidad para gestionar eficientemente los
            expedientes de licencias de obra, licencias de funcionamiento,
            autorización de anuncios, asesorías para inspecciones de INDECI,
            conformidad de obra y declaratoria de fábrica, Inscripción registral
            y saneamiento físico legal de sus locales comerciales.
          </p>
        </div>
        {/*
        <Link href="/nosotros/nuestro-equipo" passHref>
          <a className={"button " + styles.OurTeamButton}>
            Ver equipo completo
          </a>
        </Link>
        */}
      </div>
      <div className={styles.OurTeamPhoto}>
        <div className={styles.OurTeamImage}>
          <Image src="/img/team.jpg" layout="fill" alt="GIM Team" />
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
