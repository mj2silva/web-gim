import { FC } from "react";
import { Benefit } from "@components/about-us/types";

const benefits: Benefit[] = [
  {
    id: 1,
    icon: "/img/contrato.png",
    description:
      "Mejoramos de forma cuantificable los tiempos para la obtención de las licencias y autorizaciones municipales de su negocio.",
  },
  {
    id: 2,
    icon: "/img/proceso.png",
    description:
      "Proveemos soluciones integrales y eficientes de nuestros proyectos a cargo, buscando la satisfacción del cliente, y la continuidad operativa de los mismos.",
  },
  {
    id: 3,
    icon: "/img/grupo.png",
    description:
      "Desarrollamos para nuestros clientes soluciones inmobiliarias trascendentes, creadas por un grupo de personas enfocado en la excelencia.",
  },
  {
    id: 4,
    icon: "/img/ahorro.png",
    description: "Reducimos los costos innecesarios.",
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
