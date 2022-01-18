import { FC } from "react";
import { Value } from "@components/about-us/types";

const values: Value[] = [
  {
    id: 1,
    name: "Reconocimiento",
    description:
      "Reconocemos el esfuerzo y compromiso de nuestros colaboradores y brindamos oportunidades de desarrollo personal y profesional.",
  },
  {
    id: 2,
    name: "Comporomiso",
    description:
      "Reconocemos el esfuerzo y compromiso de nuestros colaboradores y brindamos oportunidades de desarrollo personal y profesional.",
  },
  {
    id: 3,
    name: "Exigencia",
    description:
      "Reconocemos el esfuerzo y compromiso de nuestros colaboradores y brindamos oportunidades de desarrollo personal y profesional.",
  },
  {
    id: 4,
    name: "Vocación de servicio",
    description:
      "Reconocemos el esfuerzo y compromiso de nuestros colaboradores y brindamos oportunidades de desarrollo personal y profesional.",
  },
  {
    id: 5,
    name: "Honestidad",
    description:
      "Actuamos con rectitud en los trabajos que realizamos, haciendo uso adecuado y óptimo de los recursos del proyecto.",
  },
];

import styles from "@styles/EnterpriseValues.module.scss";
import EnterpriseValueCard from "@components/about-us/EnterpriseValueCard";

const EnterpriseValues: FC = () => {
  return (
    <section className={styles.EnterpriseValues}>
      {values.map((value) => (
        <EnterpriseValueCard key={value.id} value={value} />
      ))}
    </section>
  );
};

export default EnterpriseValues;
