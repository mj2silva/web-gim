import { FC } from "react";
import GIMLogo from "@components/GIMLogo";

import styles from "@styles/Presentation.module.scss";

const Presentation: FC = () => {
  return (
    <section className={styles.Presentation}>
      <GIMLogo className={styles.PresentationLogo} />
      <div className={styles.PresentationMessage}>
        <p>
          Somos profesionales dedicados al Servicios de la Gestión Inmobiliaria,
          Municipal y de Construcción, que asegura que la apertura de sus
          edificaciones comerciales y/o cualquier otro producto que su entidad
          requiera.
        </p>
      </div>
    </section>
  );
};

export default Presentation;
