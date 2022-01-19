import { FC } from "react";
import { Benefit } from "@components/about-us/types";

const benefits: Benefit[] = [
  {
    id: 1,
    icon: "/img/contrato.png",
    description:
      "Mejoramos de forma cuantificable los tiempos para la obtenci6n de las licencias y autorizaciones municipales de su negocio.",
  },
  {
    id: 2,
    icon: "/img/proceso.png",
    description:
      "Mejoramos de forma cuantificable los tiempos para la obtenci6n de las licencias y autorizaciones municipales de su negocio.",
  },
  {
    id: 3,
    icon: "/img/grupo.png",
    description:
      "Mejoramos de forma cuantificable los tiempos para la obtenci6n de las licencias y autorizaciones municipales de su negocio.",
  },
  {
    id: 4,
    icon: "/img/ahorro.png",
    description:
      "Mejoramos de forma cuantificable los tiempos para la obtenci6n de las licencias y autorizaciones municipales de su negocio.",
  },
];

import styles from "@styles/EnterpriseBenefits.module.scss";
import EnterpriseBenefit from "@components/about-us/EnterpriseBenefit";
import SectionSubtitle from "@components/SectionSubtitle";

const EnterpriseBenefits: FC = () => {
  return (
    <section className={styles.EnterpriseBenefits}>
      <div className={styles.EnterpriseBenefitsTitle}>
        <SectionSubtitle title="¿Por qué elegirnos?" />
      </div>
      <div className={styles.EnterpriseBenefitsCards}>
        {benefits.map((benefit) => (
          <EnterpriseBenefit key={benefit.id} benefit={benefit} />
        ))}
      </div>
    </section>
  );
};

export default EnterpriseBenefits;
