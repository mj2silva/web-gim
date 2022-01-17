import { FC } from "react";
import Image from "next/image";
import SectionTitle from "@components/SectionTitle";
import styles from "@styles/ServicesPresentation.module.scss";

const ServicesPresentation: FC = () => {
  return (
    <section className={styles.ServicesPresentation}>
      <div className={styles.ServicesPresentationTitle}>
        <SectionTitle
          text="Somos el verdadero"
          highlightedText="llave en mano"
        />
      </div>
      <div className={styles.ServicesPresentationCards}>
        <div className={styles.ServicesPresentationCard}>
          <div className={styles.ServicesPresentationInfo}>
            <div className={styles.ServicesPresentationNumber}>1</div>
            <div className={styles.ServicesPresentationImage}>
              <Image
                src="/img/municipal.svg"
                alt="gestion-municipal"
                layout="fill"
              />
            </div>
          </div>
          <div className={styles.ServicesPresentationName}>
            Gestión Municipal
          </div>
        </div>
        <div className={styles.ServicesPresentationCard}>
          <div className={styles.ServicesPresentationInfo}>
            <div className={styles.ServicesPresentationNumber}>2</div>
            <div className={styles.ServicesPresentationImage}>
              <Image
                src="/img/municipal.svg"
                alt="gestion-municipal"
                layout="fill"
              />
            </div>
          </div>
          <div className={styles.ServicesPresentationName}>
            Construcción Retail
          </div>
        </div>
        <div className={styles.ServicesPresentationCard}>
          <div className={styles.ServicesPresentationInfo}>
            <div className={styles.ServicesPresentationNumber}>3</div>
            <div className={styles.ServicesPresentationImage}>
              <Image
                alt="gestion-municipal"
                src="/img/municipal.svg"
                layout="fill"
              />
            </div>
          </div>
          <div className={styles.ServicesPresentationName}>
            Mantenimiento Retail
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPresentation;
