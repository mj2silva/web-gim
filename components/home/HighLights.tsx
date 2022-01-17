import { FC } from "react";

import styles from "@styles/HighLights.module.scss";
import HighLightNumber from "@components/home/HighLightNumber";

const HighLights: FC = () => {
  return (
    <section className={styles.HighLights}>
      <div className={styles.HighLightsItem}>
        <div className={styles.HighLightsTitle}>
          <HighLightNumber className={styles.HighLightsNumber} value={30} />
          <div className={styles.HighLightsText}>días</div>
        </div>
        <div className={styles.HighLightsName}>
          Tiempo de ejecución promedio
        </div>
      </div>
      <div className={styles.HighLightsItem}>
        <div className={styles.HighLightsTitle}>
          <div className={styles.HighLightsText}>+</div>
          <HighLightNumber
            className={styles.HighLightsNumber}
            value={100}
            timeout={20}
          />
        </div>
        <div className={styles.HighLightsName}>Clientes satisfechos</div>
      </div>
      <div className={styles.HighLightsItem}>
        <div className={styles.HighLightsTitle}>
          <HighLightNumber className={styles.HighLightsNumber} value={30} />
        </div>
        <div className={styles.HighLightsName}>
          Proyectos retail ejecutados exitosamente
        </div>
      </div>
      <div className={styles.HighLightsItem}>
        <div className={styles.HighLightsTitle}>
          <HighLightNumber className={styles.HighLightsNumber} value={17} />
        </div>
        <div className={styles.HighLightsName}>
          Licencias aprobadas a nivel nacional
        </div>
      </div>
      <div className={styles.HighLightsItem}>
        <div className={styles.HighLightsTitle}>
          <HighLightNumber className={styles.HighLightsNumber} value={15} />
        </div>
        <div className={styles.HighLightsName}>
          Años de trayectoria especializada en el sector
        </div>
      </div>
    </section>
  );
};

export default HighLights;
