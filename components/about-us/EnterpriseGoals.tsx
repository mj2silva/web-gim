import { FC } from "react";
import SectionSubtitle from "@components/SectionSubtitle";

import styles from "@styles/EnterpriseGoals.module.scss";

const EnterpriseGoals: FC = () => {
  return (
    <section className={styles.EnterpriseGoals}>
      <div className={styles.EnterpriseGoalsMission}>
        <SectionSubtitle title="Misión" />
        <ol>
          <li>
            Proveer soluciones integrales y eficientes de nuestros proyectos a
            cargo, buscando la satisfacci6n del cliente, y la continuidad
            operativa de los mismos.
          </li>
          <li>
            Desarrollar para nuestros clientes soluciones inmobiliaria
            trascendentes, creadas por un grupo de personas enfocado en la
            excelencia.
          </li>
          <li>
            Mejorar de forma cuantificable los tiempos para la obtenci6n de las
            licencias y autorizaciones de las tiendas.
          </li>
          <li>Reducir los costos innecesarios.</li>
        </ol>
      </div>
      <div className={styles.EnterpriseGoalsVision}>
        <SectionSubtitle title="Visión" />
        <p>
          &quot;Ubicar a GIM-PERU SAC, como una empresa lider en el mercado de
          la gesti6n inmobiliaria y municipal en el sector retail, reconocida
          como una empresa de gran prestigio, calidad y compromiso humano con
          nuestros clientes, por su capacidad de buscar constantemente ser el
          mejor aliado en solucionar integralmente la necesidad del mercado, con
          un grupo de profesionales enfocados en la excelencia&quot;.
        </p>
      </div>
    </section>
  );
};

export default EnterpriseGoals;
