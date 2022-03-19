import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@components/SectionTitle";
import styles from "@styles/modules/ServicesPresentation.module.scss";

const services = [
  {
    src: "/img/icon4.png",
    alt: "gestion-municipal",
    name: "Gestión Municipal",
  },
  {
    src: "/img/icon5.png",
    alt: "gestion-municipal",
    name: "Construcción Retail",
  },
  {
    alt: "gestion-municipal",
    src: "/img/icon6.png",
    name: "Mantenimiento Retail",
  },
];

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
        {services.map((service, index) => (
          <Link key={service.name} href={`/servicios#${index + 1}`} passHref>
            <a className={styles.ServicesPresentationCard}>
              <div className={styles.ServicesPresentationInfo}>
                <div className={styles.ServicesPresentationNumber}>
                  {index + 1}
                </div>
                <div className={styles.ServicesPresentationImage}>
                  <Image
                    src={service.src}
                    alt={service.alt}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className={styles.ServicesPresentationName}>
                {service.name}
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesPresentation;
