import { FC } from "react";
import { Value } from "@components/about-us/types";

const values: Value[] = [
  {
    id: 1,
    name: "Reconocimiento",
    description:
      "Reconocemos el esfuerzo y compromiso de nuestros colaboradores y brindamos oportunidades de desarrollo personal y profesional.",
    icon: "/img/aplauso.png",
  },
  {
    id: 2,
    name: "Comporomiso",
    description:
      "Reconocemos el esfuerzo y compromiso de nuestros colaboradores y brindamos oportunidades de desarrollo personal y profesional.",
    icon: "/img/acuerdo.png",
  },
  {
    id: 3,
    name: "Exigencia",
    description:
      "Reconocemos el esfuerzo y compromiso de nuestros colaboradores y brindamos oportunidades de desarrollo personal y profesional.",
    icon: "/img/lider.png",
  },
  {
    id: 4,
    name: "Vocación de servicio",
    description:
      "Reconocemos el esfuerzo y compromiso de nuestros colaboradores y brindamos oportunidades de desarrollo personal y profesional.",
    icon: "/img/call.png",
  },
  {
    id: 5,
    name: "Honestidad",
    description:
      "Actuamos con rectitud en los trabajos que realizamos, haciendo uso adecuado y óptimo de los recursos del proyecto.",
    icon: "/img/like.png",
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
